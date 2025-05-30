<script lang="ts">
    import {data} from '../stores/appData.svelte';

    let { date = new Date(),
            currentNumber = 0,
            showDate = true
     } = $props();

    let value: number = $state(currentNumber); // Der aktuelle Wert
    let min: number = 0; // Minimaler Wert
    let max: number = 500; // Maximaler Wert
    let step: number = 1; // Schrittweite

    let id = $derived(data.userID);

    // Funktion zum Erhöhen des Wertes
    const increment = () => {
        if (value + step <= max) {
            value += step;
        }
    };

    // Funktion zum Verringern des Wertes
    const decrement = () => {
        if (value - step >= min) {
            value -= step;
        }
    };

    let day = $derived(date);

    let formattedDate = $derived.by(() =>{
        const d = new Date(day);
        const daystring = `${d.getDate().toString().padStart(2, '0')}.${(d.getMonth() + 1).toString().padStart(2, '0')}.${d.getFullYear()}`;
        return daystring;
    });

    async function postBahnen(bahnen: number) {
        try {
            // Update the local data store and the database
            const existingIndex = data.swimData.findIndex((item: { day: string; anzahl: number }) => item.day === formattedDate);
            //if day is already in data, update it
            if (existingIndex !== -1) {
                const updateFormData = new FormData();
                updateFormData.append('userid', (id ?? '').toString());
                updateFormData.append('day', formattedDate);
                updateFormData.append('anzahl', (value ?? '').toString());

                data.swimData[existingIndex] = {
                    day: formattedDate,
                    anzahl: value
                };
                const response = await fetch('https://www.schlossbad-erwitte.de/apps/bahnen/php/updateDayBahnen.php?', {
                    method: 'POST',
                    body: updateFormData
                });

                if (!response.ok) {
                    throw new Error('Update Bahnen failed');
                }
            //if it is a new entry, push it to local store and post it to the database
            } else {
                data.swimData.push({
                    day: formattedDate,
                    anzahl: value
                });
                const response = await fetch('https://www.schlossbad-erwitte.de/apps/bahnen/php/uploadBahnen.php?userid='+id+'&day='+formattedDate+'&anzahl='+value, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                if (!response.ok) {
                    throw new Error('Postbahnen failed');
                }
            }
            const userDataTotal = new FormData();
            userDataTotal.append('userid', (id ?? '').toString());
            userDataTotal.append('summe', (data.bahnenSum).toString());
            //in any case, update the users total number of bahnen
            const totalResponse = await fetch('https://www.schlossbad-erwitte.de/apps/bahnen/php/updateUser.php?', {
                method: 'POST',
                body: userDataTotal
            });
            if (!totalResponse.ok) {
                throw new Error('Update user bahnen failed');
            }
        console.log('Postbahnen successful:', data);
        } catch (error) {
            console.error('Error during postbahnen:', error);
        }
    }

</script>

<div class="flex flex-col gap-2 text-blue-900">
    {#if showDate}
        <input
            type="date"
            bind:value={day}
            max={new Date().toISOString().split('T')[0]}
            class="border border-blue-400 rounded px-2 py-1 max-w-80 text-lg w-full text-blue-900"
        />
    {/if}

    <div class="flex items-center gap-2">
        <button 
            onclick={decrement} 
            disabled={value <= min} 
            class="bg-blue-400 text-blue-900 hover:bg-blue-500 font-bold rounded px-2 py-1 text-lg disabled:cursor-not-allowed disabled:opacity-40"
        >
            -
        </button>
        <input
            type="number"
            bind:value
            min={min}
            max={max}
            step={step}
            class="w-12 text-center text-lg px-1 py-0.5 border border-blue-400 rounded text-blue-900"
        />
        <button 
            onclick={increment} 
            disabled={value >= max} 
            class="bg-blue-400 text-blue-900 hover:bg-blue-500 font-bold rounded px-2 py-1 text-lg disabled:cursor-not-allowed disabled:opacity-50"
        >
            +
        </button>
        <button 
            onclick={(e) => {data.editingIndex = null; e.stopPropagation(); postBahnen(value);}} 
            disabled={value > max || value < min} 
            class="bg-blue-400 text-blue-900 hover:bg-blue-500 font-bold rounded px-2 py-1 text-lg disabled:cursor-not-allowed disabled:opacity-50"
        >
            speichern
        </button>
    </div>
    {#if value > max || value < min}
        <p class="text-blue-900 text-sm">Bitte einen Wert zwischen {min} und {max} eingeben.</p>
    {/if}
</div>

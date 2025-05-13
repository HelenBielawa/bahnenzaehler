<script lang="ts">
    import {data} from '../stores/appData.svelte';

    let value: number = $state(0); // Der aktuelle Wert
    let min: number = 0; // Minimaler Wert
    let max: number = 5000; // Maximaler Wert
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

    let today = new Date();
    let formattedDate = `${today.getDate().toString().padStart(2, '0')}.${(today.getMonth() + 1).toString().padStart(2, '0')}.${today.getFullYear()}`;

    async function postBahnen(bahnen: number) {
        try {
            const response = await fetch('https://www.schlossbad-erwitte.de/apps/bahnen/php/uploadBahnen.php?userid='+id+'&day='+formattedDate+'&anzahl='+value, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error('Postbahnen failed');
            }

            const data = await response.json();
            console.log('Postbahnen successful:', data);
        } catch (error) {
            console.error('Error during postbahnen:', error);
        }
    }
</script>
<div class="w-full flex items-center gap-2">
    <button 
        onclick={decrement} 
        disabled={value <= min} 
        class="px-2 py-1 text-lg  bg-blue-400 rounded disabled:cursor-not-allowed disabled:opacity-40"
    >
        -
    </button>
    <input
        type="number"
        bind:value
        min={min}
        max={max}
        step={step}
        class="w-12 text-center text-lg px-1 py-0.5 border border-blue-400 rounded"
    />
    <button 
        onclick={increment} 
        disabled={value >= max} 
        class="px-2 py-1 text-lg bg-blue-400 rounded disabled:cursor-not-allowed disabled:opacity-50"
    >
        +
    </button>
    <button 
        onclick={() => postBahnen(value)} 
        disabled={value >= max} 
        class="px-2 py-1 text-lg bg-blue-400 rounded disabled:cursor-not-allowed disabled:opacity-50"
    >
        speichern
    </button>
</div>

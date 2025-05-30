<script lang="ts">

    import { stopPropagation } from 'svelte/legacy';
import { data } from '../stores/appData.svelte';
    import Input from './Input.svelte';
    type SwimItem = { day: string; anzahl: number };
    
    let swimData = $derived(data.swimData);
    let maxanzahl = $derived(
        (swimData as SwimItem[]).map((item: SwimItem) => item.anzahl).reduce((a: number, b: number) => Math.max(a, b), 0)
    );

    function getDate(dateString: string): Date {
        const [day, month, year] = dateString.split(".");
        return new Date(`${year}-${month}-${day}`);
    }


    let swims = $derived(swimData
            .filter((item: SwimItem) => item.anzahl > 0 && item.day !== undefined && item.anzahl !== undefined)
            .map((item: SwimItem) => ({
                ...item,
                percentOfMax: (item.anzahl / maxanzahl) * 100
            }))
            .sort((a: SwimItem, b: SwimItem) => getDate(b.day).getTime() - getDate(a.day).getTime()));

    function formatDate(dateString: string): string {
            return getDate(dateString).toLocaleDateString("de-DE", {
            month: "long",
            day: "2-digit"
            });
        }
        
    function startEdit(i: number) {
        data.editingIndex = i;
    }

    function closeEdit() {
        data.editingIndex = null;
    }

</script>
<div>

    <div class="w-full bg-blue-400 overflow-hidden relative rounded-lg text-blue-900">
        <br>
        {#each swims as swim, i}

            <button type="button" class="w-full flex flex-col h-10 relative text-blue-900 mb-2 hover:bg-blue-300 hover:shadow-md"
                tabindex="0"
                onclick={() => startEdit(i)}>
                
                <!-- Swim bar -->
                <div
                    class="bg-black h-2 relative"
                    style="width: {Math.min(swim.percentOfMax, 100)}%; transition: width 1s;"
                >
                    <!--Bar End Marker -->
                    <div class="absolute -top-2.5 right-0 h-7 w-2 bg-black"></div>
                </div>
                {#if data.editingIndex === i}
                    <div class="fixed inset-0 bg-transparent bg-opacity-30 flex items-center justify-center z-50">
                        <div class="bg-blue-200 rounded-lg p-6 shadow-lg min-w-[300px] fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div class="absolute top-2 right-2 hover:bg-blue-500 rounded font-bold text-blue-900 p-1"
                                tabindex="0"
                                onkeydown={() => closeEdit()}
                                role="button"
                                onclick={(e) => {data.editingIndex = null; e.stopPropagation()}}>x</div>
                            <h2 class="text-lg text-blue-900 font-semibold mb-4">Bahnen bearbeiten für den {swim.day}</h2>
                            <Input date={getDate(swim.day)} currentNumber={swim.anzahl} showDate={false}/>
                        </div>
                    </div>
                {/if}
                <!-- Swim date -->
                <span class="text-sm mt-2 text-left w-full block">{formatDate(swim.day)}: {swim.anzahl} Bahnen</span>
                
            </button>
          
        {/each}
    </div>
</div>

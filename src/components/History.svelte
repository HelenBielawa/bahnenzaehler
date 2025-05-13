<script lang="ts">


    interface Props {
        swimData: Array<{ day: string; anzahl: number }>;
    }
    let {
        swimData = [{"day": "2025.05-01", "anzahl": 22}],
    } : Props = $props();

    $inspect("bahnen data in history", swimData);
    let maxanzahl = $derived(swimData.map((item) => item.anzahl).reduce((a, b) => Math.max(a, b), 0));

    let swims = $derived(swimData
        .filter((item) => item.anzahl > 0)
        .map((item) => ({
            ...item,
            percentOfMax: (item.anzahl / maxanzahl) * 100
        })));
        function formatDate(dateString: string): string {
            const [day, month, year] = dateString.split(".");
            const date = new Date(`${year}-${month}-${day}`);
            return date.toLocaleDateString("de-DE", {
            month: "long",
            day: "2-digit"
            });
        }
        

</script>
<div>
    <div class="w-full bg-blue-400 overflow-hidden relative rounded-lg text-blue-900">
        <br>
        {#each swims as swim, i}
            <div class="w-full flex flex-col h-10 relative  text-blue-900 mb-2">
                <!-- Swim bar -->
                <div
                    class="bg-black h-2 relative"
                    style="width: {Math.min(swim.percentOfMax, 100)}%;"
                >
                    <!-- Marker -->
                    <div class="absolute -top-2.5 right-0 h-7 w-2 bg-black"></div>
                </div>

                <!-- Swim date -->
                <span class="text-sm mt-1">{formatDate(swim.day)}: {swim.anzahl} Bahnen</span>
            </div>
        {/each}
    </div>
</div>

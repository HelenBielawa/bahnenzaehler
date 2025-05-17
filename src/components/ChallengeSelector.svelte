<script>
    import { data } from '../stores/appData.svelte';
    let challenges = [
        {"destination":"Stirpe",
        "bahnen": 56},
        {"destination":"Lippstadt",
        "bahnen": 135},
        {"destination":"Bad Anröchte",
        "bahnen": 120},
        {"destination":"Soest",
        "bahnen": 340},
        {"destination":"Gütersloh",
        "bahnen": 660},
        {"destination": "Bielefeld",
        "bahnen": 920},
        {"destination": "Berlin",
        "bahnen": 7220},    
        {"destination": "Hamburg",
        "bahnen": 6020},
        {"destination": "Sylt",
        "bahnen": 7300},
        {"destination": "Stockholm",
        "bahnen": 21040},
        {"destination": "Mallorca",
        "bahnen": 28000},
        {"destination": "Hawaii",
        "bahnen": 236600}
    ].sort((a, b) => a.bahnen - b.bahnen);

</script>

<div class="flex flex-col items-center justify-center bg-blue-300 text-center p-4">

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {#each challenges as challenge}
                <button class=" text-blue-900 bg-white shadow-md rounded-lg p-4 cursor-pointer hover:bg-blue-300"
                    on:click={() => {
                        data.challengeData = {
                            destination: challenge.destination,
                            bahnen: challenge.bahnen
                        };
                    }}>
                    <h2 class="text-xl font-semibold">{challenge.destination}</h2>
                    <p>Bahnen: {challenge.bahnen}</p>
                </button>
            {/each}
        </div>

</div>

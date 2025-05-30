<script>
    import { data } from '../stores/appData.svelte';

    $inspect("challengeData", data.challengeData);
    let challenges = [
        {"id": 1, "destination":"Stirpe", "bahnen": 56},
        {"id": 2, "destination":"Lippstadt", "bahnen": 135},
        {"id": 3, "destination":"Bad Anröchte", "bahnen": 120},
        {"id": 4, "destination":"Soest", "bahnen": 340},
        {"id": 5, "destination":"Gütersloh", "bahnen": 660},
        {"id": 6, "destination": "Bielefeld", "bahnen": 920},
        {"id": 7, "destination": "Berlin", "bahnen": 7220},    
        {"id": 8, "destination": "Hamburg", "bahnen": 6020},
        {"id": 9, "destination": "Sylt", "bahnen": 7300},
        {"id": 10, "destination": "Stockholm", "bahnen": 21040},
        {"id": 11, "destination": "Mallorca", "bahnen": 28000},
        {"id": 12, "destination": "Hawaii", "bahnen": 236600}
    ].sort((a, b) => a.bahnen - b.bahnen);

       async function chooseChallenge() {

        try{
            const response = await fetch('https://www.schlossbad-erwitte.de/apps/bahnen/php/updateUser.php?userid='+data.userID+'&challengeid='+data.challengeData.id, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error('Updating Challenge failed');
            }

        } catch (error) {
            console.error('Error during postbahnen:', error);
        }
    } 

</script>

<div class="flex flex-col items-center justify-center bg-blue-300 text-center p-4">

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {#each challenges as challenge}
                <button class=" text-blue-900 bg-white shadow-md rounded-lg p-4 cursor-pointer hover:bg-blue-300"
                    on:click={() => {
                        data.challengeData = {
                            destination: challenge.destination,
                            bahnen: challenge.bahnen,
                            id: challenge.id
                        };
                        chooseChallenge()
                    }}>
                    <h2 class="text-xl font-semibold">{challenge.destination}</h2>
                    <p>Bahnen: {challenge.bahnen}</p>
                </button>
            {/each}
        </div>

</div>

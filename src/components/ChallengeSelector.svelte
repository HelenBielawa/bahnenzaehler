<script>
    import { data } from '../stores/appData.svelte';

       async function chooseChallenge() {

        try{
            const challengeData = new FormData();
            challengeData.append('id', (data.userID ?? '').toString());
            challengeData.append('challengeid', (data.challengeId ?? '').toString());
            const response = await fetch('https://www.schlossbad-erwitte.de/apps/bahnen/php/updateUser.php?', {
                method: 'POST',
                body: challengeData
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
            {#each data.challenges as challenge}
                <button class=" text-blue-900 bg-blue-200 shadow-md rounded-lg p-4 cursor-pointer hover:bg-blue-300"
                    onclick={() => {
                        data.challengeId = challenge.id;
                        chooseChallenge()
                    }}>
                    <h2 class="text-xl font-semibold">{challenge.destination}</h2>
                    <p>Bahnen: {challenge.bahnen}</p>
                </button>
            {/each}
        </div>

</div>

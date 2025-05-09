<script lang="ts">
    import { goto } from '$app/navigation';
    import { data } from '../../stores/appData.svelte';

    import ChallengeStatus from "../../components/ChallengeStatus.svelte";
	import Input from "../../components/Input.svelte";
    import History from "../../components/History.svelte";

    import swimData from "../../stores/dummyUserData.json";

    let id = 8;

    async function getBahnen(id: number) {
        try {
            const response = await fetch('https://www.schlossbad-erwitte.de/apps/bahnen/php/getBahnen.php?userid=8', {
                method: 'GET',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error('Getbahnen failed');
            }

            const swimData = await response.json();
            data.swimData = swimData;
            console.log('Fetching swimdata successful: ', swimData);

            goto('/meinebahnen');
            // Handle the response data (e.g., save token, redirect, etc.)
        } catch (error) {
            console.error('Error during login:', error);
            // Handle error (e.g., show error message to user)
        }
    }

    let currentSwimData = getBahnen(id)

</script>   



<div class="flex flex-col gap-4 bg-blue-300 min-h-screen w-screen items-center py-4 ">


    <div class="flex flex-col w-4/5 gap-4">

        <div class="text-center text-4xl font-bold text-white py-4">
            <span class="text-blue-900"><h1>Bahnenzähler</h1></span>
        </div>
        <div class="text-l font-bold text-white py-4">
            <h2 class="text-lg text-blue-900 font-bold">Heutige Bahnen eintragen:</h2>
        </div>
        <Input />
        <div class="text-l font-bold text-white py-4">
            <h2 class="text-lg text-blue-900 font-bold">Status deiner Challenge:</h2>
        </div>
        <ChallengeStatus
            challengeDestination="Stockholm"
            challengeOrigin="Erwitte"
            challengeLength={1500}
            currentDistance={100.5}
        />

        {#if swimData.length > 0}
        <div class="text-l font-bold text-white py-4">
            <h2 class="text-lg text-blue-900 font-bold">Deine Bahnen:</h2>
        </div>
        <History
            swimData={swimData}
        />
        {/if}

    </div>
</div>
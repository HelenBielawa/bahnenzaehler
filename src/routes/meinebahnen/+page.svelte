<script lang="ts">
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    import { data } from '../../stores/appData.svelte';
    import ChallengeSelector from '../../components/ChallengeSelector.svelte';
    import ChallengeStatus from "../../components/ChallengeStatus.svelte";
	import Input from "../../components/Input.svelte";
    import History from "../../components/History.svelte";

    let id = $derived(data.userID);
    let showChallenges : Boolean = $state(false);
    async function getBahnen(id: number) {
        try {
            const response = await fetch('https://www.schlossbad-erwitte.de/apps/bahnen/php/getBahnen.php?userid='+id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error('Getbahnen failed');
            }

            const swimData = await response.json();
            data.swimData = swimData.bahnen;
            console.log('Fetching swimdata successful: ', swimData);

            return swimData.bahnen; // Return the fetched data
        } catch (error) {
            console.error('Error during login:', error);
            return []; // Return an empty array on error
        }
    }
    onMount(() => {
        getBahnen(id);       

    });
    $inspect("userid in my page", data.userID)
    $effect(() => {
        if (data.userID == 0 || data.userID == undefined) {
            goto('/login');
        }
    });
  
</script>   



<div class="flex flex-col gap-4 bg-blue-300 min-h-screen w-screen items-center py-4 ">


    <div class="flex flex-col w-4/5 gap-4">
    <div class="flex justify-end">
        <button
            class="bg-blue-400 text-blue-900 hover:bg-blue-500 font-bold rounded px-2 py-1 text-lg"
            onclick={() => {
                data.userID = 0;
                data.swimData = [];
                data.challengeData = {destination: "Stirpe", bahnen: 56};
                goto('/login');
            }}
            aria-label="Logout"
        >
            Logout
        </button>
    </div>
        <div class="text-center text-4xl font-bold text-white py-4">
            <span class="text-blue-900"><h1>Bahnenzähler</h1></span>
        </div>
        <div class="text-l font-bold text-white py-4">
            <h2 class="text-lg text-blue-900 font-bold">Neue Bahnen eintragen:</h2>
        </div>
        <Input />
        <div class="text-l font-bold text-white py-4">
            <h2 class="text-lg text-blue-900 font-bold">Challenge-Status:</h2>
        </div>
        {#if data.swimData?.length >0}
            <ChallengeStatus />
        {/if}
        <div class="text-l font-bold text-white py-4">
            <h2 class="text-lg text-blue-900 font-bold">Andere Challenge anzeigen:
                <button
                class="bg-blue-400 text-blue-900 hover:bg-blue-500 font-bold rounded px-2 py-1 text-lg" 
                style="padding: {showChallenges ? '0.5rem 1.5rem' : '0.5rem'}"
                onclick={() => showChallenges = !showChallenges}
                aria-label="Show challenges"
                >
                {#if showChallenges}
                    -
                {:else}
                    +
                {/if}
                </button>
                </h2>
        </div>
        {#if showChallenges}
            <div >
                <ChallengeSelector />
            </div>
        {/if}
 
        <div class="text-l font-bold text-white py-4">
            <h2 class="text-lg text-blue-900 font-bold">Deine Bahnen:</h2>
        </div>
        {#if data.swimData?.length > 0}
            <History />
        {:else}
            <div class="text-l font-bold text-white py-4">
                <h2 class="text-lg text-blue-900 font-bold">Trag oben ein, wie viel du heute geschwommen bist. Dann siehst du hier deine Fortschritts-Übersicht!.</h2>
            </div>
        {/if}



    </div>

</div>
<script lang="ts">
	import { goto } from '$app/navigation';
    import Auth from '../../components/Auth.svelte';
    let deleteUser: Boolean = $state(false);
</script>


<div class="flex flex-col gap-4 items-center justify-center min-h-screen bg-blue-300 text-center p-4 text-blue-900">
    <h1 class="text-blue-900">Möchtest du dein Bahnenzähler-Konto wirklich löschen?</h1>
    <button class="w-40 bg-blue-200 text-blue-900 hover:bg-blue-500 font-bold rounded px-2 py-1 text-lg"
            onclick={() => {
                deleteUser = true;
            }}
            aria-label="Konto löschen"
        >
        ja, Konto löschen
    </button>
    <button class="w-40 bg-blue-200 text-blue-900 hover:bg-blue-500 font-bold rounded px-2 py-1 text-lg"
            onclick={() => {
                deleteUser = false;
                goto('/meinebahnen');
            }}
            aria-label="Konto behalten"
        >
        nein, Konto behalten
    </button>
    {#if deleteUser}
        Ok, schade. Bitte gib nochmal deinen Nutzernamen und Passwort ein, um das Löschen deines Kontos zu bestätigen.
        <Auth type="delete" />
    {/if}

</div>
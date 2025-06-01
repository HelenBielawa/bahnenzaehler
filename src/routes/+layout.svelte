<script lang="ts">
	import '../app.css';
    import { goto } from '$app/navigation';
	let { children } = $props();
</script>
<div class="bg-blue-300 min-h-screen">
{@render children()}

    <footer class="w-full py-4 text-blue-900 text-center text-sm bg-blue-300 fixed bottom-0 left-0 z-10"
        style="pointer-events: none;">
        <div class="flex flex-col md:flex-row justify-center items-center gap-2" style="pointer-events: auto;"></div>
        <div class="flex flex-col md:flex-row justify-center items-center gap-2">
            <button onclick={() => goto('/changepw')} class="hover:underline">
                Passwort ändern
            </button>
            <span class="hidden md:inline">|</span>
            <button onclick={() => goto('/delete')} class="hover:underline">
                Konto löschen
            </button>
            <span class="hidden md:inline">|</span>
            <button onclick={() => goto('/impressum')} class="hover:underline">
                Impressum
            </button>
            <span class="hidden md:inline">|</span>
            <a href="https://www.schlossbad-erwitte.de" target="_blank" rel="noopener noreferrer" class="hover:underline">
                Zur Schlossbad-Website
            </a>
        </div>
    </footer>
</div>
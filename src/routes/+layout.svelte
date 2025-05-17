<script lang="ts">
	import '../app.css';
    import { goto } from '$app/navigation';
	let { children } = $props();
</script>

{@render children()}

    <footer class="w-full py-4 text-blue-900 text-center text-sm  bg-blue-300">
        <div class="flex flex-col md:flex-row justify-center items-center gap-2">
            <button onclick={() => goto('/impressum')} class="hover:underline">
                Impressum
            </button>
            <span class="hidden md:inline">|</span>
            <a href="https://www.schlossbad-erwitte.de" target="_blank" rel="noopener noreferrer" class="hover:underline">
                Zur Schlossbad-Website
            </a>
        </div>
    </footer>
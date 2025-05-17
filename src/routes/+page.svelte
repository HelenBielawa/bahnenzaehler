<script lang="ts">


</script>

<div class="flex flex-col items-center justify-center min-h-screen bg-blue-300 text-center p-4">
    <div class="w-full flex flex-col h-10 relative  text-blue-900 mb-2">
        <!-- Marker -->
        <div class="absolute -top-2.5 left-0 h-7 w-2 bg-black"></div>
        <!-- Swim bar -->
        <div
            class="bg-black h-2 relative"
            style="width: 100%;"
        >
            <!-- Marker -->
            <div class="absolute -top-2.5 right-0 h-7 w-2 bg-black"></div>
        </div>

    </div>

    <h1 class="text-4xl font-bold mb-4">Willkommen beim Bahnenzähler</h1>
    <p class="text-lg m-8">
        Wie wäre es, in diesem Sommer mal über den eigenen Beckenrand zu schwimmen? Trage bei jedem Besuch im <a href="https://schlossbad-erwitte.de/">Schlossbad Erwitte</a> in dieser App ein, wie viele 50-Meter-Bahnen Du geschafft hast. 56 Bahnen nach Stirpe, 7.300 nach Sylt … Was ist Dein Ziel?
    </p>

    <div class="flex gap-4">
        <button 
            class="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            on:click={() => window.location.href = '/login'}>
            Login
        </button>
        <button 
            class="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            on:click={() => window.location.href = '/register'}>
            Registrieren
        </button>
    </div>
    <img src="/beckenboden.png" alt="Beckenboden" class="my-8 max-w-full rounded shadow-lg" />
    <p class="text-lg m-8">
        Diese App ist inspiriert von der Gestaltung unseres Beckenbodens: Die typografische Arbeit im 50-Meter-Becken beschäftigt sich mit dem eigenen Standort und dem gedanklichen in die Ferne Schweifen. In der Mitte des Beckens das süße Versprechen: Sie haben ihr Ziel erreicht. Die gleichnamige Arbeit wurde von der Künstlerin <a href="https://www.jennagesse.de/" target="_blank">Jenna Gesse</a> für die Aktion freischwimmen - Kunst im Bad entwickelt und mit viel ehrenamtlichem Engagement umgesetzt.

Wir freuen uns sehr, dass Kunst im Bad auch in 2025 wieder bei uns im Schlossbad Erwitte vertreten ist und bedanken uns recht herzlich bei allen beteiligten Künstlern.
 Weitere Infos gibt es bei <a href="https://kunstimbad.de/" target="_blank">freischwimmen - Kunst im Bad</a> oder bei <a href="https://www.instagram.com/freischwimmen_kunst_im_bad/" target="_blank">Instagram</a>.
    </p>

    <div class="w-full flex flex-col h-10 relative  text-blue-900 mb-2">
        <!-- Marker -->
        <div class="absolute -top-2.5 left-0 h-7 w-2 bg-black"></div>
        <!-- Swim bar -->
        <div
            class="bg-black h-2 relative"
            style="width: 100%;"
        >
            <!-- Marker -->
            <div class="absolute -top-2.5 right-0 h-7 w-2 bg-black"></div>
        </div>

    </div>
</div>
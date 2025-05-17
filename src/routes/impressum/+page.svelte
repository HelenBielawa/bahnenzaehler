<script>
	import { goto } from "$app/navigation";

    // No script needed for static content
</script>

<div class="flex flex-col gap-4 bg-blue-300 min-h-screen w-screen items-center py-4">
    <div class="flex justify-end w-4/5">
        <button
            class="bg-blue-400 text-blue-900 hover:bg-blue-500 font-bold rounded px-2 py-1 text-lg"
            onclick={() => {
                goto('/meinebahnen');
            }}
            aria-label="Back"
        >
            Zurück
        </button>
    </div>
    <div class="text-center text-4xl font-bold text-white py-4">
        <h1 class="text-blue-900">Bahnenzähler</h1>
    </div>
    <div class="text-l font-bold text-white py-4">
        <h2 class="text-lg text-blue-900 font-bold">Impressum</h2>
    </div>
    <div class=" p-6 max-w-2xl w-full ">
        <p class="mb-4">
            Der Verein <span class="font-semibold">Schlossbad Erwitte e.V.</span> verfolgt ausschließlich und unmittelbar gemeinnützige Zwecke. Zweck des Vereins ist die Förderung des Schwimmsports aller Altersgruppen, Förderung der Kultur im Zusammenhang mit Schwimmen, die Förderung des Behindertensports im Bereich Schwimmen, Förderung von Veranstaltungen, die das Ziel haben den Schwimmsport der breiten Bevölkerung nahe zu bringen. Zur Verwirklichung der vorgenannten Zwecke betreibt der Verein das Schlossbad in der Stadt Erwitte.
        </p>
        <ul class="mb-4 list-disc list-inside">
            <span class="font-semibold">Amtsgericht Lippstadt:</span> VR 962<br>
            <span class="font-semibold">Finanzamt Lippstadt Steuernummer:</span> 330/5761/3546
        </ul>
        <div class="mb-4">
            <span class="font-semibold">Verantwortlicher gemäß §10 Absatz 2 MDStV:</span><br>
            Dr. Jürgen Tacken
        </div>
        <div class="mb-4">
            <span class="font-semibold">Technisch Verantwortlicher:</span><br>
            Dr. Jürgen Tacken
        </div>
        <div class="mb-4">
            <span class="font-semibold">Adresse des Freibades:</span><br>
            Erwitter Schlossbad<br>
            Graf-Landsberg-Straße 15a<br>
            59597 Erwitte<br>
            Telefon: 02943/2535
        </div>
        <div class="mb-4">
            <span class="font-semibold">Geschäftsadresse des Vereins:</span><br>
            Jürgen Tacken<br>
            Kiefernallee 25<br>
            59597 Erwitte<br>
            Telefon: 02943/3192
        </div>
        <div class="mb-4">
            <span class="font-semibold">Haftungshinweis</span><br>
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt verlinkter Seiten sind ausschließlich deren Betreiber verantwortlich.
        </div>
        <div class="mb-4">
            <span class="font-semibold">Datenschutz</span><br>
            Der Schutz und die Sicherheit von persönlichen Daten hat bei uns eine hohe Priorität. Daher halten wir uns strikt an die Regeln des deutschen Bundesdatenschutzgesetzes (BDSG). Nachfolgend werden Sie darüber informiert, welche Art von Daten erfasst und zu welchem Zweck sie erhoben werden:
        </div>
        <div class="mb-4">
            <span class="font-semibold">Datenübermittlung / Datenprotokollierung</span><br>
            Beim Besuch dieser Seite verzeichnet der Web-Server automatisch Log-Files, die keiner bestimmten Person zugeordnet werden können. Diese Daten beinhalten z. B. den Browsertyp und -version, verwendetes Betriebssystem, Referrer URL (die zuvor besuchte Seite), IP-Adresse des anfragenden Rechners, Zugriffsdatum und -uhrzeit der Serveranfrage und die Dateianfrage des Client (Dateiname und URL). Diese Daten werden nur zum Zweck der statistischen Auswertung gesammelt. Eine Weitergabe an Dritte, zu kommerziellen oder nichtkommerziellen Zwecken, findet nicht statt.
        </div>
        <div class="mb-4">
            <span class="font-semibold">Nutzung persönlicher Daten</span><br>
            Persönliche bzw. personenbezogene Daten werden auf den Webseiten vom Verein Schlossbad Erwitte e.V. weder erhoben noch verarbeitet.
        </div>
        <div class="mb-4">
            <span class="font-semibold">Änderungen dieser Datenschutzbestimmungen</span><br>
            Da durch neue Technologien und die ständige Weiterentwicklung dieser Webseite Änderungen an dieser Datenschutzerklärung vorgenommen werden können, empfehlen wir Ihnen sich die Datenschutzerklärung in regelmäßigen Abständen wieder durchzulesen.
        </div>
        <div>
            <span class="font-semibold">Fragen</span><br>
            Bei Fragen zu diesen Datenschutzbestimmungen wenden Sie sich bitte über unsere <a href="mailto:support@schlossbad-erwitte.de">Support E-Mail</a> an uns.
        </div>
    </div>
</div>
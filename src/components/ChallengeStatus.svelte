<script lang="ts">
    interface Props {
        challengeDestination: string;
        challengeOrigin: string;
        challengeLength: number;
        currentDistance: number;
    }
    let {
        challengeDestination = "",
        challengeOrigin = "",
        challengeLength = 10,
        currentDistance = 0,
    } : Props = $props();

    // Berechnung des Fortschritts in Prozent
    let progressPercentage = $derived((currentDistance / challengeLength) * 100);
    let missingDistance = $derived(challengeLength - currentDistance);
</script>

<div class="w-full bg-blue-400 overflow-hidden h-30 relative rounded-lg text-blue-900 p-2">
        <div>
        <div
            class="absolute top-13.5 bottom-0 bg-blue-300 h-3"
            style="width: 100%;"
        ></div>
        <div
            class="absolute top-13.5 bottom-0 bg-black h-3"
            style="width: {Math.min(progressPercentage, 100)}%;"
        ></div>
        <div
            class="absolute top-10 bottom-0 bg-black h-10 w-3"
            style="left: {Math.min(progressPercentage, 100)}%;"
        ></div>
        <span class="absolute top-0 left-2 ">
            {challengeOrigin}
        </span>
        <span class="absolute top-0 right-2">
            {challengeDestination}
        </span>
        <span class="absolute top-20 left-2 ">
            0 km
        </span>
        <span class="absolute top-20 right-2">
            {challengeLength} km
        </span>
        </div>
        

    </div>



<script lang="ts">


    export let value: number = 0; // Der aktuelle Wert
    let min: number = 0; // Minimaler Wert
    let max: number = 5000; // Maximaler Wert
    let step: number = 1; // Schrittweite


    // Funktion zum Erhöhen des Wertes
    const increment = () => {
        if (value + step <= max) {
            value += step;
        }
    };

    // Funktion zum Verringern des Wertes
    const decrement = () => {
        if (value - step >= min) {
            value -= step;
        }
    };
</script>
<div class="w-full flex items-center gap-2">
    <button 
        on:click={decrement} 
        disabled={value <= min} 
        class="px-2 py-1 text-lg  bg-blue-400 rounded disabled:cursor-not-allowed disabled:opacity-40"
    >
        -
    </button>
    <input
        type="number"
        bind:value
        min={min}
        max={max}
        step={step}
        class="w-12 text-center text-lg px-1 py-0.5 border border-blue-400 rounded text-center"
    />
    <button 
        on:click={increment} 
        disabled={value >= max} 
        class="px-2 py-1 text-lg bg-blue-400 rounded disabled:cursor-not-allowed disabled:opacity-50"
    >
        +
    </button>
</div>

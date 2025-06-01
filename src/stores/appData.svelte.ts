class Data {

    userID: number|undefined = $state();
    userName: string = $state("");

    challenges = [
        {"id": 1, "destination":"Stirpe", "bahnen": 56},
        {"id": 2, "destination":"Lippstadt", "bahnen": 135},
        {"id": 3, "destination":"Anröchte", "bahnen": 120},
        {"id": 4, "destination":"Soest", "bahnen": 340},
        {"id": 5, "destination":"Gütersloh", "bahnen": 660},
        {"id": 6, "destination": "Bielefeld", "bahnen": 920},
        {"id": 7, "destination": "Berlin", "bahnen": 7220},    
        {"id": 8, "destination": "Hamburg", "bahnen": 6020},
        {"id": 9, "destination": "Sylt", "bahnen": 7300},
        {"id": 10, "destination": "Stockholm", "bahnen": 21040},
        {"id": 11, "destination": "Mallorca", "bahnen": 28000},
        {"id": 12, "destination": "Hawaii", "bahnen": 236600}
    ].sort((a, b) => a.bahnen - b.bahnen);

    challengeId = $state(1 as number);
    challengeData: { id: number; destination: string; bahnen: number } = $derived(this.challenges.find(c => c.id === this.challengeId) || this.challenges[0]);

    swimData = $state([] as { id: number, day: string, anzahl: number }[]);

    editingIndex = $state(null as number|null);

    bahnenSum: number = $derived(this.swimData.reduce((sum: number, swim) => sum + swim.anzahl, 0)    );
}


export const data = new Data();


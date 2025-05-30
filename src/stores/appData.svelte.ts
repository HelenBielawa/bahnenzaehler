class Data {

    userID: number|undefined = $state();

    swimData = $state([] as { day: string, anzahl: number }[]);

    challengeData = $state({"destination":"Lippstadt",
        "bahnen": 135,
        "id": 1});

    editingIndex = $state(null as number|null);

    bahnenSum = $derived(() => {
        return this.swimData.reduce((sum: number, swim) => sum + swim.anzahl, 0);
    }
    );
}


export const data = new Data();


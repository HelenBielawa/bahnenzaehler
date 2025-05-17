class Data {

    userID = $state();

    swimData = $state();

    challengeData = $state({"destination":"Lippstadt",
        "bahnen": 135});
}


export const data = new Data();


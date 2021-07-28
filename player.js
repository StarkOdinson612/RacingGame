class Player {
    constructor() {
        this.name = null;
        this.index = null;
        this.distance = 0;
        this.rank = null;
    }

    getCount() {
        playerCount = database.ref('playerCount');
        playerCount.on('value', function(data) {
            playerC = data.val();
        });
    }

    updatePlayerCount(count) {
        database.ref('/').update({ 
            playerCount: count,
        });
    }

    addPlayer() {
        var pInd = "Players/player" + this.index;
        database.ref(pInd).set({
            name: this.name,
            distance: this.distance,
            rank : this.rank
        });
    }

    getRank() {
        database.ref('numFinished').on('value', (data) => {
            numFinished = data.val();
            this.rank = data.val()
        })
    }

    updateRank(rank) {
        database.ref('/').update({
            numFinished : rank
        });
    }

    readPlayerNames() {
        let players = database.ref('Players').on('value', (data) => {
            playerNames = data.val()
        });
    }
}
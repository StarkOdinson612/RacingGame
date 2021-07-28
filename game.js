class Game {
    constructor() {
    }

    getState() {
        gameState = database.ref('gameState');
        gameState.on('value', function(data) {
            gameS = data.val()
        });
    }

    // getNumFinished() {
    //     numF = database.ref('numFinished');
    //     numF.on('value', function(data) {
    //         numFinished = data.val()
    //     })
    // }

    // setNumFinished(num) {
    //     database.ref('/').update({
    //         numFinished : num
    //     });
    // }

    async waiting() {
        if (gameS == 0) {
            player = new Player();
            var pRef = await database.ref('playerCount').once("value")
            if (pRef.exists()) {
                playerCount = pRef.val();
                player.getCount();
            }
            form = new Form();
            form.setDisplay();
            console.log(playerC);   
        }
        
        car1 = createSprite(displayWidth/2 - 300, displayHeight - 30, 20, 10);
        car1.addImage(car1_img);

        car2 = createSprite(displayWidth/2 - 100, displayHeight - 30, 20, 10);
        car2.addImage(car2_img);

        car3 = createSprite(displayWidth/2 + 100, displayHeight - 30, 20, 10);
        car3.addImage(car3_img);

        car4 = createSprite(displayWidth/2 + 300, displayHeight - 30, 20, 10);
        car4.addImage(car4_img);

        cars = [car1, car2, car3, car4];

    }

    updateState(state) {
        database.ref('/').update({
            gameState : state
        });
    }

    play() {
        form.hideAll();

        background(170)

        player.readPlayerNames();
        player.getRank();

        image(track, 0, -displayHeight * 4, displayWidth, displayHeight * 5);

        if (keyDown(UP_ARROW)) {
            if (keyDown(SHIFT)) {
                player.distance += 25;
            }
            else {
                player.distance += 5;
            }
            
            player.addPlayer();
        }

        if (player.distance > 4310) {
            gameS = 2;
            numFinished += 1;
            player.rank += 1;
            player.updateRank(player.rank);
            console.log(player.rank);
            player.addPlayer();
            
            var rankElement = createElement('h2');
            rankElement.html("Rank: " + player.rank);
            rankElement.position(100,100);

        }

        var y = 100;

        var ind = 0;
        var x = 200;
        var yPos;

        for (var plr in playerNames) {
            ind += 1;
            x += 200;
            yPos = displayHeight - playerNames[plr].distance;
            cars[ind - 1].x = x;
            cars[ind - 1].y = yPos;

            if (ind == player.index) {
                camera.position.y = cars[ind - 1].y;
                camera.position.x = displayWidth/2;
            }

            text(playerNames[plr].name, 100, y);

            y += 20;
            // pPos.push(playerNames[plr].distance);
        }

        // if (pPos.length > 4) {
        //     for (i=0;i<pPos.length-4;i++) {
        //         pPos.shift();
        //     }
        // }

        // car1.position.y = car_yPos - pPos[0];
        // car2.position.y = car_yPos - pPos[1];
        // car3.position.y = car_yPos - pPos[2];
        // car4.position.y = car_yPos - pPos[3];

        drawSprites();
    }
}
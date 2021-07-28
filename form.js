class Form {
    constructor() {
         this.title = createElement('h2');

         this.input = createInput('Enter Your Name');
     
         this.button = createButton('Join Game');

         this.welcomeMsg = createElement('h2');

         this.reset = createButton('Reset Database');
    }

    setDisplay() {
         this.title.html('Asphalt 0.1');
         this.title.position(160, 50);
         this.input.position(150, 150);
         this.button.position(190,200);
         this.reset.position(250, 200);

         this.button.mousePressed(() => {
             this.input.hide();
             this.button.hide();
            // this.input.addClass('hidden');

             playerC += 1;
             player.updatePlayerCount(playerC)
             player.index = playerC;
             player.name = this.input.value();
             player.addPlayer();

            this.welcomeMsg.html('Welcome ' + player.name + '!')
            this.welcomeMsg.position(150, 150);
         });

         this.reset.mousePressed(() => {
              player.updatePlayerCount(0);
              game.updateState(0);
              player.updateRank(0);
              database.ref('Players').remove();
         })
    }

    hideAll() {
         this.button.hide();
         this.welcomeMsg.hide();
         this.title.hide();
         this.input.hide();
    }
}
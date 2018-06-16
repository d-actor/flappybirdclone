//creates game state
var mainState = {
  preload: function() {
    // loads sprites and sounds before game
    game.load.image('bird', 'assets/bird.png');
  },

  create: function() {
    // set up game, displaay, sprites
    game.stage.backgroundColor = '#71c5cf';
    game.physics.startSystem(Phaser.Physics.ARCADE);
    this.bird = game.add.sprite(130, 285, 'bird');
    //adds physics to the bird sprite
    game.physics.arcade.enable(this.bird);
    //gives the bird gravity
    this.bird.body.gravity.y = 1000;
    //calls jump function on space keyDown event
    var spaceKey = game.input.keyboard.addKey(
      Phaser.Keyboard.SPACEBAR
    );
    spaceKey.onDown.add(this.jump, this);
  },

  update: function() {
    // game logic. called 60 times per sec
    if (this.bird.y < 0 || this.bird.y > 730)
      this.restartGame();
  },

  jump: function() {
    this.bird.body.velocity.y = -350;
  },

  restartGame: function() {
    game.state.start('main');
  },
};


//init phaser, 600x 700 px game
var game = new Phaser.Game(600, 730);

//add the mainState and as 'main'
game.state.add('main', mainState);

//start the state which starts the game
game.state.start('main');

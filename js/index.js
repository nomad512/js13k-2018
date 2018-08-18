kontra.init();

kontra.keys.bind(['left', 'right', 'up', 'down'], (e) => {
	switch (e.key) {
	case ('ArrowLeft'):
		sprite.dy = 0;
		sprite.dx = -2;
		break;
	case ('ArrowRight'):
		sprite.dy = 0;
		sprite.dx = 2;
		break;
	case ('ArrowUp'):
		sprite.dx = 0;
		sprite.dy = -2;
		break;
	case ('ArrowDown'):
		sprite.dx = 0;
		sprite.dy = 2;
		break;
	default:
		console.log('invalid key', e);
	}
});

let sprite = kontra.sprite({
	x: 100,        // starting x,y position of the sprite
	y: 80,
	color: 'red',  // fill color of the sprite rectangle
	width: 20,     // width and height of the sprite rectangle
	height: 40,
	dx: 2          // move the sprite 2px to the right every frame
});

let loop = kontra.gameLoop({  // create the main game loop
	update: function() {        // update the game state
		sprite.update();

		if (sprite.x == 0 || sprite.x + sprite.width == kontra.canvas.width) {
			sprite.dx = 0;
		}

		if (sprite.y == 0 || sprite.y + sprite.height == kontra.canvas.height) {
			sprite.dy = 0;
		}
	},
	render: function() {        // render the game state
		sprite.render();
	}
});

loop.start();    // start the game

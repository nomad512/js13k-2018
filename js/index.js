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

kontra.sprite.prototype.getHitBox = function () {
	return {
		xmin: this.x,
		ymin: this.y,
		xmax: this.x + this.width,
		ymax: this.y + this.height,
	};
};

let sprite = kontra.sprite({
	x: 100,        // starting x,y position of the sprite
	y: 80,
	color: 'red',  // fill color of the sprite rectangle
	width: 20,     // width and height of the sprite rectangle
	height: 20,
	dx: 2          // move the sprite 2px to the right every frame
});

const circle = kontra.sprite({
	x: 200,
	y: 100,
	color: 'blue',
	radius: 20,
	dx: 1,
	dy: 1,
	render () {
    this.context.fillStyle = this.color;

    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.context.fill();
	},
});

let loop = kontra.gameLoop({  // create the main game loop
	update: function() {        // update the game state
		sprite.update();
		circle.update();

		if (sprite.x == 0 || sprite.x + sprite.width == kontra.canvas.width) {
			sprite.dx = 0;
		}

		if (sprite.y == 0 || sprite.y + sprite.height == kontra.canvas.height) {
			sprite.dy = 0;
		}

		if (circle.x == 0 || circle.x + circle.width == kontra.canvas.width) {
			circle.dx = -circle.dx;
		}

		if (circle.y == 0 || circle.y + circle.height == kontra.canvas.height) {
			circle.dy = -circle.dy;
		}

		const hitBox = sprite.getHitBox();

		if ((circle.x >= hitBox.xmin && circle.x < hitBox.xmax)
		&& (circle.y >= hitBox.ymin && circle.y < hitBox.ymax)) {
			circle.dx = -circle.dx;
			circle.dy = -circle.dy;
		}
	},
	render: function() {        // render the game state
		sprite.render();
		circle.render();
	}
});

loop.start();    // start the game

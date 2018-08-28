kontra.init();

// class Planet {
// 	constructor (props) {
// 		this.sprite = kontra.sprite({
// 			x: props.x,
// 			y: props.y,
// 			radius: props.radius,
// 			color: props.color,
// 		});

// 		this.x = this.sprite.x;
// 		this.y = this.sprite.y;
// 		// this.gravity = props.gravity;
// 	}

// 	update () {
// 		this.sprite.update();
// 	}

// 	render () {
// 		const { sprite } = this;

// 		sprite.context.fillStyle = this.color;
// 		sprite.context.beginPath();
// 		sprite.context.arc(sprite.x, sprite.y, sprite.radius, 0, 2 * Math.PI);
// 		sprite.context.fill();

// 		// this.sprite.render();
// 	}
// }

class Player {
	constructor (props) {
		this.sprite = kontra.sprite({
			x: props.x,
			y: props.y,
			width: 10,
			height: 10,
			color: 'red',
		});
	}

	update () {
		if (kontra.keys.pressed('left')){
      this.sprite.dx = -1.5;
    }
    else if (kontra.keys.pressed('right')) {
      this.sprite.dx = 1.5;
		}
		else {
			this.sprite.dx = 0;
		}

    if (kontra.keys.pressed('up')) {
      this.sprite.dy = -1.5;
    }
    else if (kontra.keys.pressed('down')) {
      this.sprite.dy = 1.5;
    }
		else {
			this.sprite.dy = 0;
		}

		this.sprite.update();
	}
	render () { this.sprite.render(); }
}

const player = new Player({ x: 0, y: 0 });

const loop = kontra.gameLoop({
	// resolve user actions
	update () {
		player.update();
		// planet.update();
		// moon.update();
	},
	// paint the new world
	render () {
		player.render();
		// planet.render();
		// moon.render();
	},
});

loop.start();


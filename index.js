kontra.init();

class Planet {
	constructor (props) {
		this.sprite = kontra.sprite({
			x: props.x,
			y: props.y,
			radius: props.radius,
			color: props.color,
		});

		this.x = this.sprite.x;
		this.y = this.sprite.y;
		// this.gravity = props.gravity;
	}

	update () {
		this.sprite.update();
	}

	render () {
		const { sprite } = this;

		sprite.context.fillStyle = this.color;
		sprite.context.beginPath();
		sprite.context.arc(sprite.x, sprite.y, sprite.radius, 0, 2 * Math.PI);
		sprite.context.fill();

		// this.sprite.render();
	}
}

const planet = new Planet({
	x: 300,
	y: 300,
	radius: 100,
	// color: 'blue',
	// gravity: 5,
});

class Moon extends Planet {
	constructor () {
		console.log(planet.x, planet.y)
		super({
			x: planet.x,
			y: planet.y - 150, // why?
			radius: 30,
			// color: 'blue',
			// gravity: 5,
		});

		this.radians = 0;
		this.velocity = .1; // i think this orbit is eliptical tho somehow ...
	}

	update () {
		this.radians += this.velocity;
		this.sprite.dx = Math.cos(this.radians) * 15
		this.sprite.dy = Math.sin(this.radians) * 15;
		this.sprite.update();
		// console.log(Math.floor(this.sprite.dx))
	}
}



const moon = new Moon();

const loop = kontra.gameLoop({
	update () {
		planet.update();
		moon.update();
	},
	render () {
		planet.render();
		moon.render();
	},
});

loop.start();


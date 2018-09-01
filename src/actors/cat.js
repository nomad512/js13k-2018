import kontra from '../kontra';

export default class Cat {
	constructor (props) {
		this.sprite = kontra.sprite({
			x: props.x,
			y: props.y,
			width: 40,
			height: 40,
			color: 'black',
			dx: 0,
			dy: 0,
		});

		this.speed = 100 / 60; // px per frame (ish)
	}

	update ({ playerX, playerY }) {
		const mToC = kontra.vector(playerX - this.sprite.x, playerY - this.sprite.y);
		const nDir = normalize(mToC.x, mToC.y);
		const vel = scale(nDir.x, nDir.y, this.speed);
        
		this.sprite.x += vel.x;
		this.sprite.y += vel.y;

		this.sprite.update();
	}
	
	render () { this.sprite.render(); }
}

function scale (x, y, s) {
    return kontra.vector(x * s, y *s);
}

function normalize (x, y) {
    const magnitude = getMagnitude(x, y);
    return kontra.vector(x / magnitude, y / magnitude)
}

function getMagnitude (x, y) {
    return Math.sqrt((x * x) + (y * y));
}

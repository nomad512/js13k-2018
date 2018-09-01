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

		this.speed = 10; // px
	}

	update ({ playerX, playerY }) {
		const xPlane = Math.abs(this.sprite.x - playerX);
		const yPlane = Math.abs(this.sprite.y - playerY);

		const theta = Math.atan2(yPlane, xPlane);
		const hypotenuse = this.speed;

		const deltaY = Math.sin(theta) * this.speed;
		const deltaX = Math.tan(theta) * this.speed;

		this.sprite.dy = deltaY;
		this.sprite.dx = deltaX;

		this.sprite.update();
	}
	
	render () { this.sprite.render(); }
}

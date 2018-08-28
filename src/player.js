import kontra from './kontra'

export default class Player {
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
			this.sprite.dx = -5;
		}
		else if (kontra.keys.pressed('right')) {
			this.sprite.dx = 5;
		}
		else {
			this.sprite.dx = 0;
		}

		if (kontra.keys.pressed('up')) {
			this.sprite.dy = -5;
		}
		else if (kontra.keys.pressed('down')) {
		  this.sprite.dy = 5;
		}
		else {
			this.sprite.dy = 0;
		}

		if (this.sprite.x <= 0) {
			this.sprite.x = 0;
		}

		if (this.sprite.x >= 950) {
			this.sprite.x = 950;
		}

		if (this.sprite.y <= 0) {
			this.sprite.y = 0;
		}

		if (this.sprite.y >= 590) {
			this.sprite.y = 590;
		}

		this.sprite.update();
	}
	render () { this.sprite.render(); }
}

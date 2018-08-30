import kontra from '../kontra'

export default class Obstacle {
	constructor (props) {
		this.sprite = kontra.sprite({
			x: props.x,
			y: props.y,
			width: 30,
			height: 100,
			color: 'black', // defaults to black
			dx: -5,
		});
	}

	update () {
		// remove from screen
		this.sprite.update();
	}
	
	render () { this.sprite.render(); }
}

import kontra from './kontra';
import Player from './player';

const player = new Player({ x: 380, y: 300 });

const loop = kontra.gameLoop({
	// resolve user actions
	update () {
		player.update();
	},

	// paint the new world
	render () {
		player.render();	
	},
});

loop.start();


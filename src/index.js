import kontra from './kontra';
import Player from './actors/player';
import Obstacle from './actors/obstacle';

const player = new Player({ x: 380, y: 300 });

let obstacles = [];

const loop = kontra.gameLoop({
	// resolve user actions
	update () {
		player.update();
		obstacles.forEach(o => o.update());
	},

	// paint the new world
	render () {
		obstacles = obstacles.filter(o => o.sprite.x >= -30); // obstacle width
		
		if (obstacles.length < 50) {
			obstacles.push(new Obstacle({
				x: (Math.random() * 960) + 960,
				y: Math.random() * 600,
			}));
		}
		
		
		obstacles.forEach(o => o.render());
		player.render();	
	},
});

loop.start();


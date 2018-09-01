import kontra from './kontra';
import Player from './actors/player';
import Cat from './actors/cat';

const player = new Player({ x: 250, y: 730 });
const cat = new Cat({ x: 250, y: 375 })

const loop = kontra.gameLoop({
	update () {
		player.update();
		cat.update({
			playerX: player.sprite.x,
			playerY: player.sprite.y,
		});
	},

	// paint the new world
	render () {
		player.render();	
		cat.render();	
	},
});

loop.start();


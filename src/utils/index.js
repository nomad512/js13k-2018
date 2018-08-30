import kontra from '../kontra'

export const keepInArena = sprite => {
	if (sprite.x <= 0) {
		sprite.x = 0;
	}

	if (sprite.x >= 960 - sprite.width) {
		sprite.x = 960 - sprite.width;
	}

	if (sprite.y <= 0) {
		sprite.y = 0;
	}

	if (sprite.y >= 600 - sprite.height) {
		sprite.y = 600 - sprite.height;
	}
};

export const handlePlayerMovement = sprite => {
	if (kontra.keys.pressed('left')){
		sprite.dx = -5;
	}
	else if (kontra.keys.pressed('right')) {
		sprite.dx = 5;
	}
	else {
		sprite.dx = 0;
	}

	if (kontra.keys.pressed('up')) {
		sprite.dy = -5;
	}
	else if (kontra.keys.pressed('down')) {
		sprite.dy = 5;
	}
	else {
		sprite.dy = 0;
	}
}

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

/* const wall = new Image();
    wall.src = './assets/img/dungeon_tiles.png';
    wall.onload = function() {
        const x = 100;
        const y = 100;

        ctx.drawImage(image, x, y);
    }; */

const wall = new Image();
wall.src = './assets/img/walls-and-tiles.png';
wall.onload = () => {
    const x = 0;
    const y = 0;

    ctx.drawImage(
        wall, 
        16, // left
        96, // top
        16, // width
        16, // height
        x, 
        y,
        32, // scale
        32 // scale
        );
};
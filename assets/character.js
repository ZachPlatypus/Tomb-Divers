/* const knight = new Image();
    knight.src = './assets/img/NinjaAdventure/Actor/Characters/Knight/SpriteSheet.png';
    knight.id = 'character';
    knight.onload = () => {
        const x = 0;
        const y = 0;

        ctx.drawImage(
            knight, 
            0, // left
            0, // top
            16, // width
            16, // height
            x, 
            y,
            32,
            32
            );
    }; */

function character(){

const knight = new GameObject({
    x: 350,
    y: 350,
    src: './assets/img/NinjaAdventure/Actor/Characters/Knight/SpriteSheet.png',
})

const ninja = new GameObject({
    x: 320,
    y: 320,
})

setTimeout(() => {
    knight.icon.drawIcon(this.ctx);
    ninja.icon.drawIcon(this.ctx);
}, 500)
}

character()
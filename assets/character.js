const knight = new Image();
    knight.src = './assets/img/NinjaAdventure/Actor/Characters/Knight/SpriteSheet.png';
    knight.id = 'knight';
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
    };


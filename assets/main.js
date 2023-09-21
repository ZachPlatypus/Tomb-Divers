class GameObject{
    constructor(config){
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.icon = new Icon({
            gameObject: this,
            src: config.src || './assets/img/placeholder.png'
        });
    }
}

class Icon{
    constructor(config){
        this.image = new Image();
        this.image.src = config.src;
        this.image.id= config.id;
        this.image.onload = () => {
            this.loaded = true;
        }

        this.anims = config.anims || {
            idleSouth: [
                [0,0]
            ]
        }
        this.currentAnim = config.currentAnim || "idleSouth";
        this.animFrame = 0;
        
        this.gameObject = config.gameObject;

        this.shadow = new Image();
        this.shadow.src = './assets/img/NinjaAdventure/Actor/Characters/Shadow.png'
        this.shadow.onLoad = () => {
            this.shadowLoaded = true;
        }
    }

    drawIcon(ctx){
        const x = this.gameObject.x;
        const y = this.gameObject.y;

        this.loaded && ctx.drawImage(this.image, 
            0, 0,
            16, 16,
            x, y,
            32, 32
            )
    }
}

/* function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom, callback){
        let direction = null;
        let x = left;
        let y = bottom;

        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        
        function moveCharacter(){ 
            if(direction === 'west'){
                x-=1
            }
            if(direction === 'north'){
                y+=1
            }
            if(direction === 'east'){
                x+=1
            }
            if(direction === 'south'){
                y-=1
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }
        
        setInterval(moveCharacter, 1)
        
        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
        
            if(e.key === '65'){
                direction = 'west'
            }
            if(e.key === '87'){
                direction = 'north'
            }
            if(e.key === '68'){
                direction = 'east'
            }
            if(e.key === '83'){
                direction = 'south'
            }
            callback(direction)
        })
        
        document.addEventListener('keyup', function(e){
            direction = null
            callback(direction)
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
} */
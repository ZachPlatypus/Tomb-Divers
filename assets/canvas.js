const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class Tomb{
    constructor(config){
        this.element = config.element;
        this.canvas = this.element.querySelector("#game");
    }

    init(){
        console.log("test");
        }
    }

//const image = new Image()
    //this.onload = () => {
        //this.drawImage(img, 0, 0)};
        //img.src = "./assets/img/dungeon_tiles.png";

function newImage(url){
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'absolute'
    document.body.append(image)
    return image
}

newImage("./assets/img/dungeon_tiles.png")
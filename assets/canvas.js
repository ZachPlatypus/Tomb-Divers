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

const image = new Image(){
    this.onload = () => {
        this.drawImage(img, 0, 0)
        };
        img.src = "./assets/img/dungeon_tiles.png";
}
class Ghost {
    constructor(name, color) {
        this.name  = name;
        this.color = color;
        this.position = {
            x: 0,
            y: 0,  
        }
        this.speed = 1;
    }
    move(direction) {
        this.position.x = direction.x * this.speed;
        this.position.y = direction.y * this.speed;
        console.log(this.name + 'moved to' + this.position.x + ',' + this.position);
    }

    eat(){
        pacman.unalive();
    }
    

}  
 let Clyde = new Ghost("Clyde", "orange");
 let Blinky = new Ghost("Blinky", "red");
 console.table (Clyde);
 console.table (Blinky);
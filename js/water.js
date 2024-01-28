import Particle from "./particle.js";
import Logic from "./logic.js";

export default class Water extends Particle {
    constructor(options) {
        super(options)
        this.name = "water";
        this.board = new Logic().board;
    }

    update() {
        super.update();

        for (let y = this.position.y + 1; y < this.board.size; y++) {

            let offset = this.board.index(this.position[0],y)

            if (this.board.array[offset] && this.board.value(this.position[0],y) == "Sand") {

                if (this.board.array[offset].wet != true && random() > 0.99) {

                    // let newPos = {x: this.position.x, y: y, offset: offset};
                    this.board.array[offset].wet = true;
                    super.remove();
                    break;

                }

            } else {

                break;

            }

        }
    }

    findDestination(x,y) {
        let p1, p2, p3, p4, p5;
        if (y + 1 < gridSize) p1 = (((y + 1) * gridSize) + x);
        if (y + 1 < gridSize && x + 1 < gridSize) p2 = (((y + 1) * gridSize) + x + 1);
        if (y + 1 < gridSize && x - 1 >= 0) p3 = (((y + 1) * gridSize) + x - 1);
        if (x + 1 < gridSize) p4 = ((y * gridSize) + x + 1);
        if (x - 1 >= 0) p5 = ((y * gridSize) + x - 1);
    
    
        if ( p1 && !grid[p1]) {
    
          return { position: [x,y + 1], offset: p1};
    
        } else if ( p2 && !grid[p2]) {
    
          return { position: [x + 1,y + 1], offset: p2};
    
        } else if ( p3 && !grid[p3]) {
    
          return { position: [x - 1,y + 1], offset: p3};
    
        } else if ( p4 && !grid[p4]) {
    
          return { position: [x + 1,y], offset: p4};
    
        } else if ( p5 && !grid[p5]) {
    
          return { position: [x - 1,y], offset: p5};
    
        }
    }
}
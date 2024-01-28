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

            let offset = this.board.index(this.position[0], y)

            if (this.board.array[offset] && this.board.value(this.position[0], y) == "Sand") {

                if (this.board.array[offset].wet != true && random() > 0.99) {

                    this.board.array[offset].wet = true;
                    super.remove();
                    break;

                }

            } else {

                break;

            }

        }
    }

    /* searches in 3x2 kernel around x,y coords
     * runs swap if conditions are met  */
    findDestination(x, y) {
        // hard coded kernel pattern
        // in order: LEFT, BOTTOM LEFT, BOTTOM, BOTTOM RIGHT, RIGHT
        const kernel = [[x - 1, y], [x - 1, y + 1], [x, y + 1], [x + 1, y + 1], [x + 1, y]];

        if (this.board.inBounds(...kernel[2])) {
            if (!this.board.value(...kernel[2])) {
                return { position: kernel[2], offset: this.board.index(...kernel[2]) }
            } else if (this.board.inBounds(...kernel[1])) {
                if (!this.board.value(...kernel[1])) {
                    if (this.board.inBounds(...kernel[3]) && !this.board.value(...kernel[3])) {
                        const r = (Math.round(Math.random()) * 2) + 1
                        console.log(r)
                        return { position: kernel[r], offset: this.board.index(...kernel[r]) }
                    }
                    return { position: kernel[1], offset: this.board.index(...kernel[1]) }
                }
            } else if (this.board.inBounds(...kernel[3])) {
                if (!this.board.value(...kernel[3])) {
                    return { position: kernel[3], offset: this.board.index(...kernel[3]) }
                }
            }
        }
    }
}
import Particle from './particle.js'
import Logic from './logic.js';

export default class Sand extends Particle {
    constructor(options) {
        super(options)
        this.name = "sand";
        this.wet = false;   
        this.board = new Logic().board;
    }

    /* searches in 3x2 kernel around x,y coords
     * runs swap if conditions for gravity, collision, etc. are met  */
    findDestination(x, y) {
        // hard coded kernel seach pattern
        // in order; LEFT, BOTTOM LEFT, BOTTOM, BOTTOM RIGHT, RIGHT
        const kernel = [[x - 1, y], [x - 1, y + 1], [x, y + 1], [x + 1, y + 1], [x + 1, y]]

        if (this.board.inBounds(...kernel[2])) {
            if (!this.board.value(...kernel[2])) {
                return {position: kernel[2], offset: this.board.index(...kernel[2])}
            } else {
                if (this.board.inBounds(...kernel[1])) {
                    if(!this.board.value(...kernel[1])) {
                        return {position: kernel[1], offset: this.board.index(...kernel[1])}
                    }
                }

                if(this.board.inBounds(...kernel[3])) {
                    if(!this.board.value(...kernel[3])) {
                        return {position: kernel[3], offset: this.board.index(...kernel[3])}
                    }
                }
            }
        }

    }
}
import Particle from './particle.js'
import Logic from './logic.js';

export default class Sand extends Particle {
    constructor(options) {
        super(options)
        this.name = "sand";
        this.wet = false;   
        this.board = new Logic().board;
    }

    /* searches in 3x1 kernel around x,y coords
     * runs swap if conditions for gravity, collision, etc. are met  */
    findDestination(x, y) {
        // hard coded kernel seach pattern
        // in order; BOTTOM LEFT, BOTTOM, BOTTOM RIGHT
        const kernel = [[x - 1, y + 1], [x, y + 1], [x + 1, y + 1]]

        if (this.board.inBounds(...kernel[1])) {
            if (!this.board.value(...kernel[1])) {
                return {position: kernel[1], offset: this.board.index(...kernel[1])}
            } else {
                if (this.board.inBounds(...kernel[0])) {
                    if(!this.board.value(...kernel[0])) {
                        return {position: kernel[0], offset: this.board.index(...kernel[0])}
                    }
                }

                if(this.board.inBounds(...kernel[2])) {
                    if(!this.board.value(...kernel[2])) {
                        return {position: kernel[2], offset: this.board.index(...kernel[2])}
                    }
                }
            }
        }

    }
}
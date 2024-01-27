import Logic from './logic.js'

export default class Particle {
    constructor(options) {
        this.position = options.position;
        this.offset = options.offset;

        this.board = new Logic().board;
    }

    /* updates the position of the particle (to be called each frame) */
    update() {
        const pos = this.findDestination(...this.position)

        if (pos) {
            this.board.buffer.push([this.position, pos.position]);
            this.position = pos.position;
            this.offset = pos.offset
        }
    }

    // erases this instance of the particle
    erase() {
        this.board.array.splice( this.offset, 1 )
    }
}


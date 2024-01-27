import Board from './board.js'

export default class Particle {
    constructor(options) {
        this.position = options.position;
    }

    /* updates the position of the particle (to be called each frame) */
    update() {
        const pos = this.findDestination(...this.position)

        if (pos) {
            this.logic.instructions.push(...this.position, ...pos)
        }
    }

    // erases this instance of the particle
    erase() {
        this.board.array.splice( this.board.array.indexOf(this), 1 )
    }
}


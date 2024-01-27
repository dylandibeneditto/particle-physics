import Logic from './logic.js'

export default class Display {
    constructor(dom, board) {
        this.logic = new Logic();

        /* input */
        this.dom = dom;
        this.board = board;

        /* storage */
        this.isAnimating = false;

        this.dom.width = this.board.size-1;
        this.dom.height = this.board.size-1;
        this.animation()
    }

    animation() {
        this.render()
        requestAnimationFrame(this.animation.bind(this))
    }

    render() {
        const ctx = this.dom.getContext("2d");
        ctx.clearRect(0, 0, this.dom.width, this.dom.height)
        for (let i = 0; i < this.board.array.length; i++) {

            const x = i % this.board.size;
            const y = Math.floor(i / (this.board.size));
            const v = this.board.array[i]
            if (v) {
                this.board.array[i].update()
                ctx.fillStyle = `rgb(255,255,255)`
                ctx.fillRect(x, y, 1, 1)
            }

        }
        this.board.applyBuffer()
    }
}
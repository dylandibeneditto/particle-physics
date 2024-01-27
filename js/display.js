import Logic from './logic.js'

export default class Display {
    constructor(dom, board) {
        this.logic = new Logic();

        /* input */
        this.dom = dom;
        this.board = board;

        /* storage */
        this.isAnimating = false;

        this.dom.width = window.innerWidth;
        this.dom.height = window.innerHeight;
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
            const v = this.board.value(x, y)
            if (v !== 0) {
                this.logic.findDestination(x, y)
                ctx.fillStyle = `rgb(255,255,255)`
                ctx.fillRect(x * this.board.res, y * this.board.res, this.board.res, this.board.res)
            }

        }
        this.logic.swapAll()
    }
}
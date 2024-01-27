import Logic from './logic.js'

export default class Display {
    constructor(dom, board) {
        this.logic = new Logic(board)

        /* input */
        this.dom = dom;
        this.board = board;

        /* storage */
        this.isAnimating = false;

        this.dom.width = window.innerWidth;
        this.dom.height = window.innerHeight;
        this.render()
    }

    // self explanatory
    startAnimation() {
        this.isAnimating = true;
        requestAnimationFrame(this.animation.bind(this))
    }

    // self explanatory
    stopAnimation() {
        this.isAnimating = false;
    }

    animation() {
        this.render()
        if (this.isAnimating) requestAnimationFrame(this.animation.bind(this))
    }

    render() {
        const ctx = this.dom.getContext("2d");
        ctx.clearRect(0, 0, this.dom.width, this.dom.height)
        for (let i = 0; i < this.board.array.length; i++) {
            const item = this.board.array[i];

            const x = i % this.board.w;
            const y = Math.floor(i / (this.board.w));
            const v = this.board.value(x, y)

            ctx.fillStyle = `rgb(${v * 255},${v * 255},${v * 255})`
            ctx.fillRect(x * this.board.res, y * this.board.res, this.board.res, this.board.res)
            if (v !== 0) {
                this.logic.findDestination(x, y)
            }

        }
    }
}
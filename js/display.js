export default class Display {
    constructor(dom, board) {
        /* input */
        this.dom = dom;
        this.board = board;

        /* storage */
        this.isAnimating = false;

        this.dom.width = window.innerWidth;
        this.dom.height = window.innerHeight;
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
        console.log("FRAME")
        if (this.isAnimating) requestAnimationFrame(this.animation.bind(this))
    }
}
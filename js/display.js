export default class Display {
    constructor(dom, board) {
        /* input */
        this.dom = dom;
        this.board = board;
        console.log(this.board)

        this.dom.width = window.innerWidth;
        this.dom.height = window.innerHeight;
        // called on window resize
        window.addEventListener('resize', ()=> {
        })
    }
}
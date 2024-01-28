import Board from "./board.js"
import Display from "./display.js"
import Sand from './sand.js'
import Water from './water.js'

export default class Logic {
    static instance;
    constructor() {
        if (Logic.instance) {
            return Logic.instance
        }
        Logic.instance = this;

        this.board = new Board(100);
        this.display = new Display(document.getElementById("canvas"), this.board)

        setInterval(()=> {
            const x = Math.floor(Math.random()*100)
            const y = Math.floor(Math.random()*100)
            if(!this.board.value(x,y)) {
                this.board.write([x,y], new Water({offset:x+(y*this.board.size), position:[x,y]}))
            }
        }, 100)
    }
}
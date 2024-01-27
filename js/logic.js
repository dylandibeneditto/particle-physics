import Board from "./board.js"
import Display from "./display.js"
import Sand from './sand.js'

export default class Logic {
    static instance;
    constructor() {
        if (Logic.instance) {
            return Logic.instance
        }
        Logic.instance = this;

        this.board = new Board(100);
        this.display = new Display(document.getElementById("canvas"), this.board)

        this.board.write([5,2], new Sand({offset:5+(2*10), position:[5,2]}))
    }
}
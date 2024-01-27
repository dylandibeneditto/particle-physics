import Board from "./board.js"
import Display from "./display.js"

export default class Logic {
    static instance;
    constructor() {
        if (Logic.instance) {
            return Logic.instance
        }
        Logic.instance = this;

        this.instruction = []

        this.board = new Board(10);
        this.display = new Display(document.getElementById("canvas"), this.board)

    }

    /* searches in 3x2 kernel around x,y coords
     * runs swap if conditions for gravity, collision, etc. are met  */
    findDestination(x, y) {
        // hard coded kernel seach pattern
        // in order; LEFT, BOTTOM LEFT, BOTTOM, BOTTOM RIGHT, RIGHT
        const kernel = [[x - 1, y], [x - 1, y + 1], [x, y + 1], [x + 1, y + 1], [x + 1, y]]

        if (this.board.inBounds(...kernel[2])) {
            if (this.board.value(...kernel[2]) == 0) {
                this.instruction.push([[x, y], kernel[2]])
            } else {
                if (this.board.inBounds(...kernel[1])) {
                    if(this.board.value(...kernel[1]) == 0) {
                        this.instruction.push([[x,y], kernel[1]])
                    }
                }

                if(this.board.inBounds(...kernel[3])) {
                    if(this.board.value(...kernel[3]) == 0) {
                        this.instruction.push([[x,y], kernel[3]])
                    }
                }
            }
        }

    }

    /* takes in instruction variable and follows instructions to prevent accidental recursion */
    swapAll() {
        if(this.instruction.length>0) {
            for (let i = 0; i < this.instruction.length; i++) {
                const item = this.instruction[i]
                this.board.array;
            }
            this.instruction = []
        }
    }
}
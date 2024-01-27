export default class Logic {
    constructor(board) {
        /* input */
        this.board = board;

        this.instruction = []
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
                console.log("FLIPPED")
            }
        }
    }

    /* takes in instruction variable and follows instructions to prevent accidental recursion */
    swapAll() {
        for (let i = 0; i < this.instruction.length; i++) {
            const item = this.instruction[i]
            this.board.swap(...item);
        }
        this.instruction = []
    }
}
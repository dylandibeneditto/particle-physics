export default class Board {
    constructor(resolution) {
        /* input */
        this.res = resolution;

        /* commonly referenced values */

        // starts indexing at zero
        this.w = Math.floor(window.innerWidth / this.res) - 1;
        this.h = Math.floor(window.innerHeight / this.res) - 1;

        /* storage */
        this.array = new Array((this.w) * (this.h))
    }

    // reinitializes width and height variables

    resize() {
        this.w = Math.floor(window.innerWidth / this.res) - 1;
        this.h = Math.floor(window.innerHeight / this.res) - 1;
    }

    /* justified with origin in top left corner
     * starts indexing at values (0,0)
     * returns index which can be used within other functions  */
    index(x, y) {

        // check if number is within bounds
        if ((x >= 0 && x <= this.w) && (y >= 0 && y <= this.h)) {
            return x + ((y - 1) * this.w)
        } else {
            throw new Error(`\n\nInputted coordinate (${x}, ${y})\nis not within boundaries of (width: ${this.w}, height: ${this.h})\n`)
        }

    }

    /* justified in top left corner
     * starts indexing at values (0,0)
     * returns value of array at index  */
    value(x, y) {
        return this.array[this.index(x, y)]==undefined ? 0 : this.array[this.index(x, y)]
    }

    /* writes value to specified index
     * p - array of xy coord
     * a - value which is to be written to the array  */
    write(p, a) {

        // check if a is a number
        if (typeof a === "number") {
            // check if array is of 2 length
            if (p.length === 2) {
                this.array[this.index(p[0], p[1])] = a
            } else {
                throw new Error(`\n\nInputted array 'p': [${p}] has length: ${p.length}\nExpected length for this input is 2\n`)
            }
        } else {
            throw new Error(`\n\nInputted value 'a' has typeof "${typeof a}"\nExpected type is number\n`)
        }
    }

    /* swaps two values at two 2d indexes
     * takes in two coordinate arrays  */
    swap(pa, pb) {

        if(pa.length == 2 && pb.length == 2) {
            const temp = this.array[this.index(pa[0], pa[1])]
            this.array[this.index(pa[0], pa[1])] = this.array[this.index(pb[0], pb[1])];
            this.array[this.index(pb[0], pb[1])] = temp;
        } else {
            throw new Error(`\n\nOne of the inputted values is the incorrect length, 'a': ${pa.length}, 'b': ${pb.length}\nExpected length for this input is 2\n`)
        }

    }
}
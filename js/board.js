export default class Board {
    constructor(size) {

        /* commonly referenced values */

        // starts indexing at zero
        this.size = size;

        /* storage */
        this.array = new Array(Math.pow(this.size, 2))
        this.buffer = [];
    }

    /* justified with origin in top left corner
     * starts indexing at values (0,0)
     * returns index which can be used within other functions  */
    index(x, y) {

        // check if number is within bounds
        if (this.inBounds(x,y)) {
            return x + ((y - 1) * this.size)
        } else {
            throw new Error(`\n\nInputted coordinate (${x}, ${y})\nis not within boundaries of (width: ${this.size}, height: ${this.size})\n`)
        }

    }

    /* justified in top left corner
     * starts indexing at values (0,0)
     * returns value of array at index  */
    value(x, y) {
        return (this.array[this.index(x, y)]) ? this.array[this.index(x,y)].name : undefined
    }

    /* writes value to specified index
     * p - array of xy coord
     * a - value which is to be written to the array */
    write(p, a) {

        // check if a is a number
        if (typeof a === "object") {
            // check if array is of 2 length
            if (p.length === 2) {
                this.array[this.index(p[0], p[1])] = a
            } else {
                throw new Error(`\n\nInputted array 'p': [${p}] has length: ${p.length}\nExpected length for this input is 2\n`)
            }
        } else {
            throw new Error(`\n\nInputted value 'a' has typeof "${typeof a}"\nExpected type is object\n`)
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

    applyBuffer() {
        if(this.buffer.length>0) {
            for (let i = 0; i < this.buffer.length; i++) {
                const item = this.buffer[i]
                this.swap(item[0], item[1]);
            }
            this.buffer = []
        }
    }

    inBounds(x,y) {
        return (x >= 0 && x <= this.size) && (y >= 0 && y < this.size)
    }
}
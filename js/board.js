export default class Board {
    constructor(resolution) {
        /* input */
        this.res = resolution;

        /* commonly referenced values */

        // starts indexing at zero
        this.w = Math.floor(window.innerWidth / this.res)-1;
        this.h = Math.floor(window.innerHeight / this.res)-1;

        /* private storage */
        this.array = new Array((this.w) * (this.h))

        this.write([1,2], 1)
    }

    // reinitializes width and height variables

    resize() {
        this.w = Math.floor(window.innerWidth / this.res)-1;
        this.h = Math.floor(window.innerHeight / this.res)-1;
    }

    
    /* justified with origin in top left corner
     * starts indexing at values (0,0)
     * returns index which can be used within other functions  */
    index(x,y) {

        // check if number is within bounds
        if((x>=0 && x<=this.w) && (y>=0 && y<=this.h)) {
            return x+((y-1)*this.w)
        } else {
            throw new Error(`\n\nInputted coordinate (${x}, ${y})\nis not within boundaries of (width: ${this.w}, height: ${this.h})\n`)
        }

    }

    /* writes value to specified index
     * p - array of xy coord
     * a - value which is to be written to the array  */
    write(p,a) {

        // check if a is a number
        if(typeof a === "number") {
            // check if array is of 2 length
            if(p.length === 2) {
                this.array[this.index(p[0], p[1])]
            } else {
                throw new Error(`\n\nInputted array 'p': [${p}] has length: ${p.length}\nExpected length of this input is 2\n`)
            }
        } else {
            throw new Error(`\n\nInputted value 'a' has typeof "${typeof a}"\nExpected type is number\n`)
        }
    }
}
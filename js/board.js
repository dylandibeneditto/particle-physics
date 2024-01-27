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

        console.log(this.locate(this.w, this.h));
    }

    // reinitializes width and height variables

    resize() {
        this.w = Math.floor(window.innerWidth / this.res)-1;
        this.h = Math.floor(window.innerHeight / this.res)-1;
    }

    
    /* justified with origin in top left corner
     * starts indexing at values (0,0)
     * returns index which can be used within other functions  */
    locate(x,y) {

        // check if number is within bounds
        if((x>=0 && x<=this.w) && (y>=0 && y<=this.h)) {
            return x+((y-1)*this.w)
        } else {
            throw new Error(`\nInputted coordinate (${x}, ${y})\n is not within boundaries of (width: ${this.w}, height: ${this.h})`)
        }
        
    }
}
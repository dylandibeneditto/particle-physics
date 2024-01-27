export default class Board {
    constructor(resolution) {
        // input
        this.res = resolution;

        // commonly referenced values
        this.w = window.innerWidth / this.res;
        this.h = window.innerHeight / this.res;

        // private storage
        this.array = new Array(Math.floor(this.w * this.h))
    }

    resize() {
        this.w = window.innerWidth / this.res;
        this.h = window.innerHeight / this.res
    }
}
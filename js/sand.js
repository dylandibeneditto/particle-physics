import Particle from './particle.js'

export default class Sand extends Particle {
    constructor(options) {
        super(options)
        this.name = "sand";
        this.wet = false;   
    }

    findDestination(x,y) {
        
    }
}
import Board from "./board.js";
import Display from "./display.js"

let board = new Board(10)
setInterval(()=> {
    board.write([Math.floor(Math.random()*board.w), Math.floor(Math.random()*board.h)], 1);
}, 10)
let display = new Display(document.getElementById("canvas"), board)
display.startAnimation()
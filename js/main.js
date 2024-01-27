import Board from "./board.js";
import Display from "./display.js"

let board = new Board(100)
board.write([0,0], 1)
let display = new Display(document.getElementById("canvas"), board)
display.startAnimation()
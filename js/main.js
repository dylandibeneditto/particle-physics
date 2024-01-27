import Board from "./board.js";
import Display from "./display.js"

let board = new Board(5)
board.write([10,10], 1)
let display = new Display(document.getElementById("canvas"), board)
display.startAnimation()
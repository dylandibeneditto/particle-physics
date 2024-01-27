import Board from "./board.js";
import Display from "./display.js"

let board = new Board(10)
let display = new Display(document.getElementById("canvas"), board)
display.startAnimation()
setTimeout(()=> {display.stopAnimation()}, 10000)
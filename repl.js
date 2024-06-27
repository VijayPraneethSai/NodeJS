// Repl - Read Evaluate Print Loop

// type node in the terminal an dtype enter we get the node command line we can do any calculation and build functions on the fly .
// to go to next line type tab+enter
/*
for e.g we can make function generateRandomNumber(){
 return Math.random();
}
 and then we can call the function for getting random numbers

 */

 // if we want to start the node terminal automatically then,

const repl = require("repl") // repl is a module

const local = repl.start("The node console started"); // we can pass any string so that it appears after we start the program.
// Ctrl + C to exit

local.on('exit', () => {   // to print something on exit
  console.log("exiting repl");
  process.exit();
});
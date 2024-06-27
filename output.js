const x = '1';
const y = '2';

console.log(x,y);

//%s format variable to string
//%d format variable to number
//%i format variable to interger
//%o format variable to object

console.log("I am %s and my age is %d", "Vijay", 19);
//console.clear();  to clear console

//console.count()  gives the count beside how many times it is printed
console.count("I am Vijay");
console.count("I am Vijay");
console.count("I am Praneeth");
// console.count("I am Vijay"); to reset the count for that particular string

//tracing
/*
const function1 = () => console.trace();
const function1 = () => function1();
 
function2();  func2 calls functions 1 so the trace is printed used in debugging
*/

// const sum = () => console.log(`The sum of 2 and 3 is ${2+3}`);
// const multiply = () => 
//   console.log(`The multipplication of 2 and 3 is ${2*3}`)

// const measureTime = () => {
//   console.time("sum()");
//   sum();
//   console.timeEnd("sum()");
//   console.time("multiply()");
//   multiply();
//   console.timeEnd("multiply()");
// };
// measureTime();

//installed progess package
//gives the downloading progress bar
const ProgressBar = require("progress");

const bar = new ProgressBar("downloading [:bar] : rate/bps :percent :etas", {
  total:20,
});

const timer= setInterval(() => {
  bar.tick();
  if(bar.complete){
    clearInterval(timer);
  }
}, 100);
const chalk = require("chalk");
console.log(chalk.blue("This is nodejs tutorial"));

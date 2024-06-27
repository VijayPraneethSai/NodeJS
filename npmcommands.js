const _ = require("lodash");  // lodash is package to handle arrays
const arr = [1, 4, 6, 8];
console.log(_.chunk(arr));  

//executable in packages
// cowsay
// npx command is used to run executables
// npx cowsay I am learning nodejs 
// created a cow shape which says the entered statement

//another way is
const cowsay = require("cowsay");
console.log(cowsay.say({
   text: "I am learning NPM module",
   e: "00",  //eyes
   t: "U"   // tongue
}));
// instead of the first line in terminal we can use the command line 
//    node -r dotenv/config env.js

require('dotenv').config();
console.log(process.env.NAME);
console.log(process.env.PROFESSION);
console.log("I am starting a new series on ", process.env.COURSE);
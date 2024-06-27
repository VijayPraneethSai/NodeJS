//Error Object

//const error = new Error("Something went wrong");
//console.log(error.stack);  // to view the stack of the code
// to print the error
// console.log(error.message);

//another way to thow an error
//throw new Error("I am error object");

//importing error object from CustomError
//const{ CustomError } = require("./CustomError");
//throw new CustomError("This is a custom error");
 //handle exception using try and catch

//  try{
//   doSomething();
//  }
//  catch(e){
//   console.log("Error Occurred");
//   console.log(e);
//  }

 function doSomething(){
  const data = fetch("localhost: 3000/api")  // fetch is a undefined function we are using it to get error
  console.log("I am form doSomething");
  const data2 = "I am form doSomething";
  return data2;
  
 }

 //Uncaught expection  (if we dont catch the expection)
//  process.on("Uncaught Exception", ( (err) => {
//         console.log("There was an uncaught exception");
//         process.exit(1);
//  }));

//  doSomething();

 //Exceptions with promises

 const promise = new Promise((resolve, reject) => {
  if(false){   //since this is false it will go to else directly
    resolve(doSomething());
  }
  else{
  reject(doSomething());
  }
 });

 promise.then((val) => {
  console.log(val);   // this val we get from doSomething function (the value that it returns)
 }).catch((err) => {
    console.log("Error Occurred");
    console.log(err);
 })

 //Exception with Async and Await

 const someFunction = async () => {
  try{
    await doSomething();
  }catch(err) {   // if doSomething makes an error (like if we uncomment the fetch function that is not defined)
    throw new CustomError(err.message);
  }
 };

someFunction();
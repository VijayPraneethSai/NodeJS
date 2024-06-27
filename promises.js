// const cart=["item1", "item2", "item3"];

// createOrder(cart, function(orderId){
//   proceesToPayment(orderId);
// }); 

// we are depending on other function to create an order

//const promise = createOrder(cart);

// when js executes the above line it creates a promise:
/**
 promis is an empty object with some undefined data
 like {data: undefined}
 after the async function is returns us data it will be filled in the object
 */
//after that we can use proceed to payment 

// promise.then(function(orderId){
//     proceedToPayment(orderId);
// });

//when data is filled to promise object the callback function will be definetly called and only once 
// there is no guarentee of this if we use callback functions

//fetch()
// can make external website calls
// fetch function returns a promise

// sometimes when we log the promise if shoes the status pending
// but if we open it and check it will be fulfilled 
// this is becaue js executes code faster and it meybe be faster than the async function when it executes code

// promise objects can have 3 states
/*
1. pending
2. fulfilled
3. rejected
*/

// we want a createOrder function to call proceedTopayment which should call showOrderSummary which should call updateWalletBalance
//using callbacks

// const cart = ["shoes", "pants", "kurta"];

// createOrder(cart, function(orderId){
//   proceedToPayment(orderId, function(paymentInfo){
//     showOrderSummary(paymentInfo, function(){
//       updateWalletBalance();
//     });
//   });
// });
// // this is not readable properly


// //Promise Chaining
// // we can either create a promise for the api and store it in a variable to which we can add .then statements to call functions or directly do this instead of creating varibales to store promises
// // but remember to add return statements if we use this method

// createOrder(cart)
//   .then(function(orderId){          
//     return proceedToPayment(orderId);
//   })
//   .then(function(paymentInfo){
//     return showOrderSummary(paymentInfo);
//   })
//   .then(function(paymentInfo){      
//     return updateWalletBalance(paymentInfo);
//   });

//   //using arrow functions

// createOrder(cart)
//   .then(orderId => proceedToPayment(orderId))
//   .then(paymentInfo => showOrderSummary(paymentInfo))
//   .then(paymentInfo => updateWalletBalance(paymentInfo)
//   );

//Consuming end promises

const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart); // orderId

promise.then(function(){  // this function will get data from the promise object after some time (look below)
  console.log(orderId);
})
.then(function(){
  proceedToPayment(orderId);  //this will return a promise
})
.then(function(paymentInfo){  //chaining promises // this then statement is for the promise proceedToPayment
  console.log(paymentInfo);
})
// this catch will handle any error in the promise chain
.catch(function(err){  // catch function is used for handling errors. We can tell what to do incase proise returns an error
     console.log(err.message); //passing the message of the err data which promise sends.
});  // if we wanted this catch to not check all the statements we need to place it below the .then statements we want the catch to read
    // catch has only reponsiblity of reading statemnet above it.
// .then from here onwards will be called even if errors are there.


//Producer end
// Creating a Promise
 function createOrder(cart){

  const pr = new Promise(function(resolve, reject){  // Promise constructor takes a function that takes 2 args resolve and reject
     //createOrder
     //validateCart
     //orderId
     if(!validateCart(cart)){
      const err = new Error("Cart is not valid");  // ceeating an error
         reject(err); // send err into promise incase of an error
     }
     // if the the cart is validated it moves ahead to the following code
    
     //logic for createOrder
     const orderId = "12345";
     if(orderId){  // this is resolving promise if orderId is valid, the promise is being resolved
       resolve(orderId);  // after it goes through the logic for createOrder we should tyoe resolve(data inside). The data inside will be returned inside the promise object and that can be used wherever we want
     }
  });   
    
  return pr;  //returning promise object which contains the data inside the resolve function in this case it is orderId

}

function proceedToPayment(orderId){
  return new Promise(function(resolve, reject){
      resolve("Payment Successful");
  })
}

function validateCart(cart){
         return true;
}















const p1 = new Promise ((resolve, reject) => {
    setTimeout(() => resolve("P1 Success"), 3000);
})
const p2 = new Promise ((resolve, reject) => {
    setTimeout(() => resolve("P2 Success"), 1000);
    //setTimeout(() => reject("P2 Fail"), 1000);
})
const p3 = new Promise ((resolve, reject) => {
    //setTimeout(() => resolve("P3 Success"), 2000);
    setTimeout(() => reject("P3 Fail"), 2000);

})

// Promise.all([p1, p2, p3])
// .then(res => {
//   console.log(res);
// })
// .catch((err) => {
//     console.error(err);   // prints error message we wrote linke an error in the browser
// })

// Promise.allSettled([p1, p2, p3])  // gives an array of objects one for each of the promise passed each with status and value if resolved, status and reason if rejected
// .then(res => {
//   console.log(res);
// })
// .catch((err) => {
//     console.error(err);   
// })

// Promise.race([p1, p2, p3])  
// .then(res => {
//   console.log(res);
// })
// .catch((err) => {
//     console.error(err);   
// })

// Promise.any([p1, p2, p3])  
// .then(res => {
//   console.log(res);
// })
// .catch((err) => {
//     console.error(err);
//     console.log(err.errors);  // this will give the array of fail messages if all the promises fail.  
// })


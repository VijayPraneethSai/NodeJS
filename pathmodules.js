const path = require("path");

const filePath = "C:/Users/College/Desktop/NodeJS/files/sample.txt"

// //dirname
// console.log(path.dirname(filePath));
// console.log(__dirname);
// //basename
// console.log(path.basename(filePath));
// console.log(__filename);
// //extension
// console.log(path.extname(filePath));

//joining
//const sampleFile = "sample.txt";
//console.log(path.join(path.dirname(filePath), sampleFile))

const fs = require("fs");
// //console.log(fs);  // to know all methods

// //read from a file
fs.readFile(filePath, (err, data)=>{
  if(err)  throw new Error("Something went wrong");
  console.log(data);
});
// try{
// const data = fs.readFileSync(
//   path.join(__dirname, "files", "sample.txt"), "utf-8"
// );
// console.log(data); 
// } catch(err){
//   console.log(err);
// }

// const filereading = async()=>{
//   try{
//     const data = await fsPromise.readFile(filePath, {encoding: "utf-8"})
//       console.log("FS PROMISES",data);
//   }catch(err){
//     console.log(err);
//   }
// };

// filereading();

// Synchronous or Blocking
//  -line by line execution 

//Asynchronous or non-blocking
//    -line by line execution not guaranteed
    //   - callback will fire 

const fs = require('fs');
let txt = fs.readFile('hello.txt','utf-8',(err,data)=>{
    console.log(err,data); //callback function
});
console.log('After readFile');

// throwing error since bnbh.txt doesnot exist
let txt1 = fs.readFile('bnbh.txt','utf-8',(err,data)=>{
    console.log(err,data);
});
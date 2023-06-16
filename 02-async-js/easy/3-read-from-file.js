//## Reading the contents of a file

//Write code to read contents of a file and print it to the console. 
//You can use the fs library to as a black box, the goal is to understand async tasks. 
//Try to do an expensive operation below the file read and see how it affects the output. 
//Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs');
const time1 = new Date();
fs.readFile('3-read-from-file.md','utf8',(err,data) => {
  console.log(data);
  console.log("Time taken to print ASYNC call is : " + (time4-time1)/1000 + "seconds \n" );
});

function expensivceTask(count){
  count++;
  console.log(count);
  if(count >= 10000){
    
    return ;
  }
  expensivceTask(count);
}
expensivceTask(0);
const time4 = new Date();

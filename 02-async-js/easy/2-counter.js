//## Counter without setInterval

//Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
let count = 0;

function counter(){
  let a = new Promise(promiseBody);
  return a;
}

function promiseBody(resolve){
  setTimeout(resolve , 1000);
}
function printCount(){
  console.clear();
  console.log(count);
  count++;
}
function caller(){
counter().then(()=> {
  printCount();
  return caller();
})
}
caller();











































//(Hint: setTimeout)
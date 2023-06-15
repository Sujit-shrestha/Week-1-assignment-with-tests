/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
function promiseBody(resolve ,n){
    setTimeout(resolve , 3000);
}

function promiseResolver(n){
  
    let a= new Promise((resolve) => {
        promiseBody(resolve , n);
    });
    return a;
}
function wait(n) {
  promiseResolver(n).then(
    () => {
        console.log( n + " miliseconds waited");
    }
  );
}
wait(3000);

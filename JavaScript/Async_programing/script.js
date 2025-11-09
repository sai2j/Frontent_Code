//Async

console.log("script start");
console.log("first");
console.log("second"); 

setTimeout(() => {
          console.log("hello")
},2000);

//callback;

function sum(a,b){
          console.log(a+b)
}
function calculator(a,b,sumcallback){
sumcallback(a,b)
}
calculator(1,2,sum)

//callbackhell:nested callback

function getdata(getdata){ 
          console.log("data",dataId);
}


/*
function define.

function myFunction(){
          console.log("myfunction");
}

function calling.
myFunction()
*/

/*
parameter jo hota hai na usko console me perform me krte hai usko value call se milte hai 
function printMessage(msg){//parameter
console.log(msg)
}
printMessage("helllo world")//argument
*/

/* tu value argument ko denga uske baad vo parameter me jayengi uske baad vo sum perform karenge
function sum(a,b){
          console.log(a+b);
}
sum(5,6)
*/

/*
return value ko tum direct nahi dekha sakte ho tume usko naye variable me store krke usko acess krna padenga
function sum(x,y){
          return x+y;
}
let value=sum(5,6)
console.log(value)
*/

/*
arrow function
const sum=(a,b)=>{
          console.log(a+b)
}
sum(4,5)*/

// let x=(a,b)=>{
//       console.log(a+b)
// }
// x(4,5)


// function Character(s){
// if(typeof(s)=="string"){
//           return s.length;

// }
// else{
//           return "input only string";
// }
// }
// let cal = Character(1234);
// console.log(cal);

// function sample(){
//           console.log("hii")
// }
// console.log(sample)

// let value = function(a,b) {
// return a+b;
// }
// console.log(value(3,4))

// let value2 = (a,b) =>{
// return a+b;
// }
// console.log(value2(3,5))

// function mad(){
//           console.log("i am mad");
// }
// function mainfunction(mad){
//    mad();
// }
// mainfunction(mad);


// function hello(){
//           console.log("hello my name is sahil");
// }
// function callback(hello){
//           console.log("raju bhai ")
// hello();
// }

// callback(hello)

// function outer(){
//           let x = 10;
//           function inner(){
//                     ++x;
//                     console.log(x);
//           }
//           return inner;
// }
// let x = outer();
// x();
// x();
// x();

(function(){
          let password = "123456789"
          console.log(password);
})()

(function(){
let password = "lhfhsh";
console.log(password)
})();
console.log(password)
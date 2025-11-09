// let arr = [2,4,6,8,10];
// console.log(arr)
// console.log(arr.length);
// arr.push("raj",2,3,4,5)
// console.log(arr)
// arr.pop();
// console.log(arr)
// arr.unshift("Prasad",5);
// console.log(arr)
// arr.shift()
// console.log(arr);

// let arr=[2,4,6,8,10];
// arr.forEach(function(e,i){
//           console.log(i)
// })

// // // using foreach find sum of elements in the array


// let sum = 0;
// arr.forEach(function(e,i){
//           sum+=e;
// })
// console.log(sum);

// let str = "world health organitation";
// let words = str.split(' ');
// console.log(words)
// let abbr =' ';
// words.forEach((e,i)=>abbr= abbr+e.charAt(0))
// console.log(abbr)
// // use forEach and print each elementsof square and cube in given array

// let arr1 =[2,3,4,5,6,];
// arr1.forEach(function(e,i){
//           console.log(e*e)
// })

// arr1.forEach((e,i)=>{
//           console.log(e*e*e);
// })
let arr1= [1,2,3,4,5]
// let values = arr.filter((ele, ind) =>
// {
//     return ele % 2 == 0;
// })
// console.log(values)
// let arr = [5, 4, 9, 8];
// console.log(arr.indexOf(4), arr.lastIndexOf(4));

// let car ={
//           brand : "toyota",
//           color : "black",
//           price:"1cr"
// }
// console.log(car.price)

// let names = [ "prasada", "raja", "rama", "shama"];
// let x1 = names.filter((ele,ind)=>ele.endsWith('a'))
// console.log(x1);
// x1.forEach((ele,ind)=>console.log(ele.charAt(0)))

// let arr = [5,3]

// arr.reverse()
// console.log(arr)

// let str = "sahil"
// console.log(str.split('').reverse().join(''))

// let res = arr.reduce((p,c)=>{
//           return p+c
// },0)
// console.log(res)



// let arr=[1,2,3,4,5,34,67,686,]
// // arr.forEach(function(e,i){
// //           console.log(e)
// let x=arr.filter((e,i)=>{return e>=5})
// console.log(x)

// document.querySelectorAll(".pa").forEach(function (e){
//           e.textContent="hello";
// })


// document.querySelector("#btn")

// const button =() =>{
//           console.log("clicked")
// }

// btn.addEventListener("click",button)
// btn.removeEventListner("click",button)

// let array=[2,3,5,6]
// const x = array.filter(function(e) {
//           return e%2 == 0;
// });

// let x = setTimeout(() => {
// console.log("hello")
// }, 3000);
// clearTimeout(x);

// let y = setInterval(() => {
//         let x =1;
//           x++;
// console.log(x)
// }, 1000);

// clearInterval(y)

// let x = 2000;
// let p = new Promise(function(resolve, reject) {
//            if(x<3000){
//                     resolve("give money");

//           }
//           else{
//                     reject("reject money")

//           }
          
// })
// p.then((res)=>console.log(res))
// .catch((error)=>console.log(error))

// let y = document.querySelectorAll('.h')
// y.textContent="ram"
// console.log(y)

// let c=0;
// function inc(){
//           c++
//           document.getElementById('count').textContent=c;
//  }

// document.addEventListener("keypress",function(){
//           console.log("key is pressed")
// })
/*let arr =[1,2,3,4,5,];
arr.push("hello")
console.log(arr)
arr.pop();
console.log(arr)
arr.shift()
console.log(arr)
arr.unshift("hello")
console.log(arr)
arr.splice(0,2,"raju")
console.log(arr)*/

let arr = [1,2,3,4];

// let reduce= arr.reduce((p,c)=>{
//           return p+c;
// },0)
// console.log(reduce) 

let z = arr.find((e,i)=> e%2 ==0)
console.log(z)
// arr.forEach(function(e,i){
// console.log(e)
// })

// let value = arr.indexOf(function(e,i){
//          return e%2==0;
// })
// console.log(value)


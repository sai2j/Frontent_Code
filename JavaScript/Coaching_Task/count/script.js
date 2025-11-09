/*let c = 0;
let ele = document.getElementById("count");
function incr() {
  c++;
  ele.textContent = c;
}

function desc() {
  if (c > 0) {
    c--;
    ele.textContent = c;
  } else {
    alert("number not goes to less than 0");
  }
}
function reset() {
  c = 0;
  ele.textContent = c;
}
*/
/*
a = ;
b= // 42
[3,12,25,45,75]
let arr =  [45, 3, 25, 78, 12];
arr.sort((a,b)=>a-b);
console.log(arr)
arr.sort((a,b)=>b-a);
console.log(arr)
*/

/*
let namesArray = ["ravindra","rohit","aniket"];
let x = namesArray.map((name)=>name.toUpperCase());
console.log(x);
*/


let nums = [10, 20, 30, 40, 50];
sum=0;
let x=nums.reduce((sum,value)=>
          sum+value/5,0
)
console.log(x)



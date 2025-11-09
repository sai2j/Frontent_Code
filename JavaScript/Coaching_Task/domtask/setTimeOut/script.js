// const div = document.getElementById("count");
// const btn = document.getElementById("btn");
// let count = 10;
// const id=setInterval(() => {
//   if (count > 0) {
//     count--;
//     div.textContent = count;
//   }
 
// }, 1000);
//  btn.addEventListener("click", () => {
//     clearInterval(id);
//   });

const div = document.getElementById("count");
const red=document.getElementById('red');
const green=document.getElementById('green');
const yellow=document.getElementById('yellow');


function turnOff(){
          red.style.background = "gray"
             yellow.style.background = "gray"
                green.style.background = "gray"
}

let intervalId;
let state = 0;
let nextDelay = 0;
let totalTime = 0;
function changeLight(){
          turnOff();
          if(state === 0){
                    red.style.background = "red";
                    nextDelay = 3000;
                    state = 1;

          }
          else if(state === 1){
                    yellow.style.background = "yellow";
                    nextDelay = 2000;
                    state = 2;
                    
          }
          else{
                  green.style.background = "green";
                    nextDelay = 4000;
                    state = 0;    
          }


          totalTime += nextDelay;

          if(totalTime > 15000){
                    clearInterval(intervalId);
                    alert("Simulation stopped");
          }else{
                    intervalId = setTimeout(changeLight, nextDelay)
          }
}

changeLight();
// let count=15;
// const id=setInterval(() => {
//   if(count>0){
//     count--;
//   div.textContent = count;
//   }

   
//     if(count<=15 && count >=10){
//           red.style.backgroundColor = "red"
//           if(count<10){
//                          red.style.backgroundColor = 'transparent';  
//           }
//    }
//    else if(count >=5 ){
//           //  red.style.backgroundColor = "none"
//           green.style.backgroundColor = "green"
//    }
//     else{
//           yellow.style.backgroundColor = "yellow"
//    }
 
// }, 1000);

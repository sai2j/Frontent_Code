let x=document.getElementById('progressBar');
let p =document.getElementById('progressContainer')
let z = document.getElementById('main')
let count=0;
let y=setInterval(() => {
          if(count>=100){
          clearInterval(y)
          p.style.display='none'
          z.textContent='welcome'
          z.style.fontSize="100px"

          }
          else{
          count++;
          x.style.width= `${count}%`
          x.textContent= `${count}%`
          }

}, 10);

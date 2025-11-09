const userinput = +prompt("enter a number and try your luck");
const randomnumber = Math.ceil(Math.random()*14);

if(userinput==randomnumber){
          console.log("you won")
}
else if(userinput >randomnumber){
          console.log(`your no (${userinput})is greater than random no (${randomnumber})`);

}
else {
          console.log(`your no (${userinput})is less than random no (${randomnumber})`);

}
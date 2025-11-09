/*
let isAccountActive = prompt("enter a value true or false");
if(isAccountActive=="true"){
          console.log(" Your account is active. You can proceed with your transaction.");
}
else{
          console.log("Your account is currently inactive. Please contact support.");
}
*/

/*
let password = prompt("enter your pasword");

if(password.length>8){
          console.log("Password meets minimum length requirements. Good job!")
}
else{
          console.log("Password is too short. Please use at least 8 characters.")
}
*/
/*
let totalSpending=+prompt("enter totalSpending")

if( totalSpending>=1000){
          console.log(` Customer's total spending: ${totalSpending}. Loyalty Tier: Platinum.`)
}
else if(totalSpending>=500 && totalSpending<1000){
          console.log(` Customer's total spending: ${totalSpending}. Loyalty Tier: Gold.`)
}

else if(totalSpending>=100 && totalSpending<500){
console.log(` Customer's total spending: ${totalSpending}. Loyalty Tier: silver.`)
}
else{
       console.log(` Customer's total spending: ${totalSpending}. Loyalty Tier: bronze.`)
}
*/

/*
let speed = +prompt("enter your speed");
if (speed > 100) {
  console.log(` Vehicle speed: ${speed} Classification: Excessive`);
} else if (speed > 60 && speed <= 90) {
  console.log(` Vehicle speed: ${speed} Classification: fast`);
} else if (speed > 30 && speed <= 60) {
  console.log(` Vehicle speed: ${speed} Classification: normal`);
} else {
  console.log(` Vehicle speed: ${speed} Classification: slow`);
}
*/

/*
let isMember=prompt("member or not")
let purchaseTotal=+prompt("the total purchase total")
let discount;
if(isMember=="true" && purchaseTotal>200){
          console.log("user is a member");
          console.log(" Qualifies for a 15% member discount!")
          console.log(` Original Price: ${purchaseTotal}`)

         discount=purchaseTotal*(15/100)
         purchaseTotal=purchaseTotal-discount;
         console.log(`final price: ${purchaseTotal}`)
}
else if(isMember=="true" && purchaseTotal>100 ){
          console.log("user is a member");
          console.log(" Qualifies for a 10% member discount!")
          console.log(` Original Price: ${purchaseTotal}`)

         discount=purchaseTotal*(10/100)
         purchaseTotal=purchaseTotal-discount;
         console.log(`final price: ${purchaseTotal}`)
}
else if(isMember=="true" && purchaseTotal<100){
          console.log("user is a member");
          console.log("  purchase total is too low for an extra discount.")
          console.log(` Original Price: ${purchaseTotal}`)
}
else if(isMember=="false" && purchaseTotal>500){
          console.log("user is not a member");
          console.log(" Qualifies for a 5% member discount!")
          console.log(` Original Price: ${purchaseTotal}`)

         discount=purchaseTotal*(5/100)
         purchaseTotal=purchaseTotal-discount;
         console.log(`final price: ${purchaseTotal}`)
}
 
else{
            console.log("user is not a member");
          console.log("  User is not a member. No member discounts apply")
          console.log(` Original Price: ${purchaseTotal}`)
}

*/
/*
let number = +prompt("enter your number");
switch (number) {
  case 1:
    console.log("sunday");
    break;
  case 2:
    console.log("monday");
    break;
  case 3:
    console.log("tuesday");
    break;
  case 4:
    console.log("wednesday");
    break;
  case 5:
    console.log("thursday");
    break;
  case 6:
    console.log("friday");
    break;
  case 7:
    console.log("saturday");
    break;
}
*/

/*
let operator = prompt("enter your operator");
let a =+prompt("enter the value of A");
let b =+prompt("enter the value of B");

switch(operator){
  case '+':console.log(a+b);break;
  case '-':console.log(a-b);break;
  case '*':console.log(a*b);break;
  case '/':console.log(a/b);break;
}
*/
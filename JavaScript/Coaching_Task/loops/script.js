/*
n=5;
sum=0;
for(i=1;i<=n;i++){
          sum=sum+i;
          console.log(`Current sum: ${sum}`)

}
console.log(` Total sum of first ${n} numbers is: ${sum}`)
*/

/*
let number=+prompt("enter any number")
let pattern="*";

for(let i=1;i<=number;i++){
          let str="";
          
          for(let j=1;j<=i;j++){
                     str+=pattern;

          }
        console.log("progress"+str)
}
*/

// let str="dadasD";

// for( i=0;i<str.length;i++){
//           if(str.charAt(i)===str.charAt(i).toUpperCase()){
//                     console.log("password is strong");
//           }
//           else{
//                     console.log("password is week");

//           }

// }

/*  Sample input :    password = Pass123
    Sample output: --- Password Complexity Check for 'Pass123' ---
            Password strength: Strong (Contains digit and uppercase).
            --- Check Complete ---

    Sample input : test123
    Sample output: --- Password Complexity Check for 'test123' ---
            Password strength: Medium (Contains digit and lowercases).
            --- Check Complete ---

    Sample input : UPPERCASE
    Sample output: --- Password Complexity Check for 'UPPERCASE' ---
            Password strength: Medium (Contains uppercases).
            --- Check Complete ---

    Sample input : GoodPass1
    Sample output: --- Password Complexity Check for 'GoodPass1' ---
            Password strength: Strong (Contains digit and uppercase).
            --- Check Complete --- */

// let password = prompt("Enter your password:");
// let hasUppercase = false;
// let hasLowercase = false;
// let hasDigit = false;
// let strength = "Weak";
// console.log(`--- Password Complexity Check for '${password}' ---`);

// for (let i = 0; i < password.length; i++) {
//           let char = password.charAt(i);
//           if (char >= 'A' && char <= 'Z') {
//                     hasUppercase = true;
//           }
//           else if (char >= 'a' && char <= 'z') {
//                     hasLowercase = true;
//           }
//           else if (char >= '0' && char <= '9') {
//                     hasDigit = true;
//           }
//           if (hasUppercase && hasLowercase && hasDigit) {
//                     break;
//           }
// }                             
// if (hasUppercase && hasDigit) {
//           strength = "Strong (Contains digit and uppercase).";
// }


// else if (hasUppercase || hasLowercase || hasDigit) {
//           strength = "Medium (Contains " + (hasUppercase ? "uppercases" : hasLowercase ? "lowercases" : "digits") + ").";
// }
// console.log(`Password strength: ${strength}`);
// console.log('--- Check Complete ---');
// 


let trials=50;

if(Math.random())
head=Math.random()*10



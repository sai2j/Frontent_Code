/*
let d = prompt("enter a password");
function maxlenght(digit) {
  if (digit.length < 8) return "short digit";
  let value = false;
  for (let i = 0; i <= digit.length; i++) {
    if (digit.charAt(i) >= "0" && digit.charAt(i) <= "9") {
      value = true;
    }
  }
  if (value) {
    console.log("true");
  } else {
    console.log(`no digit found (${value})`);
  }
}
console.log(maxlenght(d));
*/

let str = "AEIOU";

function vowel(str) {
  let vowel = false;
  let consonant = false;

  let vowels = "aeionAEIOU";
  for (let i = 0; i <= str.length - 1; i++) {
    char = str.charAt(i);

    if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z")) {
      if (vowels == char) {
        vowel = true;
      } else {
        consonant = true;
      }
    }

    if (vowel && consonant) {
      break;
    }
  }
}

// vowel(str);



/*
let string="hello"
//first you convert the string to array
let arrstr=string.split("")
console.log(arrstr)

//after you reverse the array 
let arrreverse=arrstr.reverse()
console.log(arrreverse)

//after you join the reverse array
let join=arrstr.join("")
console.log(join)
*/

/*
let string='JOHN_DOE'
let str=string.toLowerCase()
console.log(str)
*/


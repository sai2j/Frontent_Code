let x = 2000;
let p = new Promise(function (resolve, reject) {
  if (x > 1000) {
    setTimeout(() => resolve("Take money"), 5000);
  } else {
    reject("No money");
  }
});
console.log(p);

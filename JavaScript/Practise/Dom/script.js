// class car{
//           model;name;year;
//           constructor(a,b,c){
//                     this.model=a;
//                     this.name=b;
//                     this.year = c;
//           }
// }
// let obj= new car("hybride","fortuner",2024);
// console.log(obj.name,obj.model,obj.year)

let mypromise = new Promise((resolve,reject) =>{
          let sucess = true;
          if(sucess){
                    resolve("task is completed");
          }
          else{
                    reject("task is incopleted");
          }
});
mypromise.then((message)=>{console.log(message)})
.catch((error)=>{
          console.log(error);
})
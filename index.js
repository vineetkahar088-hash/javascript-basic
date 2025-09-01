// console.log(typeof(2+3))
// console.log(typeof(2**8))

// const { useCallback } = require("react");

// let x = "name"
// console.log(typeof(x))

// let a = 2
// if(a < 5){
//     console.log("a is less then 5")
// }

// let a1 = true
// let b1 = true
// console.log(a1 && b1)

// let a2 = true
// let b2 = false
// console.log(a2 || b2)

// let h1 = 4
// let h2 = 3

// console.log(h1 | h2)

// let u1 = 5
// let u2 = 4
//  console.log(a ^ b)

// let y = 10;
// const x = 5;

// {
//     let y = 45;
//     const x = 75;
//     var z = 79;
//     console.log(x,y)

// }

// function functionone() {
//     let y = 10;
//     const x = 5;
//     var z = 22;

//     {
//         let y = 
//     }
// }

// function sum(x){

//     console.log(8+9)
// }
// sum()

// function sum(x,y){
//     console.log(234+576+658+428)
// }
//  sum()

// impure function

// let x = 0;
// function functhree(){
//     console.log(x++)
// }
// functhree()
// functhree()

// // pure functhree

// function funcfour(x) {
//     console.log(x++)
// }
// funcfour()
// funcfour()

// let x = 10;

// function addition of two num()
// {
//     return b+y;
// }
// let ans = addition(5,10)

// let sum (x,y) =>{ x+y;}

// let op = getsum(78,68)
// console.log();

// function callbackfun(){
//     console.log(samosa)
// }

// function HOC(samosa){
//     console.log(samosa)
// }
// let output = HOC(3,5);
// console.log(useCallback)

// function start(num){
//       for (let i = 1; i<=num; i++){
//         if(i%2==0){
//             console.log("even",i)
//         }
//         else{
//             console.log("odd",i)
//         }
//       }
// }
// start(55)
// let num = 10;
// for (let i = 1; i<=10; i++){
//     if (i%2==0){
//         console.log("even");
//     }
//     else{
//         console.log("odd")
//     }
// }

// function printtable(num){
//       for (let i = 1; i<=10; i++){
//         console.log(`${num}*${i} =${num*i}`)
//       }
//     }
//     // printtable()

//     function printtable_1_to_10(){
//         for(let i = 2; i<=10; i++){
//             printtable(i)
//         }
//     }
//     printtable_1_to_10()

// minimum b/w three numbers

// function findmin(n1,n2,n3){
//     if(n1<n2 && n1<n3){
//         console.log("n1 is minimum")
//     }else if(n2<n1&&n2<n3){
//         console.log("n2 is minimum")
//     }else{
//         console.log("n3 is minimum")
//     }
// }
// findmin(34269562,3439865,276768)


// function findmax(n1,n2,n3){
//     if(n1>n2 && n1>n3){
//         console.log("n1 is maximum")
//     }else if(n2>n1 && n2>n3){
//         console.log("n2 is maximum")
//     }else{
//         console.log("n3 is maximum")
//     }
// }
// findmax(40,34,27)


// let a = 0;
// let b = 1;
// function fibonacci(n) {
  

//   for (let i = 2; i < n; i++) {
//   }
// }

// console.log(fibonacci(10));


// let obj = {
//   sname : "vineet",
//   fname : "kahar",
//   age : "21",
//   email : "@email.com",
//   status : "null",
//   istraining : function (){
//     console.log("i am a taking training in grow tech")
//   },
//   additionalinfo : {
//     no : "475839593",
//     dob : "18/12/2003"
//   }
// }
// console.log("name",obj.sname);
// console.log("fname",obj.fname);
// console.log("age",obj.age);
// console.log("additionalinfo",obj.additionalinfo.dob);

// let obj = {
//   sname : "vineet",
//   fname : "kahar",
//   age : "21",
//   email : "@email.com",
//   status : "null",
//   istraining : function (){
//     console.log("i am a taking training in grow tech")
//   },
//   additionalinfo : {
//     no : "475839593",
//     dob : "18/12/2003",
//   },
//   10123 : "absd",
//   "ram syam" : "both are friends",
// }

// let lag = ["caches","c++","java","python"]

// console.log(typeof[lag])
// console.log(lag[1])

// let lag2 = lag.push("react.js")

// let studentlist = [
//     ["vineet","21","b.tech"],
//     ["shyam","34","bca"],
//     ["ram","24","bcom"]
// ]

// document.write(studentlist[2][1])

// let studentlist = [
//     ["vineet",22,"b.tech",
//         ["shyam","23","bca",
//             ["ram","24","b.com",
//                 ["varun","25","ba",
//                     ["vikash","26","bio",
//                         ["tarun","27","b.tech",
//                             ["sahil","28","DCA",
//                                 ["sharad","45","PGDCA"]
//                             ]
//                         ]
//                     ]
//                 ]
//             ]
//         ]
//     ]
// ]

// console.log(studentlist[])

// sorting properti in sequence
// let studentlist = ["vineet",23,21,54,76,2,1,4,5,8,5,9,665,57]
// studentlist.sort((a,b) => a-b);
// console.log(studentlist);


// sorting properti in revers 
// let studentlist = ["vineet",23,21,54,76,2,1,4,5,8,5,9,665,57]
// studentlist.sort((a,b) => b-a);
// console.log(studentlist);


// define the higest to lowest parsentage in sequence
// const people = [{name: "vineet",age:21,gpa:3.4},
//                  {name:"vikash",age:21,gpa:4.5},
//                 {name:"arpit",age:32,gpa:4.7},
//                 {name:"rohit",age:43,gpa:5.6}
//             ]

// people.sort((a,b) => b.gpa - a.gpa)
// console.log(people);

// copare in name method 
// const people = [{name: "vineet",age:21,gpa:3.4},
//                  {name:"vikash",age:21,gpa:4.5},
//                 {name:"arpit",age:32,gpa:4.7},
//                 {name:"rohit",age:43,gpa:5.6}
//             ]

// people.sort((a,b) => a.name.localeCompare(b.name))
// console.log(people);

// shallow copy and deep copy 

// shaloow copy hota h jab app kisi object ko copy karein
// with object.assign ke through ya fir spread operator ke through,
// in dono hii case me top level properties to copy ho jata h par kisi bhii 
// nested object ki properties copy hone ki jagha fir se reference pass kar deta h

// nasted object in deep structure
// var obj = {
//     name: "vineet kahar",
//     age: 21,
//     social:{
//         facebook:{
//             ac1: "vineetkahar@gimal.com",
//             ac2: "vineetkahar@gimal.com"
//         },
//         twitter:{
//            free: {
//                     ace1:"vineetkahar@gimal.com"
//             },
//             paid: {
//                 ace1:"vineetkahar@gimal.com"
//             }
//         }
//     }
// }
// // dupicate 
// var obj2 = {...obj};

// obj2.social.facebook.ac1 ="changed";

// console.log(obj.social.facebook.ac1);
// console.log(obj2.social.facebook.ac1);

// // deep copy refrence number alag alag hote h dono ke
// var obj = {
//     name: "vineet kahar",
//     age: 21,
//     social:{
//         facebook:{
//             ac1: "vineetkahar@gimal.com",
//             ac2: "vineetkahar@gimal.com"
//         },
//         twitter:{
//            free: {
//                     ace1:"vineetkahar@gimal.com"
//             },
//             paid: {
//                 ace1:"vineetkahar@gimal.com"
//             }
//         }
//     }
// }
// sabse phele hame ise string me convert karna padta h deepcopy banane ke liye

// var obj2 =JSON.parse(JSON.stringify(obj))
// obj2.social.facebook.ac1 ="changed";

// console.log(obj.social.facebook.ac1);
// console.log(obj2.social.facebook.ac1);


// string methods
// let dost = ["vineet","lalit","rohit"]
// let friend = "varun"
// let friend2 = "    riya     "

//  console.log(dost.length)
// console.log(name.toUppercase())//upercase
// console.log(name.toLowercase())//lowercase
// slice method 
// console.log(name.slice(2,4))
// console.log(name.replace("vineet","vikas")) // name replace method 
// console.log(dost.concat(" is a
//  friend of"),friend)// matlab ek duse se judna 
// console.log(friend2)
// console.log(friend2.trim()) //matlab extra space ko hatana

// array methods
// let dost = [1,4,8,6,"vineet","vikash","varun","tarun"];
// console.log(dost.length)//length ke liye
// dost.push("arpit");// koi bhii chije last me add karne ke liye
// dost.pop();// last me value ko hatane ke liye
// dost.unshift();// starting me koi bhii value add karne ke liye
// dost.shift();starting me value ko hatane ke liye use hota h
// console.log(dost)// 
// console.log(dost.indexOf("vikash"));// search karne ke liye ki kon si value kaha h in the index off array
// console.log(dost.includes(1));//true (matlab ye hamare array me h)
// console.log(dost.includes(9));//false (matlab ye hamare array me nahi h)

// for lop for parttern
// ****
// ****
// ****
// ****
// console.log("vineet kahar");
// for(let i = 0; i <= 4; i++){
// let ans="";
// for(let j = 0; j <= 4; j++){
//     ans +="*"
// }
// console.log(ans)
// }

// for lop pattern
// +
// ++
// +++
// ++++
// console.log("vineet kahar");
// for(let i = 1; i < 5; i++){
// let ans="";
// for(let j = 1; j <= i; j++){
//     ans +="*"
// }
// console.log(ans)
// }

// for lop patter 
// ++++
// +++
// ++
// +
// console.log("vineet kahar");
// for(let i = 0; i <= 5; i++){
// let ans="";
// for(let j = 1; j < 5-i; j++){
//     ans +="*"
// }
// console.log(ans)
// }

// console.log("vineet kahar");
// 54321
// 5432
// 543
// 54
// 5
// for(let i = 1; i <= 5; i++){
// let ans="";
// for(let j = 5; j >= i; j--){
//     ans +=j;
// }
// console.log(ans)
// }

// for lop pattern
// 12345
// 1234
// 123
// 12
// 1
// for(let i = 1; i <= 5; i++){
// let ans="";
// for(let j = 5; j >=5- i; j--){
//     ans +=j;
// }
// console.log(ans)
// }

// for lop pattern 
// 54321
//  4321
//   321
//    21
//     1
//  for(let i=0; i<5; i++){
//     let ans= "";
//     let sp="";
//     for(let sp1=0; sp1 < i; sp1++){
//         sp+="";
//     }
//     for (let j = 0; j <=5-i; j++)
//  }

// for(i=1;i<=4;i++)
// {
//     let ans=""
//     let sp=""

//     for(j=1;j<=4;j++)
//     {
//         if((i==1)||(j==1)||(j==4)||(i==4))
//             ans+="+";
//         else

//     }
//     console.log(ans);
// }

// function outersfunction(){
//     let outerv = 0;
    
//    return function inner (){
//         // console.log(outerv)
//         return outerv++
//     }
    
// }

// let var1 = outersfunction();
// let var2 = var1();
// console.log(var2)
// console.log(var1())
// console.log(var1())
// console.log(var1())

const promise = new Promise((resolve,reject)=>{
    let age = Math.floor(Math.random(0,10)*100)
    if (age>18) {
        setTimeout(()=>{
            resolve("you are allowed to vote")
        },3000)
    }
    else{console.log("not are allowed to vote")}
})
promise.then((op)=> console.log(op)).catch((e)=> console.log(e))
console.log(promise);
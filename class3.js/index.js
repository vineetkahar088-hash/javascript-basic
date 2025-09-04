// singel element ko lene ke liye 
// let x = document.getElementById("head1")
// console.log(x);

// // html collection me open hoti h ( array like object )
// // let y = document.getElementsByTagName("h1");
// // console.log(y);
  
// // class ke liye use hota h 
// // let z = document.getElementsByClassName("x");
// // console.log(z);

// // let z = document.querySelector("x");
// // console.log(z);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// console.log("hey");
// {
//   let a = 1;
//   let b = 2;
//   console.log(a);
//   console.log(b);
// }
// console.log(a);
// console.log(b);
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// console.log("hey");
// {
// var a = 1;
// var b = 2;
//   console.log(a);
//   console.log(b);
// }
// console.log(a);
// console.log(b);
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// console.log(a);
// var a=()=>{
//      console.log("hello"); //var a ऊपर चला गया, लेकिन value अभी नहीं मिली।

    //    }       // उस time a = undefined था, इसलिए console.log(a) → undefined आया।
        
                                // बाद में a को arrow function मिला।   
// Ans=>undifine



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // Q.
// console.log(a);
// function a(){
//     console.log("hello");        //unction declaration पूरा hoist होता है।

//              }
// Ans=>                         // इसलिए ऊपर से ही a में function stored होता है।

                                     // जब console.log(a) चलता है, तो function मिल जाता है।




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// var x=20;
// function printValue(){  //Function के अंदर var x भी declare है → इसका hoisting होगा।
//     console.log(x);     //तो JS मान लेती है कि function के अंदर एक नया x है, जो शुरुआत में undefined है।
// var x=10;            //जब console.log(x) चलता है, तो local वाला x (undefined) print होता है, बाहर वाला 20 नहीं
// }
// printValue();       //बाद में value 10 assign होती है, लेकिन तब तक print हो चुका होता है।
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// var x=20;
// function printValue1(){
//     console.log(x);      //console.log(x); (outside function) → prints 20
//      x=10;                //फिर x = 10; → global वाला x अब 10 हो गया
//      console.log(x);    //दूसरा console.log(x); → prints 10

// }
// console.log(x);
// printValue1();      //printValue1() call होता है:
// Ans=>           //पहला console.log(x); → function के अंदर नया var x नहीं है, तो बाहर वाला 20 ले लेता है
                  

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// console.log("start ");          //console.log("start") → तुरंत print
// setTimeout(()=>{               //setTimeout(..., 0) → callback task queue में चला जाता है (immediate नहीं चलता)
//     console.log("setTime");
// },0);
// console.log("end");           //console.log("end") → तुरंत print
// Ans=>                      //उसके बाद event loop callback उठाकर चलाता है → "setTime"


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// console.log(y);    //पहली line console.log(y) → JS को variable y मिला ही नहीं, इसलिए ReferenceError फेंक देगा।
// console.log(typeof(y)); //Code यहीं रुक जाएगा, तो दूसरी line चलेगी ही नहीं।
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// function abc() {
//   a = 10;  //Function के अंदर var, let, या const के बिना variables assign किए गए (a = 10, b = 20)
//   b = 20;  //ऐसे variables implicitly global बन जाते हैं।
//   console.log(a);//10   //इसलिए function के बाहर भी a और b accessible हैं।
//   console.log(b);//20
// }
// abc();
// console.log(a);//10   
// console.log(b);//20
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// console.log([1,2,3]===[1,2,3]);  //Arrays और objects reference type होते हैं।
// console.log({ name: "a" } == { name: "a" }); //=== (strict equality) check करता है same memory reference, value नहीं।
// Ans=>  //हर नया array या object अलग memory में बनता है। इसलिए comparison false होता है।
//“JS में array/object को === से compare करना memory addresses compare करना है, इसलिए अलग objects हमेशा false देंगे।”

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
// console.log(name);  //var वाले variables hoist होते हैं।
// var name = "John"; // or jo name name h wo phele se hii memory me allocate hota h isliye ye global variable ban jata h
// Ans=>          // isliye undifine bata raha h,bad me john name allocate hoke print hoga memory me


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
// setTimeout(() => {
// console.log("I am setTime out ");  //setTimeout(...) → macrotask queue में जाता है, microtasks के बाद चलता है
// });
// Promise.resolve().then(() => {   //Promise.then(...) → microtask queue में जाता है, synchronous code के बाद चलता है
// console.log("I am Promise  ");
// });
// console.log("I am end here ");  //console.log("I am end here") → synchronous, तुरंत print
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
// let a = 10;                      //typeof a → a number है → "number" (string type)
// console.log(typeoftypeoftypeof a); //typeof "number" → "string"
// Ans=>                        //typeof "string" → "string"


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// let a=10;         //++a → पहले value बढ़ाओ, फिर print करो
// console.log(++a)  //a = 10 → ++a → a = 11 → print 11
// console.log(a)    //Next line console.log(a) → a अभी 11 → print 11
// let a1=10;        //a1 = 10 → a1++ → पहले print करो, फिर value बढ़ाओ
// console.log(a1++) //console.log(a1++) → print 10
// console.log(a1)   //अब a1 = 11  //Next line console.log(a1) → print 11
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// console.log(1<2<3)
// console.log(3>2>0)
// console.log(3>2>1)
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// const z=null;        //typeof null → "object"यह JS का historic bug है, लेकिन अब भी ऐसा ही behavior है।
// console.log(typeof z)
// const a=undefined;    //typeof undefined → "undefined"
// console.log(typeof a) //क्योंकि variable declare तो हुआ है, लेकिन कोई value assign नहीं हुई
// Ans=>             //“null का type weirdly object आता है, undefined का type सच में undefined आता है।”

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// function printVal(){
// var x=10;             //var x = 10 function के अंदर declare हुआ → function scoped
//   console.log(x);//10
// }                    //function के बाहर x exist नहीं करता
// printVal();
// console.log(x);      //इसलिए console.log(x) बाहर ReferenceError देता है
// Ans=>

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// function demo(){
//   console.log("hey");//hey print
// }
// constans=demo();
// console.log(ans);
// function demo1(){
//   return "hey";
// }
// const ans1=demo1();
// console.log(ans1);
// Ans=>

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// console.log(a); //var a; → hoist हो जाता है (initially undefined)
// console.log(b); //b → hoist नहीं हुआ क्योंकि var/let/const नहीं लगाया
// var a=b=5;
// Ans=>
// Output_Based_Js_Quizz_1.txt
// External
// Displaying Output_Based_Js_Quizz_1.txt.


// ######################## MOST IMP QUESTION ####################################################
// Q.
                 
//user1 ----\  //कोई भी change [Object in memory] में होगा → दोनों variables में reflect होगा।
//           \
//            [Object in memory]   
//           /
//user2 ----/
// const user1 = {
// userName: "syam",
//   age: 20,
//   address: {    
//     city: "katni",
//     state: "mp",
//   },                    //JavaScript में objects और arrays reference type होते हैं।
// };
// const user2 = user1; //इसका मतलब है कि variable में actual object की copy नहीं, बल्कि object का address (reference) store होता है।
// user2.userName = "Dr. K. Anji Reddy";   //अब user1 और user2 दोनों same object की reference रख रहे हैं।
// user2.address.city = "indore";  //जब तुम user2.userName = "Dr. K. Anji Reddy" करते हो → यह same object modify होता है।
// console.log("user1", user1);    //इसलिए user1.userName भी automatically update हो जाता है।
// console.log("user2", user2);
// Ans=>

// ##############################################################################################
// Q.
// const user11 = {
// userName: "syam",
//    age: 20,
//    address: {
//     city: "katni",
//      state: "mp",
//    },
//  };


// const user12 = { ...user11};
//  user12.userName = "Raghav";
// user12.address.city = "Jab"; 
// console.log("user11", user11); 
// console.log("user12", user12); 

// 2nd category
// const user12 = { ...user11,...user11.address };
// user12.userName = "Raghav";
// user12.address.city = "Jabalpur"; 
// console.log("user12 has newly assign city which in user11", user12); 
// 3rd category

// const user12 = JSON.parse(JSON.stringify(user11));
// user12.userName = "Raghav";
// user12.address.city = "Jabalpur"; 
// console.log("no changes bcs we do deep copy", user11); 
// console.log("name and city in user12 object has changed", user12); 
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// console.log([1,2,3]===[1,2,3]);
// console.log({ name: "a" } == { name: "a" });
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// constmyNumbers = [2, 4, 5, 6, 7];
// constmodifyArray = myNumbers.map((num) => {
//   return (num = num / 2);
// });
// const modifyArray1 = myNumbers.map((num) => (num = num / 2));
// console.log("Given Array ", myNumbers);
// console.log("Modified array ", modifyArray);
// console.log("without return ", modifyArray1);
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// const Numbers = [0, 2, 4, 5, 6, 7];
// // ans is below
// constfilterArray = Numbers.filter((num) => {
//   return num>= 4;
// });

// console.log("Orginal array ", Numbers);
// console.log("Filter array", filterArray);
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// function values(a,...args,c){//error
//   console.log(a,args,c);
// }

// function values(a, c, ...args) {

// console.log(a, c, args);//ans-: 1 10 [ 2, 4, 5, 6, 8 ]
// }
// values(1, 10, 2, 4, 5, 6, 8);
// Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// console.log(name);
// var name = "John";
// Ans=>

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
// setTimeout(() => {
// console.log("I am setTime out ");
// });
// Promise.resolve().then(() => {
// console.log("I am Promise  ");
// });
// console.log("I am end here ");

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
// async function PrintValue() {
//   return "Hello world";
// }
// let ans = PrintValue();
// console.log(ans);
// //Ans


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// async function storeAns() {
//   let result = await PrintValue();
//   console.log(result);
//   return result;
// }
// storeAns();
// async function PrintValue() {
//   return "Hello world";
// }
// let ans=  PrintValue();
// console.log(ans);
// async function storeAns() {
//   let result = await PrintValue();
//   console.log(result);
//   return result;
// }
// storeAns();
// //Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// let result = PrintValue();
// console.log(result);
// //Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.
// console.log([1,2]==[1,2])
// console.log([1,2]===[1,2])
// //Ans=>



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q.26
// function outer() {
//   function inner() {
//     console.log(x);
//   }
// const x = 10;
//   return inner;
// }
// const result = outer();
// result();
// //Ans=>


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
// for(vari=0;i<=3;i++){
// setTimeout(()=>{
//        console.log(i)
//    },1000);
//  }
// //Ans


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
// for(vari=0;i<=3;i++){
//   function ab(i){
// setTimeout(()=>{
//       console.log(i)
//   },1000);}
//   ab(i);
// }
// //Ans


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
// for (let i = 0; i<= 3; i++) {
// setTimeout(() => {
//     console.log(i);
//   }, 1000 + i * 1000);
// }
// //Ans


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
// const foo=()=>{
//   console.log(this.name);
//  }
//  //Ans


//  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
//  function foo1(){
//   console.log(this.name);
// }
// foo1.call({name:"mohan"})
//  //Ans


//  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
// function foo1() {
//   console.log(this.name); 

// const bar = () => {
//     console.log(this.name); 
//   };
// bar();
// }
// foo1.call({ name: "Mahi" });
//  //Ans


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q. Freeze the object 
// const user = {
//   id: 123,
//   name: "abc",
//   address: {
//     city: "katni",
//     state: "MP",
//   },
// };
//  //Ans



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q. 
// fool();
// var fool=20;
// function fool(){
// console.log("Calling ")
// }
// fool();
// //Ans

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.

// async function foo23() {
//   throw new Error("Hello");
//   return "hello";
// }
// const result12 = foo23();
// console.log("Reject the Promise ",result12);


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q.
// async function greet() {
//   return new Promise(() => {});
// }
// constans = greet();
// console.log("Pending the promise",ans);
// //Ans


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  Q. Flatten an given below an array 
// // let arr= [1,[2,3],[[4,5]],[[[6]]]];
// //Ans


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // Q.
// // console.log(typeof(NaN));// this is number
// // console.log(Nan===NaN);// it can anything  so return false


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // Q.
// Destructure the property from the object
// const user = { userNamename: "ramesha", age: 24 };


// A
// BB
// CCC
// DDDD
// EEEEE
// let n = 5;
// let charCode = 65; 
// for (let i = 1; i <= n; i++){
//   let row = "";
//   for (let j = 1; j <= i; j++){
//     row += String.fromCharCode(charCode);
//   }
//   charCode++;
//   console.log(row);
// }

// EEEEE 
// DDDD
// CCC 
// BB 
// A 
// let n = 5;
// let charCode = 65+n-1;
// for (let i = n; i >= 1; i--){
//   let row = "";
//   for (let j = 1; j <= i; j++){
//     row += String.fromCharCode(charCode);
//   }
//   charCode--;
//   console.log(row);
// }

//     A
//    BB
//   CCC
//  DDDD
// EEEEE
// let n = 5;
// let charCode = 65;

// for (let i = 1; i <= n; i++) {
//   let row = "";

//   for (let j = 1; j <= n - i; j++) row += " ";
//   for (let k = 1; k <= i; k++) row += String.fromCharCode(charCode);

//   charCode++;
//   console.log(row);
// }

// EEEEE
//  DDDD
//   CCC
//    BB
//     A
// let n = 5;
// let charCode = 65+n-1;
// for (let i = n; i >= 1; i--){
//   let row = "";
//   for (let j = 1; j <= n-i; j++) row+=" ";
//         for(let k=1; k<=i; k++)
//     row += String.fromCharCode(charCode);
//   charCode--;
//   console.log(row);
// }

//     A
//    BBB
//   CCCCC
//  DDDDDDD
// EEEEEEEEE
// let n = 5;
// let charCode = 65;
// for (let i = 1; i <= n; i++){
//   let row = "";
//   for (let j = 1; j <= n-i; j++) row+=" ";
//         for(let k=1; k<=2*i-1; k++)row += String.fromCharCode(charCode);
//   charCode++;
//   console.log(row);
// }

// EEEEEEEEE
//  DDDDDDD
//   CCCCC
//    BBB
//     A
// let n = 5;
// let charCode = 65+n-1;
// for (let i = n; i >= 1; i--){
//   let row = "";
//   for (let j = 1; j <= n-i; j++) row+=" ";
//         for(let k=1; k<=2*i-1; k++)row += String.fromCharCode(charCode);
//   charCode--;
//   console.log(row);
// }

//     A
//    BBB
//   CCCCC
//  DDDDDDD
// EEEEEEEEE
//  DDDDDDD
//   CCCCC
//    BBB
//     A
// let n = 5;
// let charCode = 65;
// for (let i = 1; i <= n; i++){
//   let row = "";
//   for (let j = 1; j <= n-i; j++) row+=" ";
//         for(let k=1; k<=2*i-1; k++)row += String.fromCharCode(charCode);
//   charCode++;
//   console.log(row);
// }
// charCode = 65+n-2;
// for (let i = n; i >= 1; i--){
//   let row = "";
//   for (let j = 1; j <= n-i; j++) row+=" ";
//         for(let k=1; k<=2*i-1; k++)row += String.fromCharCode(charCode);
//   charCode--;
//   console.log(row);
// }

// EEEEEEEEE
//  DDDDDDD
//   CCCCC
//    BBB
//     A
//    BBB
//   CCCCC
//  DDDDDDD
// EEEEEEEEE
// let n = 5;
// let charCode = 65+n-1;
// for (let i = n; i >= 1; i--){
//   let row = "";
//   for (let j = 1; j <= n-i; j++) row+=" ";
//         for(let k=1; k<=2*i-1; k++)row += String.fromCharCode(charCode);
//           console.log(row);
//   charCode--;
// }
//  charCode = 66;
// for (let i = 2; i <= n; i++){
//   let row = "";
//   for (let j = 1; j <= n-i; j++) row+=" ";
//         for(let k=1; k<=2*i-1; k++)row += String.fromCharCode(charCode);
//          console.log(row);
//   charCode++;
// }

// AAAAA
// A   A
// A   A
// A   A
// AAAAA
// let n = 5;
// for (let i=1; i<= n; i++){
//   let row = "";
//   for (let j=1; j<=n; j++) {
//     if (i===1 || i===n || j===1 || j===n) row += "A";
//     else row += " ";
//   }
//   console.log(row);
// }

//     A
//    A A
//   A   A
//  A     A
// AAAAAAAAA
// let n = 5;
// for (let i=1; i<=n; i++) {
//   let row ="";
//   for (let j=1; j<= n-i; j++)row +=" ";
//   for (let k=1; k <= 2*i-1; k++){
//     if (k===1 ||k===2*i-1 ||i===n)row +="A";
//     else row +=" ";
//   }
//     console.log(row);
// }

// AAAAAAAAA
//  A     A
//   A   A
//    A A
//     A
// let n = 5;
// for (let i=n; i>=1; i--){
//   let row ="";
//   for (let j=1; j<=n-i; j++)row +=" ";
//   for (let k=1; k <=2*i-1; k++) {
//     if (i===n || k===1 || k===2*i-1)row +="A";
//     else row +=" ";
//   }
//   console.log(row);
// }

// A
// AB
// ABC
// ABCD
// ABCDE
// let n = 5;
// for(let i=1; i<=n; i++){
//   let row="";
//   for(let j=0; j<i; j++){
//     row +=String.fromCharCode(65+j);
//   }
//   console.log(row);
// }

// ABCDE
// ABCD
// ABC
// AB
// A
// let n = 5;
// for(let i=n; i>=1; i--){
//   let row="";
//   for(let j=0; j<i; j++){
//     row +=String.fromCharCode(65+j);
//   }
//   console.log(row);
// }

//     A
//    BB
//   CCC
//  DDDD
// EEEEE
// let n = 5;
// let charCode =65;
// for (let i=1; i<=n; i++){
//   let row ="";
//   for (let j=1; j<=n-i; j++)row +=" ";
//   for (let k=1; k<=i; k++)row +=String.fromCharCode(charCode);
//   charCode++;
//   console.log(row);
// }

// EEEEE
//  DDDD
//   CCC
//    BB
//     A
//     let n = 5;
//     let charCode =65+n-1;
//     for (let i=n; i>=1; i--){
//     let row ="";
//     for (let j=1; j<=n-i; j++)row +=" ";
//     for (let k=1; k<=i; k++)row +=String.fromCharCode(charCode);
//     charCode--;
//     console.log(row);
//     }

// A
// BB
// CCC
// DDDD
// EEEEE
// DDDD
// CCC
// BB
// A
// let n = 5;
// let charCode =65;
// for(let i=1; i<=n; i++){
//   let row="";
//   for(let j=1; j<=i; j++){
//     row +=String.fromCharCode(charCode);
//   }
//   console.log(row);
//   charCode++;
// }
// charCode =65+n-2;
// for(let i=n-1; i>=1; i--){
//   let row="";
//   for(let j=1; j<=i; j++){
//     row +=String.fromCharCode(charCode);
//   }
//   console.log(row);
//   charCode--;
// }

//     A
//    A A
//   A   A
//  A     A
//   A   A
//    A A
//     A
// let n = 4;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) row += " ";
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     if (k === 1 || k === 2 * i - 1) row += "A";
//     else row += " ";
//   }
//   console.log(row);
// }
// for (let i=n-1; i>=1; i--){
//   let row ="";
//   for (let j=1; j<=n-i; j++)row +=" ";
//   for(let k=1; k<=2*i-1; k++){
//     if(k===1 || k===2*i-1)row +="A";
//     else row +=" ";
//   }
//   console.log(row);
// }

// A   A
//  A A
//   A
//  A A
// A   A
// let n = 5;
// for (let i=1; i<=n; i++){
//   let row="";
//   for(let j=1; j<=n; j++){
//     if(j===i || j===n-i+1)row+="A";
//     else row+=" ";
//   }
//   console.log(row);
// }

//   A  
//   A  
// AAAAA
//   A  
//   A  
// let n = 5;
// let mid = Math.floor(n/2)+1;
// for(let i=1; i<=n; i++){
//   let row="";
//   for(let j=1; j<=n; j++){
//     if (i===mid || j===mid)row +="A";
//     else row +=" ";
//   }
//   console.log(row);
// }

// A   A
//  A A
//   A
//  A A
// A   A
// let n = 5;
// for (let i=1; i<=n; i++){
//   let row ="";
//   for(let j=1; j<=n; j++){
//     if(j===i || j===n-i+1)row +="A";
//     else row +=" ";
//   }
//   console.log(row);
// }











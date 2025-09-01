// parttern Printing 
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 

// let n = 5;

// for(i = 1; i <= n; i++)
// {
//     let row = "";
//     for(j = 1; j <= i; j++)
//    {
//         row +="* ";
//    } 
//    console.log(row);
// }

// * * * * * 
// * * * * 
// * * * 
// * * 
// *

// let n = 5;

// for (let i = n; i >= 1; i--) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "* ";
//   }
//   console.log(row);
// }

//     *
//    **
//   ***
//  ****
// *****

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++){
//      row += " ";
//   } 
//   for (let k = 1; k <= i; k++){
//     row += "*";
//   } 
//   console.log(row);
// }

// *****
//  ****
//   ***
//    **
//     *
// let n = 5;
// for(let i = n; i >= 1; i--){
//     let row ="";
//     for(let j = 1; j <= n - i; j++)
//         row +=" ";
//     for(let k = 1;k <= i; k++)
//         row +="*";
//     console.log(row);
// }


//     *
//    ***
//   *****
//  *******
// *********
// let n = 5;
// for(let i = 1; i <= n; i++){
//     let row ="";
//     for(let j = 1; j <= n - i; j++)row +=" ";
//     for(let k = 1; k <= 2*i-1; k++)row +="*";
//     console.log(row);
// }

// *********
//  *******
//   *****
//    ***
//     *
// let n = 5;
// for(let i = n; i >= 1; i--){
//     let row ="";
//     for(let j = 1; j <= n-i; j++)row +=" ";
//     for(let k = 1; k <= 2*i-1; k++)row +="*";
//     console.log(row);
// }

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
// let n = 5;
// for(let i = 1; i <= n; i++){
//     let row ="";
//     for(let j = 1; j <= n - i; j++)row +=" ";
//     for(let k = 1; k <= 2*i-1; k++)row +="*";
//     console.log(row);
// }
// for(let i = n; i >= 1; i--){
//     let row ="";
//     for(let j = 1; j <= n-i; j++)row +=" ";
//     for(let k = 1; k <= 2*i-1; k++)row +="*";
//     console.log(row);
// }

// *********
//  *******
//   *****
//    ***
//     *
//    ***
//   *****
//  *******
// *********
// let n = 5;
// for(let i = n; i >= 1; i--){
//     let row ="";
//     for(let j = 1; j <= n-i; j++)row +=" ";
//     for(let k = 1; k <= 2*i-1; k++)row +="*";
//     console.log(row);
// }
// for(let i = 1; i <= n; i++){
//     let row ="";
//     for(let j = 1; j <= n - i; j++)row +=" ";
//     for(let k = 1; k <= 2*i-1; k++)row +="*";
//     console.log(row);
// }

// *****
// *   *
// *   *
// *   *
// *****
// let n = 5;
// for(let i = 1; i <= n; i++){
//     let row ="";
//     for(let j = 1; j<=n; j++){
//         if (i === 1|| i===n|| j===1|| j===n)row +="*";
//         else row +=" ";
//     }
//     console.log(row);
// }

//     *
//    * *
//   *   *
//  *     *
// *********
// let n = 5;
// for(let i = 1; i <= n; i++){
//     let row ="";
//     for(let j = 1; j<=n-i; j++)row +=" ";
//     for(let k = 1; k <= 2*i-1;k++){
//        if (k === 1 || k === 2 * i - 1 || i === n) row += "*";
//     else row += " ";
//     }
//     console.log(row);
// }

// *********
//  *     *
//   *   *
//    * *
//     *
// let n = 5;
// for(let i = n; i >= 1; i--){
//     let row ="";
//     for(let j = 1; j <= n-i; j++)row +=" ";
//     for(let k = 1; k <= 2*i-1; k++){
//         if(k===1|| k===2*i-1||i===n)row +="*";
//         else row +=" ";
//     }
//     console.log(row);
// }

// *
// **
// ***
// ****
// *****
// let n = 5;
// for(let i = 1; i<= n; i++){
//     let row ="";
//     for(let j =1; j<=i;j++){
//         row +="*";
//     }
//     console.log(row);
// }

// *****
// ****
// ***
// **
// *
// let n = 5;
// for(let i = n; i>= 1; i--){
//     let row ="";
//     for(let j =1; j<=i;j++){
//         row +="*";
//     }
//     console.log(row);
// }

//     *
//    **
//   ***
//  ****
// *****
// let n = 5;
// for(let i = 1; i<= n; i++){
//     let row ="";
//     for(let j =1; j<=n-i;j++)row +=" ";
//     for(let k =1; k<=i; k++)row +="*";
//     console.log(row);
// }

// *****
//  ****
//   ***
//    **
//     *
// let n = 5;
// for(let i = n; i>= 1; i--){
//     let row ="";
//     for(let j =1; j<=n-i;j++)row +=" ";
//     for(let k =1; k<=i; k++)row +="*";
//     console.log(row);
// }

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *
// let n = 5;
// for(let i = 1; i<= n; i++){
//     let row ="";
//     for(let j =1; j<=i;j++){
//         row +="*";
//     }
//     console.log(row);
// }
// for(let i = n; i>= 1; i--){
//     let row ="";
//     for(let j =1; j<=i;j++){
//         row +="*";
//     }
//     console.log(row);
// }


// *   *
//  * *
//   *
//  * *
// *   *
// let n = 5;
// for(let i = 1; i <= n; i++){
//     let row ="";
//     for(let j = 1; j<=n; j++)
//     {
//        if (j === i || j === n-i+1) row += "*";
//     else row += " ";
//     }
//     console.log(row);
// }

//     *
//    * *
//   *   *
//  *     *
//   *   *
//    * *
//     *
// let n = 5;
// for(let i = 1; i <= n; i++){
//     let row ="";
//     for(let j = 1; j<=n-i; j++)row +=" ";
//     for(let k = 1; k <= 2*i-1;k++){
//        if (k === 1 || k === 2 * i - 1) row += "*";
//     else row += " ";
//     }
//     console.log(row);
// }
// for(let i = n; i >= 1; i--){
//     let row ="";
//     for(let j = 1; j<=n-i; j++)row +=" ";
//     for(let k = 1; k <= 2*i-1;k++){
//        if (k === 1 || k === 2 * i - 1) row += "*";
//     else row += " ";
//     }
//     console.log(row);
// }

//   *  
//   *  
// *****
//   *  
//   *  
// let n = 5;
// let mid = Math.floor(n / 2) + 1;

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n; j++) {
//     if (i === mid || j === mid) row += "*";
//     else row += " ";
//   }
//   console.log(row);
// }

// *****
// *   *
// * *
// *
// let n = 5;
// for (let i = n; i >= 1; i--) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     if (i === n || j === 1 || j === i) row += "*";
//     else row += " ";
//   }
//   console.log(row);
// }

//   *  
//  * * 
// *   *
//  * * 
//   *  
// let n = 3;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) row += " ";
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     if (k === 1 || k === 2 * i - 1) row += "*";
//     else row += " ";
//   }
//   console.log(row);
// }
// for (let i = n - 1; i >= 1; i--) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) row += " ";
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     if (k === 1 || k === 2 * i - 1) row += "*";
//     else row += " ";
//   }
//   console.log(row);
// }

// *****
//    *
//   *
//  *
// *****
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n; j++) {
//     if (i === 1 || i === n || j === n - i + 1) row += "*";
//     else row += " ";
//   }
//   console.log(row);
// }

// * * * *
//  * * * *
// * * * *
//  * * * *
// let n = 4;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n; j++) {
//     if ((i + j) % 2 === 0) row += "*";
//     else row += " ";
//   }
//   console.log(row);
// }














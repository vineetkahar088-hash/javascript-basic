// Q1. Pattern Print

// Pattern:

//     1
//    1 2 3
//   1 2 3 4 5
//  1 2 3 4 5 6 7

function pattern(n) {
    for(let i =1; i <= n; i++){
        let line = " ".repeat(n-i);
        for(let j =1; j <= 2*i-1; j++){
            line += j;
        }
        console.log(line);
    }
}
pattern(4);



// Q2. Palindrome ignoring special characters

// Example: "m@ad@am" → palindrome ✅

// function isPalindrome(str) {
//     let cleanstr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
//     let reverse = cleanstr.split("").reverse().join("");
//     return cleanstr === reverse;
// }

// console.log(isPalindrome("m@ad@am"));
// console.log(isPalindrome("hello"));




// Q3. Return non-duplicate element from array

// Example: [1,1,2,3,4,3,4] → Output = 2

// function findNonDuplicate(arr) {
//     let freq = {};
//     for(let num of arr) {
//         freq[num] = (freq[num] || 0) + 1;
//     }
//     for(let num in freq) {
//         if (freq[num] === 1)
//             return Number(num); 
//     }
// } 
// console.log(findNonDuplicate([1,1,2,2,3,4,4,5,5,6]))


// Q4. Subarray with maximum sum (Kadane’s Algorithm)

// Example: [1,2,-1,3,7,8,-47] → Subarray = [3,7,8]

// function maxSubarray(arr) {
//   let maxSoFar = arr[0], maxEndingHere = arr[0];
//   let start = 0, end = 0, s = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maxEndingHere + arr[i]) {
//       maxEndingHere = arr[i];
//       s = i;
//     } else {
//       maxEndingHere += arr[i];
//     }
//     if (maxEndingHere > maxSoFar) {
//       maxSoFar = maxEndingHere;
//       start = s;
//       end = i;
//     }
//   }
//   return arr.slice(start, end + 1);
// }
// console.log(maxSubarray([1,2,-1,3,7,8,-47])); 


function maxSubarray(arr) {
    let maxSoFar = arr[0], maxEndingHere = arr[0];
    let start = 0,end = 0, s = 0;
    for(let i =1; i < arr.length; i++){
        if (arr[i] > maxEndingHere + arr[i]){
            maxEndingHere = arr[i];
            s = i;
        }else{
            maxEndingHere += arr[i];
        }
        if (maxEndingHere > maxSoFar) {
            maxSoFar = maxEndingHere;
            start = s;
            end = i;
        }
    }
    return arr.slice(start,end + 1);
}
console.log(maxSubarray([1,2,-1,3,7,8,-47]));
let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 now references the same array as arr1

arr2[0] = 99; // Change arr2
console.log(arr1); // [99, 2, 3] - arr1 is also affected


let arr3 = [1, 2, 3];
let arr4 = [...arr1]; // Creates a shallow copy

arr4[0] = 99;
console.log(arr3); // [1, 2, 3] - Unaffected
console.log(arr4); // [99, 2, 3]


//spread operator

let arr = [1, 2, 3, 0.5, -1];
let maxNumber = Math.max(...arr);
console.log(maxNumber); //3


//how to copy an array ?

//spread operator
let numbers = [3, 4, 5];
let allNumbers = [1, 2, ...numbers, 6, 7];
console.log(allNumbers);

//slice()
let arr2 = arr1.slice(); // Creates a shallow copy

//Array.from()
let arr2 = Array.from(arr1);

const numbers = [1, 2, 3, 4, 5];

// Use map to double the numbers
const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]

// Use filter to get only even numbers
const evens = doubled.filter(num => num % 2 === 0); // [2, 4, 6, 8, 10]

// Use find to get the first number greater than 6
const firstGreaterThanSix = evens.find(num => num > 6); // 8

// Use reduce to calculate the sum of all even numbers
const sumOfEvens = evens.reduce((total, num) => total + num, 0); // 30

console.log({ doubled, evens, firstGreaterThanSix, sumOfEvens });
// Output: { doubled: [2, 4, 6, 8, 10], evens: [2, 4, 6, 8, 10], firstGreaterThanSix: 8, sumOfEvens: 30 }

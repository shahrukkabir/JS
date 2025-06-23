//Example1:Object Destructuring
const person = {
    fullName: 'Rahim Uddin',
    age: 25,
    email: 'rahim@example.com',
    salary: 50000
};

// Destructuring
const {email, age: personAge} = person; 

// Equivalent to:
// const email = person.email;
// const personAge = person.age;

console.log(email);      // Output: rahim@example.com
console.log(personAge);  // Output: 25

//Example2:Array Destructuring
const items = ['Apple', 'Banana', 'Cherry'];

// Destructuring
const [fruit1, fruit2] = items;

// Equivalent to:
// const fruit1 = items[0];
// const fruit2 = items[1];

console.log(fruit1);  // Output: Apple
console.log(fruit2);  // Output: Banana

//Example3:Array Destructuring with a Function

function calculateSquares(a, b) {
    return [a ** 2, b ** 2];
}

// Destructuring the returned array
const [square1, square2] = calculateSquares(4, 5);

console.log(square1, square2);  // Output: 16 25

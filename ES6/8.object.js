// 1. Adding an Element to an Object
const myObject = { name: "John", age: 30 };
// Add a new property
myObject.city = "New York";
console.log(myObject); 
// Output: { name: 'John', age: 30, city: 'New York' }
// Or using bracket notation:
myObject["country"] = "USA";
console.log(myObject); 
// Output: { name: 'John', age: 30, city: 'New York', country: 'USA' }
                                        

//2. Deleting an Element from an Object
// (a) Using the delete Keyword
const myObject = { name: "John", age: 30, city: "New York" };
delete myObject.city;
console.log(myObject); 
// Output: { name: 'John', age: 30 }

// (b) Using the Spread Operator
const myObject = { name: "John", age: 30, city: "New York" };
const { city, ...rest } = myObject; // Destructure and exclude 'city'
console.log(rest); 
// Output: { name: 'John', age: 30 }

// 3. Object.keys()
const myObject = { name: "John", age: 30, city: "New York" };
const keys = Object.keys(myObject);
console.log(keys); 
// Output: [ 'name', 'age', 'city' ]

// 4. Object.values()
const myObject = { name: "John", age: 30, city: "New York" };
const values = Object.values(myObject);
console.log(values); 
// Output: [ 'John', 30, 'New York' ]

// 5. Object.entries()
const myObject = { name: "John", age: 30, city: "New York" };
const entries = Object.entries(myObject);
console.log(entries); 
// Output: [ [ 'name', 'John' ], [ 'age', 30 ], [ 'city', 'New York' ] ]

// 6. Object.freeze()
const myObject = { name: "John", age: 30 };
Object.freeze(myObject);
myObject.name = "Doe"; // This will be ignored
myObject.city = "New York"; // This will not be added
delete myObject.age; // This will not work

console.log(myObject); 
// Output: { name: 'John', age: 30 }

// 7. Object.seal()
const myObject = { name: "John", age: 30 };
Object.seal(myObject);
myObject.name = "Doe"; // This works
myObject.city = "New York"; // This will not be added
delete myObject.age; // This will not work
console.log(myObject); 
// Output: { name: 'Doe', age: 30 }


const glass = { name: 'glass', color: 'golden', price: 12, isCleaned: true };

// Retrieve keys first
const keys = Object.keys(glass);

// Loop through keys and access values
for (const key of keys) {
    console.log(key, glass[key]); 
    // Output: name glass, color golden, price 12, isCleaned true
}




const glass2 = { name: 'glass', color: 'golden', price: 12, isCleaned: true };

// Using `for...in` to loop through keys
for (const key in glass2) {
    const value = glass2[key];
    console.log(key, value);
    // Output: name glass, color golden, price 12, isCleaned true
}





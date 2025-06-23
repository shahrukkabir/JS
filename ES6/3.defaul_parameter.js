function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
  
  console.log(greet("John")); // Output: Hello, John!
  console.log(greet());       // Output: Hello, Guest!
  

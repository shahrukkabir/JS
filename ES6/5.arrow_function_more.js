//arrow function
const add4 = (a,b) => a+b;

const getAge = (person) => person.age;

const student = {name:'mohsin',age:21};
const age = getAge(student);
console.log(age);

//one parameter
const square = n => n*n;

//no parameter
const getPI = () =>Math.PI;

// The large arrow function requires the use of the return keyword if you want it to explicitly return a value.
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult
    return result
}
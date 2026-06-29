//Day1 JavaScript Fundamentals for Playwright


//Part 1 Variable declarations in JavaScript
let username = "jester";
username = "jester123"; //let variable can be reassigned

const age = 30;
// age = 31; //const variable cannot be reassigned, this will throw an error

// Output the values to the console
console.log(username + " is " + age + " years old.");

//Part 2 Data types in JavaScript
//String
const name = "QA Jester";
//Number
const score = 95;
//Boolean
const isPassed = true;
//Null
const middleName = null;
//Undefined
let lastName; //lastName is declared but not assigned, so it is undefined
//Array
const fruits = ["apple", "banana", "cherry"];
//Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 25
}
//Output the data types to the console
console.log("Name: " + name);
console.log("Score: " + score);
console.log("Passed: " + isPassed);
console.log("Middle Name: " + middleName);
console.log("Last Name: " + lastName);
console.log("Fruits: " + fruits);
console.log("Person: " + person.firstName + " " + person.lastName + ", Age: " + person.age);

//Part 3 Operators in JavaScript
//Equality operator the return of Equality operator is boolean
const a = 10;
const b = "10";
console.log(a == b); //true, because == performs type coercion
console.log(a === b); //false, because === checks for both value and type

//Part 4 Basic Functions in JavaScript
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet(name); //Output: Hello, QA Jester!

//Assignment 1 for Day 1
//1. Create a variable named company and store:
const company = "eTeam";
console.log("Company: " + company);

//2. Create an object and print Role
const user = {
    name: "Jester",
    role: "QA Engineer",
}
console.log("Role:" + user.role);

//3.Create a function called: It should accept two numbers and print their sum.
function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log("Sum: " + addNumbers(5, 10));

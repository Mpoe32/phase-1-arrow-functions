// Basic Arrow Functions
let a = 2000;
let b = 100;
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

// Iterator Methods
const numbers = [1, 2, 3, 4];
const double = numbers.map((num) => num * 2);
const square = ((num) => num * 2);

const words = ["hello", "world"];
const shout = words.map((word) => word.toUpperCase());

// Advanced Arrow Functions
const rectangleArea = (length, width) => length * width;

const isEven = (num) => num % 2 === 0;

const concatenateStrings = (str1, str2) => `${str1} ${str2}`;
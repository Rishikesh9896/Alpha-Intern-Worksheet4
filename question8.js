// Define two numbers for comparison
var num1 = 10;
var num2 = 5;

// Comparison Operators
console.log("Comparison Results:\n");

// Equal to (==)
console.log(num1 + " == " + num2 + " : " + (num1 == num2)); // false
console.log(num1 + " == 10 : " + (num1 == 10)); // true

// Strict equal to (===)
console.log(num1 + " === " + num2 + " : " + (num1 === num2)); // false
console.log(num1 + " === 10 : " + (num1 === 10)); // true

// Not equal to (!=)
console.log(num1 + " != " + num2 + " : " + (num1 != num2)); // true
console.log(num1 + " != 10 : " + (num1 != 10)); // false

// Strict not equal to (!==)
console.log(num1 + " !== " + num2 + " : " + (num1 !== num2)); // true
console.log(num1 + " !== 10 : " + (num1 !== 10)); // false

// Greater than (>)
console.log(num1 + " > " + num2 + " : " + (num1 > num2)); // true
console.log(num1 + " > 15 : " + (num1 > 15)); // false

// Greater than or equal to (>=)
console.log(num1 + " >= " + num2 + " : " + (num1 >= num2)); // true
console.log(num1 + " >= 15 : " + (num1 >= 15)); // false

// Less than (<)
console.log(num1 + " < " + num2 + " : " + (num1 < num2)); // false
console.log(num1 + " < 15 : " + (num1 < 15)); // true

// Less than or equal to (<=)
console.log(num1 + " <= " + num2 + " : " + (num1 <= num2)); // false
console.log(num1 + " <= 10 : " + (num1 <= 10)); // true

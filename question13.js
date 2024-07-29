// Function to check if a number is divisible by both 5 and 3
function checkDivisibility(number) {
    if (number % 5 === 0 && number % 3 === 0) {
        console.log(number + " is divisible by both 5 and 3.");
    } else {
        console.log(number + " is not divisible by both 5 and 3.");
    }
}

// Example usage
var input = parseInt(prompt("Enter a positive integer:"), 10);

// Check if the input is a positive integer
if (isNaN(input) || input <= 0) {
    console.log("Please enter a valid positive integer.");
} else {
    // Call the function with the provided input
    checkDivisibility(input);
}

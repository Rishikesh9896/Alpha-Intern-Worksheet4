// Function to check if a number is a three-digit number
function isThreeDigitNumber(number) {
    if (number >= 100 && number <= 999) {
        console.log(number + " is a three-digit number.");
    } else {
        console.log(number + " is not a three-digit number.");
    }
}

// Example usage
var input = parseInt(prompt("Enter a positive integer:"), 10);

// Check if the input is a positive integer
if (isNaN(input) || input <= 0) {
    console.log("Please enter a valid positive integer.");
} else {
    // Call the function with the provided input
    isThreeDigitNumber(input);
}

// Function to check if a number is prime
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    if (number <= 3) {
        return true;
    }
    if (number % 2 === 0 || number % 3 === 0) {
        return false;
    }
    for (var i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

// Example usage
var input = parseInt(prompt("Enter a positive integer:"), 10);

// Check if the input is a positive integer
if (isNaN(input) || input <= 0) {
    console.log("Please enter a valid positive integer.");
} else {
    // Call the function with the provided input and print the result
    if (isPrime(input)) {
        console.log(input + " is a prime number.");
    } else {
        console.log(input + " is not a prime number.");
    }
}

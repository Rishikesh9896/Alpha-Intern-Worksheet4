// Function to print numbers divisible by a given divisor in a range
function printNumbersDivisibleBy(divisor, start, end) {
    for (var i = start; i <= end; i++) {
        if (i % divisor === 0) {
            console.log(i);
        }
    }
}

// Call the function to print numbers divisible by 3 between 1 and 100
printNumbersDivisibleBy(3, 1, 100);

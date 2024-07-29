// Function to find the largest element in an array
function findLargestElement(arr) {
    // Initialize the maximum element with the first element of the array
    var max = arr[0];
    
    // Loop through the array
    for (var i = 1; i < arr.length; i++) {
        // Update max if the current element is larger
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    return max;
}

// Example usage
var numbers = [12, 45, 7, 89, 23, 56];
var largest = findLargestElement(numbers);
console.log("The largest element is: " + largest);

// Function to find the largest element in an array using Math.max
function findLargestElement(arr) {
    return Math.max(...arr);
}

// Example usage
var numbers = [12, 45, 7, 89, 23, 56];
var largest = findLargestElement(numbers);
console.log("The largest element is: " + largest);

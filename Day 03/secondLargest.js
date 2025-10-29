// Problem Statement:
// Write a function secondLargest(arr) that returns the second largest distinct number in an array.

// Requirements:
// The array must contain at least two elements.
// If all elements are equal, return: No second largest found.
// If the array has fewer than two elements, return: Array should have at least two numbers.


function secondLargest(arr) {
    if(arr.length<2) return "Array should have at least two numbers";
    // if(arr[0] === arr[1]) return "All elements are equal,No second largest found.";
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        }
        else if(arr[i]>secondLargest && arr[i] !== firstLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest === -Infinity ? "No second largest found" : secondLargest;
}

let arr = [20, 20, 20, 25];
console.log(secondLargest(arr))
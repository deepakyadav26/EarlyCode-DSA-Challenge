// Problem Statement:
// Write a function that searches for an element in an array and returns the index if element is not present then, just return -1.

function searchElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

let arr1 = [10, 5, 8, 3, 0, 1, 54];
let target = 54;
console.log(searchElement(arr1, target));

// ------------------------------------------------------------------------------------------------------

// Problem Statement:
// Write a function that returns the number of negative numbers in an array.

function findNegative(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}
let arr2 = [10, -5, 8, -3, 0, -4, 7, -1, 54];
console.log(findNegative(arr2));

// -----------------------------------------------------------------------------------------------------

// Problem Statement:
// Write a function that returns the largest number in an array.


function findLargest(arr){
    let largest = -Infinity;
    for(let i = 0; i<arr.length; i++) {
      if(arr[i]>largest){
          largest = arr[i];
      }
    }
    return largest;
}
let arr3 = [10,-5,8,-3,0,4, 7, -1,54, 53];
console.log(findLargest(arr3));


// -----------------------------------------------------------------------------------------------------

// Problem Statement:
// Write a function that returns the smallest number in an array.

function findSmallest(arr){
    let smallest = Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i];
        }
    }
    return smallest;
}

let arr4 = [10, 4, 3, 5];

console.log(findSmallest(arr4));
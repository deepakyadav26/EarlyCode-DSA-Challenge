// Problem Statement:
// Write a program to print all even numbers from an array.

let arr = [10, 5, 8, 7, 6, 2, 1, 9];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}

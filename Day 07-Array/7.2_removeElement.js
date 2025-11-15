// 27. Remove Element
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order 
// of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do 
// the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to
//  val. The remaining elements of nums are not important as well as the size of nums.
// Return k.


function removeElement(arr, val) {
    let x =0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] !== val) {
            arr[x] = arr[i]; 
              x = x+1;
        }
    }
    console.log(arr);
    return x;
}

let arr = [3,2,2,3];
let val = 3;
console.log(removeElement(arr,val));
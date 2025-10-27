// Problem Statement:
// Write a program that accepts a number (age) and checks whether the person is eligible to vote. A person is eligible if their age is 18 or more.

function checkEligibility(age) {
  if (age < 0) return "Please fill appropriate age";
  else if (age < 18) {
    return "You are not Eligible to vote.";
  } else {
    return "You are Eligible to vote.";
  }
}

let result = checkEligibility(452);
console.log(result);
// alert(message);

// ---------------------------------------------------------------------------------------------------

// Problem Statement:
// Write a function that accepts a number and checks whether it is Even or Odd. If the number is divisble by 2, it’s an Even number. Otherwise, it’s an Odd number. Test the function with inputs 18 and 5.

function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.loh(`Given number ${num} is Even number`);
  } else {
    console.loh(`Given number ${num} is Odd number`);
  }
}

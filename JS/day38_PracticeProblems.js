// Sequence Practice Problems

function rand() {
  // number between 0 and 10;
  let a = Math.floor(Math.random() * 10);

  return a;
}

let random = rand();
console.log(random);

function diceRand() {
  // number between 1 and 6;
  let b = Math.floor(Math.random() * 6) + 1;
  return b;
}
let diceRandom1 = diceRand();
let diceRandom2 = diceRand();
console.log("dice 1 : ", diceRandom1);
console.log("dice 2 : ", diceRandom2);
let diceSum = diceRandom1 + diceRandom2;
console.log("dice sum : ", diceSum);

// 5 random 2 digit number, sum and average

function getRandomTwoDigitNumber() {
  return Math.floor(Math.random() * 90) + 10;
}

var randomValue1 = getRandomTwoDigitNumber();
var randomValue2 = getRandomTwoDigitNumber();
var randomValue3 = getRandomTwoDigitNumber();
var randomValue4 = getRandomTwoDigitNumber();
var randomValue5 = getRandomTwoDigitNumber();

let randomSum =
  randomValue1 + randomValue2 + randomValue3 + randomValue4 + randomValue5;
let randomAverage = randomSum / 5;

console.log("Sum of 5 Random 2-digit value: " + randomSum);
console.log("Average of sum 5 Random 2-digit value: " + randomAverage);

// Unit conversion

function unitConversion(inches) {
  let feet = inches / 12;
  return feet;
}

let inches = 42;
let feet = unitConversion(inches);
console.log(inches + " inches is equal to " + feet + " feet.");

// If statements

function rightToVote() {
  let age = 20;
  if (age > 18) {
    console.log("Age is :", age, "You can Vote");
  } else {
    console.log("Age is :", age, "You can't Vote");
  }
}
rightToVote();

// Case Statements

function swithDemo() {
  let day = 4;

  switch (day) {
    case 2:
      console.log("Hi");

      break;
    case 3:
      console.log("Hello");

      break;
    case 4:
      console.log("Hello Hai");

      break;

    default:
      console.log("Default");
      break;
  }
}

swithDemo();

// for loop
function arrayDemo() {
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
}

arrayDemo();

// while loop

let i = 0;

while (i <= 10) {
  console.log(i);
  i++;
}

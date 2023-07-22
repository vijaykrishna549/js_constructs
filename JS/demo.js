// let a = 5;
// console.log("Integer is :", a);
// let b = "hi";
// console.log("String is :", b);

const name = "Vijay";
console.log("My name is : ", name);

function rightToVote() {
  let age = 20;
  if (age > 18) {
    console.log("Age is :", age, "You can Vote");
  } else {
    console.log("Age is :", age, "You can't Vote");
  }
}
rightToVote();

function arrayDemo() {
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
}

arrayDemo();

function add(a, b) {
  let sum = a + b;
  return sum;
}
let sum = add(5, 8);
console.log("The sum is : ", sum);

let intArr = [1, 4, 6, 7];
console.log(intArr);

console.log("length is : ", intArr.length);
console.log(intArr[2]);

for (let i = 0; i < intArr.length; i++) {
  console.log(intArr[i]);
}

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

// let value = prompt("Please enter a value");

// if (value) {
//   console.log(value);
// } else {
//   console.log("Invalid");
// }

function Employee(name1, age) {
  this.name1 = "Vijay";
  this.age = 25;
}

const val = new Employee();
console.log(val.age);

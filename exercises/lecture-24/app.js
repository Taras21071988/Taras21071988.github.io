// Завдання 1

const colors = ["blue", "green", "white"];

function iter(item) {
  console.log(item);
}

colors.forEach(iter);

//

// Завдання 2

//2.1
function iterate(item, index) {
  console.log(`${item} has index ${index}`);
}
colors.forEach(iterate);

//2.2
function iterateOne(item, index, array) {
  console.log(`${item} has index ${index}`);
  if (index === array.length - 1) {
    console.log("The last iteration!");
  }
}
colors.forEach(iterateOne);

//

// Завдання 3

const letters = ["a", "b", "c"];

function iterateTwo(letter) {
  console.log(this === window);
}
letters.forEach(iterateTwo);

//

// Завдання 4

const Numbers = [22, 3, 4, 10];
let allEven = true;

Numbers.forEach(function (number) {
  if (number % 2 === 1) {
    allEven = false;
  }
});
console.log(allEven);

//

// Завдання 5

const allEvenNew = Numbers.every((number) => number % 2 === 0);
console.log(allEvenNew);

//

// Завдання 6

const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex((fruit) => fruit === "blueberries");
console.log("first index : ", index);

//

// Завдання 7

const arr = [7, 33, 47, 99, 2, 103, 79];
const findElem = arr.find((elem) => elem > 10);
console.log(findElem);

//

// Завдання 8

const array = [1, 2, 3, 4, 5];

const even = (element) => element % 2 === 0;
console.log(array.some(even));

//

// Завдання 9

const numbers = [1, 30, 4, 21, 100000];

numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);

//

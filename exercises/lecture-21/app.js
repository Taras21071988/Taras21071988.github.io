//  Завдання 1

let fruits = "apple banana cantaloupe blueberries grapefruit";
fruits = fruits.split(" ");

//

//  Завдання 2

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//

//  Завдання 3

let f = 0;
while (f < fruits.length) {
  console.log(fruits[f]);
  f++;
}

//

//  Завдання 4

let n = 0;
do {
  console.log(fruits[n]);
  n++;
} while (n < fruits.length);

//

//  Завдання 5

for (const fruit of fruits) {
  console.log(fruit);
}

//

//  Завдання 6

const Numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < Numbs.length; i++) {
  if (Numbs[i] % 2 === 0) {
    console.log(Numbs[i]);
  }
}

//

//  Завдання 7

{
  const names = ["Batman"];
  names.push("Joker");
  console.log(names);
}

//

//  Завдання 8

{
  const names = ["Batman"];
  names.unshift("Joker");
  console.log(names);
}

//

//  Завдання 9

{
  const names = ["Batman", "Joker", "Bane"];
  names.unshift("Catwoman");
  console.log(names);
}

//

//  Завдання 10

{
  let names = ["Batman", "Joker", "Bane"];
  names = ["Catwoman", ...names];
  console.log(names);
}

//

//  Завдання 11

{
  const names = ["Batman", "Joker", "Bane"];
  names.splice(1, 0, "Catwoman");
  console.log(names);
}

//

//  Завдання 12

{
  const names = ["Batman", "Catwoman", "Joker", "Bane"];
  const nameCat = names.indexOf("Catwoman");
  if (nameCat !== -1) {
    names.splice(nameCat, 1);
  }

  const nameJok = names.indexOf("Joker");
  if (nameJok !== -1) {
    names.splice(nameJok, 1);
  }

  console.log(names);
}
// Или можно пройти циклом
{
  const names = ["Batman", "Catwoman", "Joker", "Bane"];
  const elRemove = ["Catwoman", "Joker"];

  for (let i = 0; i < elRemove.length; i++) {
    const iRemove = names.indexOf(elRemove[i]);
    if (iRemove !== -1) {
      names.splice(iRemove, 1);
    }
  }

  console.log(names);
}

//

//  Завдання 13

{
  const names = ["Batman", "Catwoman", "Joker", "Bane"];

  const iCatwoman = names.indexOf("Catwoman");
  const iJoker = names.indexOf("Joker");

  if (iCatwoman !== -1) {
    names.splice(iCatwoman, 1, "Alfred");
  }

  if (iJoker !== -1) {
    names.splice(iJoker, 1, "Alfred");
  }
  console.log(names);
}

// или же опять пройти циклом
{
  const names = ["Batman", "Catwoman", "Joker", "Bane"];
  const rename = "Alfred";

  for (let i = 0; i < names.length; i++) {
    if (names[i] === "Catwoman" || names[i] === "Joker") {
      names[i] = rename;
    }
  }

  console.log(names);
}

// Но чтобы не повторялось "Alfred" - можно сделать :

{
  let names = ["Batman", "Catwoman", "Joker", "Bane"];
  const rename = "Alfred";

  const newArray = new Set();

  for (let i = 0; i < names.length; i++) {
    if (names[i] === "Catwoman" || names[i] === "Joker") {
      newArray.add(rename);
    } else {
      newArray.add(names[i]);
    }
  }

  names = Array.from(newArray);

  console.log(names);
}

//

//  Завдання 14

{
  const names = ["Batman", "Catwoman", "Joker", "Bane"];
  if (!names.includes("Alfred")) {
    names.push("Alfred");
  }
  console.log(names);
}

//

//  Завдання 15
const names = ["Batman", "Catwoman", "Joker", "Bane"];
const alf = names.indexOf("Alfred");

if (alf !== -1) {
  names.splice(alf, 1);
} else {
  console.log("Такого нет");
}
console.log(names);

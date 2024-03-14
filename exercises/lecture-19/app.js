// Завдання 1
let str1 = "I'm a string!";
let str2 = "I'm a string!";

function equal(str1, str2) {
  const equallength = str1.length === str2.length; //Перевірка на довжину рядка

  const strictEqual = str1 === str2; //Сувора перевірка

  const looseEqual = str1 == str2; //Hедбалa  перевірка

  console.log("Довжина рядків однакова:", equallength);
  console.log("Строга перевірка:", strictEqual);
  console.log("Недбала перевірка:", looseEqual);
}
equal(str1, str2);
//

//Завдання 2
let string5 = "Hello World";

console.log(string5[0]);
console.log(string5.charAt(0));
//

//Завдання 3
// повернути символ J рядка:
let str3 = "Hello Javascript";
let desired = "J";
let index = str3.indexOf(desired);
if (index !== -1) {
  console.log(str3[index]);
} else {
  console.log("Символ не знайдено в зазначеному рядку");
}
//

//Завдання 4
console.log(str3[str3.length - 1]);
console.log(str3.slice(-1));
//

//Завдання 5

function lastCharOne(str) {
  return str.charAt(str.length - 1);
}

function lastCharTwo(str) {
  return str.slice(-1);
}

function lastCharThree(str) {
  return str[str.length - 1];
}

console.log(lastCharOne(str3));
console.log(lastCharTwo(str3));
console.log(lastCharThree(str3));
//

//Завдання 6
let a = "When candles are out,";
let b = "all cats are grey.";

console.log(a.concat(b));
//

//Завдання 7 - Використовував функцію щоб не перейменовувати змінні
function taskSeven() {
  let fact = "Fifteen is the same as";
  let a = 5;
  let b = 10;
  fact += " " + (a + b);
  console.log(fact);
}
taskSeven();
//

//Завдання 8
let firstName = "Tom";
let lastName = "Cat";

function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log(getFullName(firstName, lastName));
//

//Завдання 9
function greeting(firstName, lastName) {
  let hi = "Hello,";
  let full = getFullName(firstName, lastName);
  return hi + " " + full;
}
console.log(greeting(firstName, lastName));
//

//Завдання 10
let template = `
<div><h1>${greeting(firstName, lastName)}</h1></div>
`;

const div = document.getElementById("new");
div.innerHTML = template;
console.log(template);
//

//Завдання 11
let string1 = "  The name of our game  ";
console.log(string1.trim());
console.log(string1.trimStart() + "..."); // В консоли плохо видно результат, для этого добавил три точки
console.log(string1.trimEnd());

const phoneNumber = "\t  555-123\n ";

console.log(phoneNumber.trim());
console.log(phoneNumber.trim() + "\\n"); // тут если честно не понял немного, \n - это символ новой строки
//

//Завдання 12

let sentence = "Always look on the bright side of life";

console.log(sentence.includes("look up"));
console.log(sentence.includes("look on"));
console.log(sentence.slice(8).includes("look on"));
//

//Завдання 13
console.log(sentence.indexOf("l"));
console.log(sentence.indexOf("l", 3));
console.log(sentence.indexOf("L")); // если имелось ввиду найти букву не смотря на  регистр то можно сделать console.log(sentence.toUpperCase().indexOf("L"));
//

//Завдання 14
console.log(sentence.substring(7));
console.log(sentence.substring(0, 6));
console.log(sentence.split(" ")[1]);
//

//Завдання 15
function login(log) {
  const pattern = /^[\w-]{8,16}$/;
  let matched = log.match(pattern);
  if (pattern.test(log)) {
    console.log("login - valid", matched);
    return true;
  } else {
    console.log("login dont valid");
    return false;
  }
}
login("qwerty1234");
//

//Завдання 15
function mail(email) {
  const pattern = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;

  let matched = email.match(pattern);
  if (pattern.test(email)) {
    console.log("Email - valid", matched);
    return true;
  } else {
    console.log("Email dont valid");
    return false;
  }
}
mail("test@test.com");
//

//Завдання 16
let sentenceNew =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.";

function truncateTextSubstring(str) {
  return str.substring(0, 50);
}
console.log(truncateTextSubstring(sentenceNew));

function truncateTextSubstr(str) {
  return str.substr(0, 50);
}
console.log(truncateTextSubstr(sentenceNew));
// Но лучше сделать немного по другому - в таком случае колличеством символов можно будет управлять 

/*
let maxLength = 50;
function truncateTextSubstring(str,maxlength) {
  return str.substring(0,maxlength );
}
console.log(truncateTextSubstring(sentenceNew,maxLength));
*/

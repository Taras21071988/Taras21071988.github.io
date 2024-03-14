// Завдання 1
let age = prompt("Pls enter you age:");
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  return confirm("Did parents allow you?");
}
checkAge(age);
//(1.1, 1.2, 1.3)  Функція працюватиме точно так само,різниці немає, робота функції просто завершується після return

// Завдання 4
//4.1
function checkAgeFour(age) {
  return age > 18 ? true : confirm("Did parents allow you?");
}
//4.2
function checkAgeFourNew(age) {
  return age > 18 || confirm("Did parents allow you?");
}
//(4.3)Дужки не потрібні, вони просто роблять код більш читабельним

// Завдання 4 - тут, напевно, помилка, тому що завдання 4 уже було, але позначу як четверте - щоб не збивати черговість завдань щодо завдання
//4.1
function minIf(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(minIf(2, 5));
console.log(minIf(3, -1));
console.log(minIf(1, 1));
// 4.2

function minTern(a, b) {
  return a < b ? a : b;
}
console.log(minTern(2, 5));
console.log(minTern(3, -1));
console.log(minTern(1, 1));

// 4.3
function pow(x, n) {
  if (n === 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

let x = parseFloat(prompt("Введите число x:"));
let n = parseFloat(prompt("Введите степень n:"));

if (n < 1 || !Number.isInteger(n) || x < 1 || !Number.isInteger(x)) {
  alert("Неправильне значення параметра. Введіть ціле число від 1 для x і n.");
} else {
  alert(pow(x, n));
}
// Зробив за допомогою рекурсії, можна було, звичайно, зробити за допомогою циклу for - виглядало б трохи охайніше
/*
function pow(x, n) {
    let res = 1;
    for(let i = 0; i < n; i++) {
        res *= x;
    }
    return res;
}
*/
//

// Завдання 5
let ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};
ask(
  "Якесь питання:",
  function () {
    alert("Ви вiдпвили ТАК");
  },
  function () {
    alert("Ви вiдпвили HI");
  }
);
//

// Завдання 6
let askNew = function (question, yes, no) {
  if (confirm(question)) yes();
  else no();
};

askNew(
  "Якесь питання",
  () => console.log("Ви вiдпвили ТАК"),
  () => console.log("Ви вiдпвили HI")
);
//

//  Завдання 7
function A() {
  console.log("A was called");
  return undefined;
}
function B() {
  console.log("B was called");
  return false;
}
function C() {
  console.log("C was called");
  return "foo";
}

console.log(A() ?? C());
console.log(B() || C());

// console.log(C(A()));
// console.log(C(B()));
// C(A());
// A();
// console.log(C());
// B();
// console.log(C());

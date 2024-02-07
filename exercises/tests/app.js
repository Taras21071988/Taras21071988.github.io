const section = document.querySelector('section');
// поки не зміг розв'язати проблему з тим, щоб не створювати фіксовану кількість елементів
for (let i = 0; i < 250; i++) {
  const span = document.createElement('span');
  section.appendChild(span);
}
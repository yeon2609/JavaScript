const test = [3, 6, 9, 12, 15];
const fn = (x) => x * 2;
test.map((x, i) => i); // [0, 1, 2, 3, 4]


const num = "123456789"; // -> "123456***"
const quiz = [...num].map((x, i) => num.length - 3 > i ? x : '*').join('');
window.console.log(quiz)
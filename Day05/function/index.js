// 마술상자(input -> output)
function give100(x) {
    return x * 100;
}

function hello(name) {
    return name + "님 ㅎㅇ";
}

const test = give100(10);
window.console.log(test); // 1000

const test1 = hello("전수효");
window.console.log(test1); // 전수효님 ㅎㅇ

function add(x, y) {
    return x + y;
}
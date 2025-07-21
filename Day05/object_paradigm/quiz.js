// 베스킨라빈스 오브젝트를 만들고, 아이스크림 3개 종류를 넣고,
// 매출은 0부터 시작하고
// 판매가 되면 그 아이스크림 가격에 따른 매출이 오르도록 하는 오브젝트 타입 만들기

const baskin = {
    icecreams : [
        {name : '아몬드봉봉', price : 3000},
        {name : '바닐라', price : 2000},
        {name : '초콜릿', price : 2000}
    ],
    sales : 0,
    sellIcecream : function(x) {
        this.sales = this.sales + this.icecreams[x].price;
    }
};

baskin.sellIcecream(1);
baskin.sellIcecream(2);
baskin.sellIcecream(3);

window.console.log(baskin.sales);

const hello = "hi joshua";
const test = hello.toUpperCase();
const test1 = hello.repeat(10);
console.log(test);
console.log(test1);

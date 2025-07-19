// "사용자로부터 피자 종류(정수 1 ~ 3), 구매할 피자 개수 (양의 정수), 투입한 금액(양의 정수, 단위 : 원)을 입력받아, 아래 조건에 따라 동작하는 프로그램을 작성하세요.
// 1 : 페퍼로니 피자(15,000원)
// 2 : 치즈 피자(13,000원)
// 3 : 불고기 피자(16,000원)
// 구매할 피자 개수에 따라 총 가격을 계산하고, 투입한 금액에서 총 가격을 뺀 잔돈을 출력하세요
// (단, 총 금액이 투입한 금액보다 크면 '잔액이 부족합니다'를 출력)
// 입력 : 2, 2, 40,000 -> 출력 : '치즈 피자 2개, 잔돈 14,000원'
// 입력 : 1, 3, 40,000 -> 출력 : '페퍼로니 피자 3개, 잔돈 5,000원'
// 입력 : 3, 1, 10,000 -> 출력 : '잔액이 부족합니다.'"

const pizza = [
  {name : 'pepperoni', price : 15000},
  {name : 'cheese' , price : 13000},
  {name : 'bulgogi', price : 16000} 
];

const menu = +window.prompt("피자 종류 : ") - 1
const amount = +window.prompt("구매할 피자 개수 : ")
const money = +window.prompt("투입한 금액 : ")

if (money >= pizza[menu].price * amount) {
  window.console.log(`${pizza[menu].name}피자 ${amount}개, 잔돈 ${money - pizza[menu].price * amount}원`)
}
else {
  window.console.log(`잔액이 부족합니다.`)
}
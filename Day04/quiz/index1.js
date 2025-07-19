// "버스 요금 계산 시뮬레이션
// 사용자로부터 버스 노선의 종류(정수 1 ~ 3)와 승객의 나이(정수)를 입력받아,
// 아래 조건에 따라 최종 버스 요금을 계산하여 출력하는 프로그램을 작성하세요
// 1. 시내버스 - 1,200원
// 2. 광역버스 - 2,000원
// 3. 마을버스 - 1,000원
// 어린이(7세 이하) : 무료
// 청소년(8세 ~ 19세) : 30% 할인
// 성인(20세 ~ 64세) : 할인 없음
// 노인(65세 이상) : 무료
// 입력 : 1, 6 -> 출력 : '시내버스 요금 : 0원'
// 입력 : 2, 18 -> 출력 : '광역버스 요금 : 1,400원'
// 입력 : 3, 22 -> 출력 : '마을버스 요금 : 1,000원'"

const bus = [
  {name : '시내버스', price : 1200},
  {name : '광역버스', price : 2000},
  {name : '마을버스', price : 1000}
];

const line = +window.prompt("버스 노선의 종류 : ") - 1
const age = +window.prompt("승객의 나이 : ")

if (age >= 65 || age <= 7) {
  window.console.log(`${bus[line].name} 요금 : 0원`)
}
else if (age >= 20) {
  window.console.log(`${bus[line].name} 요금 : ${bus[line].price}원`)
}
else if (age >= 8) {
  window.console.log(`${bus[line].name} 요금 : ${bus[line].price * 0.7}원`)
}
else {
  window.console.log(`오류`)
}
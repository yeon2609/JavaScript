// "사용자로부터 지하철 노선 종류(정수 1 ~ 3)와 승객의 나이(정수), 탑승 구간(정수)을 입력받아,
// 아래 조건에 따라 최종 지하철 요금을 계산하여 출력하는 프로그램을 작성하세요
// 1 : 일반노선 - 1,250원
// 2 : 급행노선 - 2,000원
// 3 : 관광노선 - 3,000원
// 10구간 이하 : 추가요금 없음
// 11구간 이상 : 구간당 100원씩 추가(예 : 13구간 탑승 -> 3구간 추가 * 100원 = 300원)
// 어린이(7세 이하) : 무료
// 청소년(8세 ~ 18세) : 40% 할인
// 노인(65세 이상) : 무료
// 입력 : 1, 6, 8 -> 출력 : '요금 : 0원'
// 입력 : 2, 17, 12 -> 출력 : '요금 : 1,320원'
// 입력 : 3, 22, 15 -> 출력 : '요금 : 3,500원'
// 입력 : 1, 70, 5 -> 출력 : '요금 : 0원'"

const subway = [
  {name : '일반노선', price : 1250},
  {name : '급행노선', price : 2000},
  {name : '관광노선', price : 3000}
];

const line = +window.prompt("지하철 노선 종류 : ") - 1
const age = +window.prompt("승객의 나이 : ")
const section = +window.prompt("탑승 구간 : ")

if (age >= 65 || age <= 7) {
  window.console.log("무료")
}
else if (age >= 8 && age <= 18) {
  if (section >= 11) {
    window.console.log(`요금 : ${(subway[line].price * 0.6) + ((section - 10) * 100)}원`)
  }
  else {
    window.console.log(`요금 : ${subway[line].price * 0.6}원`)
  }
}
else {
  window.console.log(`오류`)
}




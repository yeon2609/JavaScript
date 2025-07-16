// 1. 각도의 비밀을 밝혀라! (0 ~ 180도까지)
// "사용자로부터 각도(정수, 단위:도)를 입력받아
// 0보다 크고 90보다 작으면 '예각'
// 90이면 '직각'
// 90보다 크고 180보다 작으면 '둔각'
// 180이면 '평각'"
// const num = +window.prompt("각도 : ")
// if (num > 0 && num < 90) {
//   window.console.log("예각")
// }
// else if (num == 90) {
//   window.console.log("직각")
// }
// else if (num > 90 && num < 180) {
//   window.console.log("둔각")
// }
// else {
//   window.console.log("평각")
// }


// 2. 점수에 따른 등급과 피드백!
// "국어, 영어, 수학 점수를 입력받아(정수, 0 ~ 100), 세 과목의 평균 점수에 따라
// 90점 이상이면 'A등급'
// 80점 이상 90점 미만이면 'B등급'
// 80점 미만이면 'C등급'을 출력하세요
// 또한, 한 과목이라도 100점이면 'Good', 60점 이하인 과목이 있으면 'Bad'도 각각 출력"
// const kor = +window.prompt("국어 점수 : ")
// const eng = +window.prompt("영어 점수 : ")
// const math = +window.prompt("수학 점수 : ")
// const avg = (kor + eng + math) / 3
// const good = kor == 100 || eng == 100 || math == 100
// const bad = kor <= 60 || eng <= 60 || math <= 60

// if (avg >= 90) {
//   window.console.log("A등급")
// }
// else if (avg >= 80) {
//   window.console.log("B등급")
// }
// else {
//   window.console.log("C등급")
// }

// if (good) {
//   window.console.log("Good")
// }
// if (bad) {
//   window.console.log("Bad")
// }


// 3. 음료 자판기 시뮬레이션(음료 개수 포함)
// "사용자로부터 음료의 종류(정수 1 ~ 3), 구매할 음료 개수(양의 정수), 투입한 금액(양의 정수, 단위 : 원)을 입력받아, 아래 조건에 따라 동작하는 프로그램을 if조건문을 사용하여 작성하세요.
// 1 : 아메리카노(3,000원)
// 2 : 레몬에이드(4,000원)
// 3 : 카페라떼(3,500원)
// 구매할 음료 개수에 따라 총 가격을 계산하고, 투입한 금액에서 총 가격을 뺀 잔돈을 출력하세요.
// (단, 총 금액이 투입한 금액보다 크면 '잔액이 부족합니다'를 출력)
// 입력 : 2, 2, 10,000 -> 출력 : '레몬에이드 2개, 잔돈 2,000원'
// 입력 : 1, 3, 7,000 -> 출력 : '잔액이 부족합니다.'"
const type = +window.prompt("음료 종류 : 1. 아메리카노 2.레몬에이드 3.카페라떼")
const count = +window.prompt("음료 개수 : ")
const money = +window.prompt("투입 금액 : ")
const americano_price = 3000 * count;
const lemonade_price = 4000 * count;
const latte_price = 3500 * count;

if (type == 1) {
  // 아메리카노
  if (money >= americano_price) {
    window.console.log(`아메리카노 ${count}개, 잔돈 ${money - americano_price}원`);
  }
  else {
    window.console.log(`잔액이 부족합니다`);
  }
}
else if (type == 2) {
  // 레몬에이드
  if (money >= lemonade_price) {
    window.console.log(`레몬에이드 ${count}개, 잔돈 ${money - lemonade_price}원`);
  }
  else {
    window.console.log(`잔액이 부족합니다`);
  } 
}
else if (type == 3) {
  // 카페라떼
  if (money >= latte_price) {
    window.console.log(`카페라떼 ${count}개, 잔돈 ${money - latte_price}원`);
  }
  else {
    window.console.log(`잔액이 부족합니다`);
  }
}
else {
  window.console.log(`에러`);
}
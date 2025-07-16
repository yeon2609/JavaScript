// 유저에게 영어점수를 입력받고
// 90점 이상이면 -> A
// 80점 이상이면 -> B
// 70점 이상이면 -> C
// 60점 이상이면 -> D
// 그 외는 -> F

const eng = +window.prompt("영어점수 : ")
if(eng >= 90) {
  window.console.log("A")
}
else if(eng >= 80) {
  window.console.log("B")
}
else if(eng >= 70) {
  window.console.log("C")
}
else if(eng >= 60) {
  window.console.log("D")
}
else {
  window.console.log("F")
}


// 정수를 하나 주시면, '양의 홀수', '양의 짝수', '음의 홀수', '음의 짝수'
// 또는 0을 콘솔로 출력
const num = +window.prompt("정수 입력 : ")
if(num > 0 && num % 2 == 1) {
  window.console.log("양의 홀수")
}
else if(num > 0 && num % 2 == 0) {
  window.console.log("양의 짝수")
}
else if(num == 0) {
  window.console.log("0")
}
else if(num < 0 && num % 2 == -1) {
  window.console.log("음의 홀수")
}
else {
  window.console.log("음의 짝수")
}

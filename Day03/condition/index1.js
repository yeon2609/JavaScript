const num = +window.prompt("정수 입력 : ")

if(num > 0) {
  window.console.log(`${num}은 양수입니다.`)
}
else if (num == 0){
  window.console.log(`${num}은 0입니다.`)
}
else {
  window.console.log(`${num}은 음수입니다.`)
}
window.console.log("프로그램 끝!")
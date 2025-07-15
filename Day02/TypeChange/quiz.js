// 유저에게 첫번째 숫자와 두번째 숫자를 각각 입력받고 
// 알럿으로 첫번째 숫자 + 두번째 숫자 = 결과
const num1 = Number(window.prompt("첫번째 숫자 : "))
const num2 = Number(window.prompt("두번째 숫자 : "))
window.alert(`첫번째숫자 ${num1} + 두번째숫자 ${num2} = 결과 : ${num1 + num2}`)

// 유저에게 나이를 입력받고
// 알럿으로 귀하의 태어난 년도는 ~~년도 입니다!
const age = Number(prompt("나이는?"))
const year = 2025 - age - 1
window.alert(`귀하의 태어난 년도는 ${year}년도 입니다!`)
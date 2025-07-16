// 1. 유저에게 한 변의 길이를 입력 받고, 정사각형의 넓이를 콘솔로 나타내기
// 결과) 한 변의 길이 ${}인 정사각형의 넓이:{}

// 2. 유저에게 밑변과 높이를 입력 받고, 정삼각형의 넓이를 콘솔로 나타내기
// 결과) 밑변 ${}과 높이 ${}인 삼각형의 넓이:{}

// 3. 유저에게 일본여행 갈겸, 원화를 입력 받고 엔화로 콘솔로 나타내기
// 결과) 1000000원은 ~~엔 입니다!

// 4. 유저에게 신상과 몸무게를 입력받고 BMI 지수로 콘솔로 나타내기
// 결과) 키: ~~ 몸무게: ~~ BMI: ~~ 

// 5. 유저에게 몇분을 입력받고 몇초인지 콘솔로 나타내기
// 결과) 분: ~~ 초: ~~

// 1
const side = window.prompt("한 변의 길이 : ")
window.console.log(`한 변의 길이 ${side}인 정사각형의 넓이:${side*side}`)

// 2
const bottom = window.prompt("밑변 : ")
const height = window.prompt("높이 : ")
window.console.log(`밑변 ${bottom}과 높이 ${height}인 삼각형의 넓이:${(bottom*height)/2}`)

// 3
const won = window.prompt("원화 : ")
window.console.log(`${won}원은 ${won*9.33}엔 입니다!`)

// 4
const height1 = window.prompt("키 : ")
const weight = window.prompt("몸무게 : ")
window.console.log(`키:${height1} 몸무게:${weight} BMI:${weight/(height1*height1)}`)

// 5
const min = window.prompt("몇분 : ")
window.console.log(`분:${min} 초:${min*60}`)
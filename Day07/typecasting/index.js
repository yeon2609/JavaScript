// String : String(), ""+
// Number : Number(), ParseInt(), PerseFloat(), 산술연산
// Boolean : Boolean(), !, 비교연산

// 1. 문자에서 배열로 바꾸기
// -1) split 함수 사용하기 "apple watch".split("")
// -2) 스프레드(...) 연산자 [..."apple watch"]

// 2. 배열에서 문자로 바꾸기
// -1) join()


// quiz
// 유저에게 영단어를 입력 받고 a, e, i는 대문자로 바꾸고 아니면 그대로 해서 콘솔로 나타내기
// apple -> ApplE
// banana -> bAnAnA
const eng = window.prompt("영단어 입력");
[...eng].map((x) => x == 'a' || x == 'e' || x == 'i' ? x.toUpperCase() : x).join("")
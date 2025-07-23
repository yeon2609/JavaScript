// 1. 숫자 배열 제곱 값 구하기
// before : [1, 2, 3, 4]
// after : [1, 4, 9, 16]
const quiz1 = (x) => {
    return x ** 2;
};

const result1 = [1, 2, 3, 4].map(quiz1);
window.console.log(result1);

// 2. 이름 배열 대문자로 변환하기
// before : ['hong', 'kim', 'lee']
// after : ['HONG', 'KIM', 'LEE']
const quiz2 = (x) => {
    return x.toUpperCase();
};

const result2 = ['hong', 'kim', 'lee'].map(quiz2);
window.console.log(result2);

// 3. 점수 배열에 60점 미만 기준으로 합격 / 불합격 여부 표시하기
// before : [85, 42, 77] 60점 미만
// after : ['합격', '불합격', '합격']
const quiz3 = (x) => {
    return x < 60 ? '불합격' : '합격';
};

const result3 = [85, 42, 77].map(quiz3);
window.console.log(result3)

// 4. 상품 할인 가격 20% 배열 만들기
// before : [10000, 20000, 15000]
// after : [8000, 16000, 12000]
const quiz4 = (x) => {
    return x * 0.8;
};

const result4 = [10000, 20000, 15000].map(quiz4);
window.console.log(result4)

// 5. 학생 객체 배열에서 이름만 추출하기
// before : [{name : '홍길동', age : 16}, {name : '김철수', age : 17}]
// after : ['홍길동', '김철수']
const quiz5 = (x) => {
    return x.name;
};

const result5 = [{name : '홍길동', age : 16}, {name : '김철수', age : 17}].map(quiz5);
window.console.log(result5);
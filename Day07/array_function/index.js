// const fn1 = (x) => x * 2;
// const fn2 = (x) => x ** 10;
// const fn3 = (x) => (x > 5 ? 1 : 2);
// const fn4 = (x) => (x % 2 ? '홀수' : '짝수');

// const arr = [1, 2, 3, 4, 5].map((x) => x * 2);


// filter : 안에 있는 요소들 걸러내기
// -true 남기고 false 없앤다.
// const b1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((x) => x <= 5);

// // 1. 4의 배수만 살리기
// const quiz1 = [2, 4, 6, 8, 10];

// const arr1 = quiz1.filter((x) => x % 4 == 0);

// // 2. 알파벳 a가 포함한 과일만 살리기
// const quiz2 = ['apple', 'mango', 'grape', 'kiwi']

// const arr2 = quiz2.filter((x) => x.includes('a'));

// // 3. 장르가 로맨스 인건만 살리기!
// const quiz3 = [{name : '더글로리', genre : ['범죄', '사회고발', '피카레스크']},
// {name : '오징어게임', genre : ['범죄', '스릴러', '블랙코미디']},
// {name : '폭삭 속았수다', genre : ['로맨스', '드라마', '휴먼']}]

// const arr3 = quiz3.filter((x) => x.genre.includes('로맨스'));


// some / every
// 요소 중에 해당 조건인 것이 하나 있니?
// 모든 요소가 해당 조건에 모두(&&) 만족하니?
const a = [1, 2, 3, 4, 5].some((X) => x == 5); // true
const b = [1, 2, 3, 4, 5].every((x) => x == 5); // 모두 5가 아니므로 false
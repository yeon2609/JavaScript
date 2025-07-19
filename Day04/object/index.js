// object 타입
// key-value
// key는 중복 안됨 - 문자, 숫자
// value는 중복 됨 - 아무타입 가능
const americano = {
  name : '아메리카노',
  price : 2000,
  isIce : true,
  hasShot : true,
};

// dot 연산자
window.console.log(americano.name); // 아메리카노
window.console.log(americano.price); // 2000
window.console.log(americano.hasShot); // true

// bracket[] 연산자
// window.console.log(americano[name]); // 아메리카노
// window.console.log(americano[price]); // 2000
// window.console.log(americano[hasShot]); // true


// 1. 보드게임 오브젝트 타입 변수 만들기
// 이름은 할리갈리, 플레이어수 4명, 소요시간 10분
const bord = {
  name : 'HalliGalli',
  players : 4,
  time : 10
};

// 2. 회원 오브젝트 타입 변수 만들기 
// 회원이름, 나이, 시력 왼쪽, 오른쪽
const member = {
  name : '김다연',
  age : 31.,
  eyesight_left : 0.5,
  eyesight_right : 0.8
};

// 없는 key를 요청하면 undefined 나옴
window.console.log(member.membername) // undefined

member.living = '김포';
window.console.log(member.living); // 김포
member.living = '파주'; // 파주로 바뀜
window.console.log(member.living);

// 삭제
delete member.living;
window.console.log(member.living); // undefined
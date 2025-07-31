// 0미만으로 마이너스 안되도록 막아주고 
// 10이상이면 num의 글씨 색상이 파란색으로 바뀌기
// 1 ~ 9이면 num의 글씨 색상이 검은색으로 바뀌기

const minus = document.querySelector('.minus');
const num = document.querySelector('.num');
const plus = document.querySelector('.plus');

minus.addEventListener('click', () => {
  if (+num.innerHTML <= 0) {
    num.innerHTML = 0;
  }
  else {
    num.innerHTML = +num.innerHTML - 1;
  }
  if (+num.innerHTML < 10) {
    num.style.color = 'black';
  }
  else {
    num.style.color = 'blue';
  }
})

plus.addEventListener('click', () => {
  if (+num.innerHTML < 9) {
    num.style.color = 'black';
  }
  else {
    num.style.color = 'blue';
  }
  num.innerHTML = +num.innerHTML + 1;
})

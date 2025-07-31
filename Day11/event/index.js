const button = document.querySelector('button');

// button.addEventListener('이벤트 종류', 무엇을)

button.addEventListener('click', () => {
  alert('ㅅㄱ');
});

// 추가버튼 클릭하면 새롭게 div태그로 아메리카노! 라고 적힌 요소가 생성됨!
const add = document.querySelector('.add');
add.addEventListener('click', () => {
  const div = document.createElement('div');
  div.innerHTML = '아메리카노!';
  document.body.appendChild(div);
})
// const btn = document.querySelector('.hi');

// btn.addEventListener('click', (x) => { // -> x는 이벤트 타입
//   // console.log(x);
//   // -> 네가 이벤트를 등록하면 click이 들어갔을 때, 그 이벤트에 대한 종류를 알려줄게 
  
//   // x.target == element
//   console.log(x.target); // <button class="hi">안녕하세요</button>
//   console.log(x.target.className); // hi
//   console.log(x.target.innerHTML); // 안녕하세요
// });

const span = document.querySelector('span');
const input = document.querySelector('input');
input.addEventListener('input', (x) => {
  // console.log(x.target.value); // text안에 적은 문자가 그대로 나옴
  span.innerHTML = x.target.value.length + '/10';
  span.style.color = x.target.value.length > 10 ? 'red' : 'black'; 
})

const button = document.querySelector('button');
button.addEventListener('click', (x) => {
  x.target.innerHTML = x.target.innerHTML == '😎' ? '😝' : '😎';
  input.type = input.type == 'text' ? 'password' : 'text';
})
const input = document.querySelector('input');
const button = document.querySelector('button');
const div = document.querySelector('div');

input.addEventListener('input', (x) => {
  div.style.color = x.target.value.length >= 6 && x.target.value.length <= 20 ? 'green' : 'red';

})

button.addEventListener('click', (x) => {
  input.type = input.type == 'text' ? 'password' : 'text';
})
const americano = document.querySelector('.americano');
const latte = document.querySelector('.latte');
const vanilla = document.querySelector('.vanilla');
const total = document.querySelector('.total');
const reset = document.querySelector('.reset');

americano.addEventListener('click', () => {
  total.innerHTML = '총 ' + (parseInt(total.innerHTML.split(' ')[1]) + 5000) + '원';
});

latte.addEventListener('click', () => {
  total.innerHTML = '총 ' + (parseInt(total.innerHTML.split(' ')[1]) + 6000) + '원';
});

vanilla.addEventListener('click', () => {
  total.innerHTML = '총 ' + (parseInt(total.innerHTML.split(' ')[1]) + 6500) + '원';
});

reset.addEventListener('click', () => {
  total.innerHTML = '총 0원';
})
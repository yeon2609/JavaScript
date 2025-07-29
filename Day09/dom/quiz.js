// 프롬프트로 유저에게 만들고 싶은 태그 묻고
// 태그의 배경색 묻고
// 태그의 컨텐츠(안의 내용) 묻고 난 후에
// HTML에 유저가 요구한 태그 만들기!

// const tag = prompt('만들고 싶은 태그는?');
// const bkcolor = prompt("배경색은?");
// const contends = prompt('내용은?');

// const quiz1 = document.createElement(tag);
// quiz1.innerHTML = contends;
// quiz1.style.backgroundColor = bkcolor;

// document.body.appendChild(quiz1);

// 유저에게 좋아하는 음식들 입력 받고
// 음식들을 각각 버튼 태그로 만들고
// 버튼 태그 색상은 순서대로 빨주노초파남보
// ex) apple kiwi banana mango grape watermelon melon orange

const food = prompt('좋아하는 음식들 입력').split(' ');
const color = ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple'];

food.forEach((x, i) => {
  const quiz2 = document.createElement('button');
  quiz2.innerHTML = x;
  quiz2.style.color = color[i % 7];
  document.body.appendChild(quiz2);
});





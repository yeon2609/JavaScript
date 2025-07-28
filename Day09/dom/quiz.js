// 프롬프트로 유저에게 만들고 싶은 태그 묻고
// 태그의 배경색 묻고
// 태그의 컨텐츠(안의 내용) 묻고 난 후에
// HTML에 유저가 요구한 태그 만들기!

// const tag = window.prompt('태그');
// const quiz1 = document.createElement(tag);
// const inner = window.prompt('내용');
// quiz1.innerHTML = inner;
// const backColor = window.prompt("배경색");
// quiz1.style.backgroundColor = backColor;
// document.body.appendChild(quiz1); 


// 유저에게 좋아하는 음식들 입력 받고
// 음식들을 각각 버튼 태그로 만들고
// 버튼 태그 색상은 순서대로 빨주노초파남보
// ex) apple kiwi banana mango grape watermelon melon orange
const food = prompt('음식');
const quiz2 = document.createElement(food);
quiz2.style.color = 'red';
document.body.appendChild(quiz2);




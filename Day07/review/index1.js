const starbucks = [
    {name : '아메리카노', price : 4500, shots : 2, ingredients : ['water', 'caffeine']},
    {name : '라떼', price : 5500, shots : 2, ingredients : ['water', 'milk', 'caffeine']},
    {name : '돌체라떼', price : 6500, shots : 3, ingredients : ['water', 'milk', 'caffeine', 'condensed milk']},
    {name : '바닐라 크림', price : 5500, shots : 2, ingredients : ['milk', 'caffeine', 'vanilla']},
    {name : '카페 모카', price : 6000, shots : 2, ingredients : ['water', 'caffeine', 'milk', 'chocolate']}
];

// 3. 저녁 타임 이벤트로 각 가격을 20% 할인해서 메뉴 전체 나타내기
const quiz = (x) => {
    x.price =  x.price * 0.8;
    return x;
};

const result = starbucks.map(quiz);
window.console.log(result);

// 4. 이름에 라떼가 있으면, 재고없음 이름 바꾸고 아니면 그대로 나타내기
const quiz1 = (x) => {
    if (x.name.includes('라떼')) {
        x.name = '재고없음'
        return x;
    }
    else {
        return x;
    }
};

const result1 = starbucks.map(quiz1);
window.console.log(result1)

// 5. caffeine -> decaffeine
const fn1 = (y) => {
    return y == "caffeine" ? "decaffeine" : y;
}

const quiz2 = (x) => {
    x.ingredients = x.ingredients.map(fn1);
    return x;
};

const result2 = starbucks.map(quiz2);
window.console.log(result2);
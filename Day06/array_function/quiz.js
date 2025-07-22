// 1. [3, 6, 9, 12, 15] 배열을 각각 요소를 두배하고 더하기 10해서 콘솔로 나타내기
const arrays = (x) => {
    return x * 2 + 10
}

const quiz = [3, 6, 9, 12, 15].map(arrays)
window.console.log(quiz)

// 2. [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 배열을 각각 요소에서 홀수면 두배, 짝수면 세배해서 결과를 콘솔로 나타내기
const arrays1 = (x) => {
    if (x % 2 == 1) {
        return x * 2
    }
    else {
        return x * 3
    }
}

const quiz1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(arrays1)
window.console.log(quiz1)

// 3. [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 배열을 각각 요소에서 5보다 작으면 1로, 크면 2로 해서 결과를 콘솔로 나타내기
const arrays2 = (x) => {
    if (x < 5) {
        return 1
    }
    else {
        return 2
    }
}

const quiz2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(arrays2)
window.console.log(quiz2)

// 4. [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 배열을 각각 요소에서 3의 배수면 "💛"로 아니면 "😋"로 해서 결과를 콘솔로 나타내기
// 이모지 쓰는 방법은 window키 + .[점]
const arrays3 = (x) => {
    if (x % 3 == 0) {
        return '💛'
    }
    else {
        return '😋'
    }
}

const quiz3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(arrays3)
window.console.log(quiz3)

// 5. ["apple", "mango", "juice", "kiwi", "strawberry"] 요소를 문자의 길이로 바꿔서 콘솔로 나타내기
// [5, 5, 5, 4, 10]
const arrays4 = (x) => {
    return x.length
}

const quiz4 = ["apple", "mango", "juice", "kiwi", "strawberry"].map(arrays4)
window.console.log(quiz4)
const coffe = "ice americano";

// 타입.함수(a, b) : boolean

coffe.length    // 역할 : 글자 갯수 돌려줌(함수 아님!) 
coffe.includes("ice")   // 역할 : 글자 포함 여부, 결과값 : boolean
coffe.repeat(3)         // 역할 : 글자 n번 반복, 결과값 : string
coffe.slice(0, 5)       // 역할 : 글자 0부터 4까지 돌려줌, 결과값 : string 
coffe.replace("i", "k") // 역할 : 글자 i를 k로 바꿔서 돌려줌, 결과값 : string
coffe.replaceAll("i", "k") // 역할 : 글자 i를 k로 모두 바꿔서 돌려줌, 결과값 : string
coffe.startsWith("e")   // 역할 : 글자 e로 시작하는지 물음, 결과값 : boolean
coffe.toUpperCase()     // 역할 : 대문자화, 결과값 : string
coffe.toLowerCase()     // 역할 : 소문자화, 결과값 : string
coffe.split("a")        // 역할 : a를 기준으로 짤라서 리스트 돌려줌, 결과값 : array 
// 참조 : Array, Object, Function, Date, Math

const a = new Date(); // a는 데이트 타입

window.console.log(a); // Mon Jul 28 2025 19:11:48 GMT+0900 (한국 표준시)
window.console.log(a.getDate()); // 28
window.console.log(a.toLocaleString()); // 현재 사는 지역 기준으로 날짜 나타내줌 // 2025. 7. 28. 오후 7:14:21
window.console.log(a.toLocaleDateString()); // 2025. 7. 28.
window.console.log(a.toLocaleTimeString()); // 오후 7:14:21


const b = Math.PI;
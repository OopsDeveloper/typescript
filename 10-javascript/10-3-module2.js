import * as calculator from './10-3-module1.js';
console.log(calculator.add(1, 2));
calculator.print();
calculator.number;


// default를 쓴 것은 {}를 안써도 되지만 그렇지 않은 것들은 꼭 {}를 써야한다.
// import { print } from './10-3-module1.js';
// 이름을 변경하고 싶으면 as라고 쓴다.
// import * as calculator from './10-3-module1.js'; 이 말은 export된 모든 아이들을 나는 calculator로 받아올거야 라는 뜻

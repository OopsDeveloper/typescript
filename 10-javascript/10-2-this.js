//자바스크립트 this는 호출한 사람의 문맥을 가리킨다.
console.log(this);

function simpleFunc() {
  console.log(this);
}
window.simpleFunc();
console.clear();
class Counter {
  count = 0;
  increase = () => {
    // console.log(this);
  };
}
const counter = new Counter();
counter.increase();
const caller = counter.increase;
//const caller = counter.increase.bind(counter);
caller();

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run();

// 정리: 걍 화살표함수 쓰기...

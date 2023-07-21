export function add(a, b) {
  return a + b;
}

export const number = 10;
export function print() {
  console.log('print');
}

// export default 를 쓰면 어떤 이름으로하든 상관안한다 의미
// 한 파일에서 두가지를 default를 쓸 수 없고 하나여야 된다.


// 정리: 모듈화를 하면 파일들간에 중복된 이름을 방지할 수 있고
// 서로 간의 코드를 분리함으로써 모듈성을 높여주고
// 모듈간에 재사용성도 높여준다.

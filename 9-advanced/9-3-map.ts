{
  // map type 중요!
  // 한번 정의해놓으면 재사용성이 좋다.
  // 기존에 타입에서 다른 타입으로 성질을 변환할 수 있다.
  type Video = {
    title: string;
    author: string;
  };
  // [1, 2].map(item => item * item); // [1, 4]

  type Optional<T> = {
    [P in keyof T]?: T[P]; // 타입안에서 []는 for...in 처럼 빙글빙글 돌 수 있다.
    // P in keyof T : P라는 것은 T가 가지고있는 key들 중에 하나
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };
  type VideoOptional = Optional<Video>;

  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    name: 'dog',
  };
  animal.name = 'ellie';

  const video: ReadOnly<Video> = {
    title: 'hi',
    author: 'ellie',
  };

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  // };

  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  // };

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: 'hi',
    author: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}

{
  // Utility Type : 한가지의 타입을 기본으로 해서 다른 종류의 타입으로 변환이 가능한 것

  // index type 중요!
  const obj = {
    name: 'ellie',
  };
  obj.name; // ellie
  obj['name']; // ellie

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name']; // Name의 타입은 string 타입이 된다.
  const text: Name = 'hello';

  type Gender = Animal['gender']; // Gender 타입은 'male' | 'female' 타입이 된다.

  type Keys = keyof Animal; // Keys 타입은 'name' | 'age' | 'gender' 타입이 된다.
  const key: Keys = 'gender'; // 3가지만 사용 가능

  type Person = {
    name: string;
    gender: Animal['gender'];
  };
  const person: Person = {
    name: 'ellie',
    gender: 'male',
  };
}

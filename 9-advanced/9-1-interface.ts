{
  type PositionType = {
    x: number;
    y: number;
  };
  interface PositionInterface {
    x: number;
    y: number;
  }

  // object ★
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    // z: 1,
  };

  // class ★
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }

  // 중복으로 PositionInterface를 만들면 그것을 구현해줘야됨.
  class Pos2 implements PositionInterface {
    x: number;
    y: number;
  }

  // Extends
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }
  type ZPositionType = PositionType & { z: number };

  // 😆 only interfaces can be merged.
  // interface PositionInterface {
  //   z: number;
  // }

  // type PositionType {
  // }

  // 😆 Type aliases can use computed properties
  type Person = {
    name: string;
    age: number;
  };
  type Name = Person['name']; // Name은 string 타입이 됨

  type NumberType = number;
  type Direction = 'left' | 'right'; // union 타입

  /*
    ‼ interface와 type alias 구별법
    특정한 규격을 정의해서 구현을 해야 된다면 => interface
    data를 담을 목적으로 하는 경우 => Type Alias
  */
}

{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 클래스를 만든다는 것은 관련된 속성과 함수들을 한곳에 묶어서 어떤 모양에 데이터가 될 거라는 것을 정의하는 것
  // 정의된 클래스를 이용해서 실제로 데이터를 넣어서 object를 만들 수 있다.
  // 이때 object마다 새로 만들어야 되는 변수가 있다면 맴버변수를 만들면되고
  // 클래스 레벨에서 해야되는 경우면 static으로 만든다.
  // static은 맴버변수뿐만 아니라 함수에서도 가능하다.
  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7; // class level: object마다 생성되지 않음
    coffeeBeans: number = 0; // instance (object) level

    // 클래스를 가지고 object, instance를 만들때 항상 호출되는 함수
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    //constructor를 호출하지 않고 새로운 커피기계를 만들고 싶다.
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32); // new CoffeeMaker는 생성자를 호출
  console.log(maker);
  const maker2 = new CoffeeMaker(14);
  console.log(maker2);

  const maker3 = CoffeeMaker.makeMachine(3);
}

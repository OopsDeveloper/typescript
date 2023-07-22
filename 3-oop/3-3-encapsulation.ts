{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public
  // private
  // protected
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // static을 이용해서 무언가 object를 만들 수 있는 함수를 제공한다면
    // 누군가가 생성자를 이용해서 생성하는 것을 금지하기 위해서 쓰는데
    // 생성자를 private로 둔다.
    // ex) CoffeMaker.makeMachine(32);
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
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

  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(32);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
      }
      this.internalAge = num;
    }
    constructor(private firstName: string, public lastName: string) {}
  }
  const user = new User('Steve', 'Jobs');
  user.age = 6;
  console.log(user.fullName);
}

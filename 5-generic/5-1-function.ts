{
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }

  // 타입이 안전하지 않음
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const result = checkNotNullAnyBad(123);

  // 어떤 타입이든지 다 받을 수 있고 이것을 코딩하는 시점에 타입을 결정함
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
}

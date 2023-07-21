{
    function add(num1: number, num2: number): number {
        return num1 + num2;
    }

    function fetchNum(id: string): Promise<number> {
        // code ...
        // code ...
        // code ...
        // @ts-ignore
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }

    function printName(firstName: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName);
    }
    printName('oops','dev');
    printName('oops');
    printName('dev');

    function printMessage(message: string = 'default message') {
        console.log(message);
    }
    printMessage();

    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a,b) => a+b);
    }

    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2, 3, 4));
    console.log(addNumbers(1, 2, 3, 4, 5, 0));

}
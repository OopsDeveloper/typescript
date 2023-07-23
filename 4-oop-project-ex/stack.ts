{
    // 쓰는 사람은 이 interface만 알고 의사소통하면 된다.
    // 조건: 언어 자체에서 제공하는 array를 쓰지 않는다.
    // 단일 연결 리스트 사용

    interface Stack {
        readonly size: number; // 값을 변경할 수 없고 내부적으로 결정되는 사이즈 = readonly 씀
        push(value: string): void;
        pop(): string;
    }

    type StackNode = {
        readonly value: string;
        readonly next?: StackNode; // StackNode | undefined 와 같다.
    }

    class StackImpl implements Stack {
        private _size: number = 0; // 내부에서 쓰는 것을 표현할 때 _붙인다.
        private head?: StackNode;

        constructor(private capacity: number) {}

        get size() {
            return this._size;
        }

        push(value: string): void {
            if (this.size === this.capacity) {
                throw new Error('Stack is full!');
            }
            const node: StackNode = {value, next: this.head};  // value: value 와 같다
            this.head = node;
            this._size++;
        }
        pop(): string { // 값으로 확인 시 같음: null == undefined, 타입체크시 다름: null !== undefined
            if (this.head == null) { // === undefined 은 null이 통과해버림
                throw new Error('Stack is empty!');
            }
            const node = this.head;
            this.head = node.next;
            this._size--;

            return node.value;
        }
    }
// 테스트 코드
    const stack = new StackImpl(10);
    stack.push('oops');
    stack.push('dev');

    while (stack.size !== 0) {
        console.log(stack.pop());
    }

    stack.pop();

}






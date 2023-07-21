{

    // 타입스크립트에서 많이 사용함

    type Direction = 'left' | 'right' | 'up' | 'down';

    function move(direction: Direction) {
        console.log(direction);
    }

    move('down');

    type TileSize = 8 | 16 | 32;
    const title: TileSize = 16;

    type SuccessState = {
        response: {
            body: string;
        };
    };

    type FailState = {
        reason: string;
    };

    type LoginState = SuccessState | FailState;

    function login(id : string, password: string): LoginState {
        return {
            response: {
                body: 'logged in!',
            },
        };
    };

    // : void는 생략 가능
    // 별루 좋지 않은 것
    function printLoginState(state: LoginState): void {
        if('response' in state) { // response라는게 state라는 object 안에 있다면
            console.log(`${state.response.body}`);
        } else {
            console.log(`${state.reason}`);
        }
    }
}
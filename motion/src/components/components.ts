export interface Component {
    attachTo(parent: HTMLElement, position?: InsertPosition): void;
    removeFrom(parent: HTMLElement): void;
}

/*
* Encapsulate the HTML element creation
*/

// 외부에서 상속하기 위해서는 export를 붙여야됨.
// BaseComponent로 의사소통하기보다는 interface로 의사소통하는게 좋다.
export class BaseComponent<T extends HTMLElement> implements Component{
    protected readonly element: T; // 요소 안에 상태들은 변경이 가능하지만 요소 자체가 변경되면 안된다.

    constructor(htmlString: string) {
        const template = document.createElement('template');
        template.innerHTML = htmlString
        this.element = template.content.firstElementChild! as T;
    }

    attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element);
    }

    removeFrom(parent: HTMLElement) {
        if (parent !== this.element.parentElement) {
            throw new Error('Parent mismatch!');
        }
        parent.removeChild(this.element);
    }
}
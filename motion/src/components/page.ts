export class PageComponent {
    private element: HTMLUListElement;
    constructor() {
        this.element = document.createElement('ul');
        this.element.setAttribute('class', 'page');
        this.element.textContent = 'This is PageComponent';
    }

    //외부에서 필요한 곳에 추가할 수 있게 만드는 메서드
    attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element);
    }
}
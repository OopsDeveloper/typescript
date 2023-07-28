import {BaseComponent, Component} from "./../components.js";

export interface Composable {
    addChild(child: Component): void;
}

type OnCloseListener = () => void;

interface SectionContainer extends Component, Composable {
    setOnCloseListener(listener: OnCloseListener): void;
}

type SectionContainerConstructor = {
    new (): SectionContainer; // 생성자를 정의
    // 생성자가 호출되면 SectionContainer 라는 interface 규격을 따라가는 어떤 class라도 이 타입에 맞음
}

//export class DarkPageItemComponent extends BaseComponent<HTMLElement> implements SectionContainer {}

// class PageItemComponent extends BaseComponent<HTMLElement> implements Composable
export class PageItemComponent extends BaseComponent<HTMLElement> implements SectionContainer {
    private closeListener?: OnCloseListener; // 외부로부터 전달받은 콜백함수를 저장하고 있음
    constructor() {
        super(`<li class="page-item">
                            <section class="page-item__body"></section>
                            <div class="page-item__controls">
                                <button class="close">&times;</button>
                            </div>
                        </li>`);
        const closeBtn = this.element.querySelector('.close')! as HTMLButtonElement;
        closeBtn.onclick = () => {
            console.log('close 버튼 클릭')
            this.closeListener && this.closeListener(); // closeListener가 있으면 closeListener()를 호출
        };

        // closeBtn.addEventListener('click', () => this.element.remove());
    }

    addChild(child: Component) {
        const container = this.element.querySelector('.page-item__body')! as HTMLElement;
        child.attachTo(container);
    }

    setOnCloseListener(listener: OnCloseListener) {
        console.log('setOnCloseListener에서 콜백함수 등록')
        this.closeListener = listener;
    }

}
export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable {
    // 생성자에 어떤 타입에 데이터를 만들 수 있는지 전달
    constructor(private pageItemConstructor: SectionContainerConstructor) {
        super('<ul class="page"></ul>')
    }
    // constructor() {
    //     super('<ul class="page"></ul>')
    // }

    addChild(section: Component) {
        // 한가지만 내부에서 설정하는 것은 나쁘다.
        // const item = new PageItemComponent(); // SectionContainer interface 만들기 전
        const item = new this.pageItemConstructor();
        item.addChild(section);
        item.attachTo(this.element, 'beforeend');
        item.setOnCloseListener(() => {
            console.log("삭제 호출함");
            item.removeFrom(this.element);
        });
    }
}


// export class PageComponent{
//     private element: HTMLUListElement;
//     constructor() {
//         this.element = document.createElement('ul');
//         this.element.setAttribute('class', 'page');
//         this.element.textContent = 'This is PageComponent';
//     }
//
//     //외부에서 필요한 곳에 추가할 수 있게 만드는 메서드
//     attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
//         parent.insertAdjacentElement(position, this.element);
//     }
// }
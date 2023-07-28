import {BaseComponent} from "./../../components.js";

export class ImageComponent extends BaseComponent<HTMLElement>{
    constructor(title: string, url: string) {
        super(`<section class="image">
                           <div class="image__holder"><img class="img__thumbnail"></div>
                            <h2 class="page-item__title image__title"></h2>
                        </section>`);

        const imageElement = this.element.querySelector('.img__thumbnail')! as HTMLImageElement;
        imageElement.src = url;
        imageElement.alt = title;

        const titleElement = this.element.querySelector('.image__title')! as HTMLParagraphElement;
        titleElement.textContent = title;
    }
}


// export class ImageComponent {
//     private element: HTMLElement;
//
//     constructor(title: string, url: string) {
//         // <template> 요소는 보이지 않지만 내부에 HTML 코드를 담을 수 있다.
//         // template 변수에는 HTML 코드가 들어있는 형태로 메모리에 저장되어 있다.
//         // <template> 요소는 기본적으로 보이지 않으며
//         // JavaScript에서 이를 활용하여 클라이언트 측에서 동적으로 콘텐츠를 만들 수 있다.
//         // 예를 들어, 이 템플릿을 복제하여 여러 번 사용하거나
//         // 조건에 따라 콘텐츠를 변경하는 등의 작업이 가능하다.
//         // 이후 JavaScript로 이 템플릿을 조작하여 페이지에 추가하거나 변경할 수 있습니다.
//         const template = document.createElement('template');
//         template.innerHTML = `<section class="image">
//             <div class="image__holder"><img class="img__thumbnail"></div>
//             <p class="image__title"></p>
//         </section>`;
//
//         // 작성하는 시점에 null이 아닌 것을 알 수 있으므로 타입 어썰션 사용
//         this.element = template.content.firstElementChild! as HTMLElement;
//
//         const imageElement = this.element.querySelector('.img__thumbnail')! as HTMLImageElement;
//         imageElement.src = url;
//         imageElement.alt = title;
//
//         const titleElement = this.element.querySelector('.image__title')! as HTMLParagraphElement;
//         titleElement.textContent = title;
//     }
//
//     attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
//         parent.insertAdjacentElement(position, this.element);
//     }
// }
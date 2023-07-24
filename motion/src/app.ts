import {PageComponent} from "./components/page.js";

class App {
    private readonly page: PageComponent;
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
    }
}

// 어플리케이션이 실행되면서 무언가가 변경되는것이 아니라
// 개발을 할 때 정해져 있기 때문에 as HTMLElement (타입어설션)을 씀
new App(document.querySelector('.document')! as HTMLElement);
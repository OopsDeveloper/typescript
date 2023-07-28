import {Composable, PageComponent, PageItemComponent} from "./components/page/page.js";
import {ImageComponent} from "./components/page/item/image.js";
import {NoteComponent} from "./components/page/item/note.js";
import {TodoComponent} from "./components/page/item/todo.js";
import {VideoComponent} from "./components/page/item/video.js";
import {Component} from "./components/components.js";

class App {
    private readonly page: Component & Composable; // Component이면서 Composable이 가능한 것
    constructor(appRoot: HTMLElement) {
        // this.page = new PageComponent();
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);

        const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
        this.page.addChild(image);

        const video = new VideoComponent('Video Title', 'https://www.youtu.be/K3-jG52XwuQ');
        this.page.addChild(video);

        const note = new NoteComponent('Note Title', 'Note Body');
        this.page.addChild(note);

        const todo = new TodoComponent('Todo Title', 'Todo Item');
        this.page.addChild(todo);

    }
}

// 어플리케이션이 실행되면서 무언가가 변경되는것이 아니라
// 개발을 할 때 정해져 있기 때문에 as HTMLElement (타입어설션)을 씀
new App(document.querySelector('.document')! as HTMLElement);


// class App {
//     private readonly page: PageComponent;
//     constructor(appRoot: HTMLElement) {
//         this.page = new PageComponent();
//         this.page.attachTo(appRoot);
//
//         const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
//         image.attachTo(appRoot, 'beforeend');
//
//         const video = new VideoComponent('Video Title', 'https://www.youtu.be/K3-jG52XwuQ');
//         video.attachTo(appRoot,'beforeend');
//
//         const note = new NoteComponent('Note Title', 'Note Body');
//         note.attachTo(appRoot, 'beforeend');
//
//         const todo = new TodoComponent('Todo Title', 'Todo Item');
//         todo.attachTo(appRoot,'beforeend');
//
//     }
// }



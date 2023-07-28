import {Composable, PageComponent, PageItemComponent} from "./components/page/page.js";
import {ImageComponent} from "./components/page/item/image.js";
import {NoteComponent} from "./components/page/item/note.js";
import {TodoComponent} from "./components/page/item/todo.js";
import {VideoComponent} from "./components/page/item/video.js";
import {Component} from "./components/components.js";
import {InputDialog, MediaData, TextData} from "./components/dialog/dialog.js";
import {MediaSectionInput} from "./components/dialog/input/media-input.js";
import {TextSectionInput} from "./components/dialog/input/text-input.js";

type InputComponentConstructor<T = (MediaData | TextData) & Component> = {
    new (): T;
}
class App {
    private readonly page: Component & Composable; // Component이면서 Composable이 가능한 것
    constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
        // this.page = new PageComponent();
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);

        this.bindElementToDialog<MediaSectionInput>(
            '#new-image',
            MediaSectionInput,
            (input: MediaSectionInput) => new ImageComponent(input.title, input.url));

        this.bindElementToDialog<MediaSectionInput>(
            '#new-video',
            MediaSectionInput,
            (input: MediaSectionInput) => new VideoComponent(input.title, input.url));

        this.bindElementToDialog<TextSectionInput>(
            '#new-note',
            TextSectionInput,
            (input: TextSectionInput) => new NoteComponent(input.title, input.body));

        this.bindElementToDialog<TextSectionInput>(
            '#new-todo',
            TextSectionInput,
            (input: TextSectionInput) => new TodoComponent(input.title, input.body));




/*
        const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
        this.page.addChild(image);

        const video = new VideoComponent('Video Title', 'https://www.youtu.be/K3-jG52XwuQ');
        this.page.addChild(video);

        const note = new NoteComponent('Note Title', 'Note Body');
        this.page.addChild(note);

        const todo = new TodoComponent('Todo Title', 'Todo Item');
        this.page.addChild(todo);
*/

       /*
       const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;
        imageBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const inputSection = new MediaSectionInput();
            dialog.addChild(inputSection);
            dialog.attachTo(dialogRoot);

            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitCloseListener(() => {
                // 섹션을 만들어서 페이지에 추가 해준다.
                const image = new ImageComponent(inputSection.title, inputSection.url);
                this.page.addChild(image);
                dialog.removeFrom(dialogRoot);
            });
        });

        const videoBtn = document.querySelector('#new-video')! as HTMLButtonElement;
        videoBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const inputSection = new MediaSectionInput();
            dialog.addChild(inputSection);
            dialog.attachTo(dialogRoot);

            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitCloseListener(() => {
                // 섹션을 만들어서 페이지에 추가 해준다.
                const image = new VideoComponent(inputSection.title, inputSection.url);
                this.page.addChild(image);
                dialog.removeFrom(dialogRoot);
            });
        });

        const noteBtn = document.querySelector('#new-note')! as HTMLButtonElement;
        noteBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const inputSection = new TextSectionInput();
            dialog.addChild(inputSection);
            dialog.attachTo(dialogRoot);

            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitCloseListener(() => {
                // 섹션을 만들어서 페이지에 추가 해준다.
                const image = new NoteComponent(inputSection.title, inputSection.body);
                this.page.addChild(image);
                dialog.removeFrom(dialogRoot);
            });
        });

        const todoBtn = document.querySelector('#new-todo')! as HTMLButtonElement;
        todoBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const inputSection = new TextSectionInput();
            dialog.addChild(inputSection);
            dialog.attachTo(dialogRoot);

            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitCloseListener(() => {
                // 섹션을 만들어서 페이지에 추가 해준다.
                const image = new TodoComponent(inputSection.title, inputSection.body);
                this.page.addChild(image);
                dialog.removeFrom(dialogRoot);
            });
        });
*/
    }

    private bindElementToDialog<T extends (MediaData | TextData) & Component>(
        selector: string,
        InputComponent: InputComponentConstructor<T>,
        makeSection: (input:T) => Component
    ) {
        const element = document.querySelector(selector)! as HTMLButtonElement;
        element.addEventListener('click', () => {
            const dialog = new InputDialog();
            const input = new InputComponent();
            dialog.addChild(input);
            dialog.attachTo(this.dialogRoot);

            dialog.setOnCloseListener(() => {
                dialog.removeFrom(this.dialogRoot);
            });
            dialog.setOnSubmitCloseListener(() => {
                // 섹션을 만들어서 페이지에 추가 해준다.
                const image = makeSection(input);
                this.page.addChild(image);
                dialog.removeFrom(this.dialogRoot);
            });
        });
    }
}

// 어플리케이션이 실행되면서 무언가가 변경되는것이 아니라
// 개발을 할 때 정해져 있기 때문에 as HTMLElement (타입어설션)을 씀
new App(document.querySelector('.document')! as HTMLElement, document.body);


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



import {BaseComponent} from "./../../components.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
    constructor(title: string, url: string) {
        super(`<section class="video">
                           <div class="video__player"><iframe class="video__iframe"></iframe></div>
                           <h3 class="page-item__title video__title"></h3>
                        </section>`);

        const iframe = this.element.querySelector('.video__iframe')! as HTMLIFrameElement;
        console.log(url);

        iframe.src = this.convertToEmbeddedURL(url);

        const titleElement = this.element.querySelector('.video__title')! as HTMLHeadingElement;
        titleElement.textContent = title;
    }

    // url -> videoId -> embed
    // input
    // https://www.youtube.com/watch?v=K3-jG52XwuQ
    // https://www.youtu.be/K3-jG52XwuQ
    // output
    // https://www.youtube.com/embed/K3-jG52XwuQ
    // 정규표현식 Regex 이용(필수!)
    // https://regexr.com/5l6nr
    private convertToEmbeddedURL(url: string): string {
        const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
        const match = url.match(regExp);

        const videoId = match? match[1] || match[2] : undefined;
        if (videoId) {
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return url;
    }
}


// <iframe
//     width="1280"
// height="720"
// src="https://www.youtube.com/embed/K3-jG52XwuQ"
// title="10 시간의 잔잔한 수면음악, 잔잔한 빗소리, 스트레스 해소음악, 불면증 치료"
// frameborder="0"
// allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
// allowfullscreen>
// </iframe>
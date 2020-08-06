import { r as registerInstance, h } from './index-21c05bc9.js';

const faqBlockComponentCss = "snt-faq-block .faq-block-wrapper{width:260px;height:199px;padding:20px 20px;box-shadow:0 2px 10px #e5e5e5;box-sizing:border-box;position:relative}snt-faq-block h3{text-align:center;color:#323232}snt-faq-block .faq-block-body,snt-faq-block .faq-articles-count{width:100%;color:#323232;font-family:Averta;font-size:14px;line-height:23px;text-align:center;margin-top:19px}snt-faq-block .faq-articles-count{position:absolute;bottom:20px;left:0px}snt-faq-block a{display:inline-block}snt-faq-block a:focus,snt-faq-block a:active,snt-faq-block a:hover{border:none;outline:none;text-decoration:none}snt-faq-block a:focus .faq-block-wrapper,snt-faq-block a:active .faq-block-wrapper,snt-faq-block a:hover .faq-block-wrapper{background-color:#147582}snt-faq-block a:focus .faq-block-body,snt-faq-block a:focus .faq-articles-count,snt-faq-block a:focus h3,snt-faq-block a:active .faq-block-body,snt-faq-block a:active .faq-articles-count,snt-faq-block a:active h3,snt-faq-block a:hover .faq-block-body,snt-faq-block a:hover .faq-articles-count,snt-faq-block a:hover h3{color:#ffffff}snt-faq-block[viewport=medium] .faq-block-wrapper{width:334px;height:213px;padding:40px 20px;box-shadow:0 2px 10px #e5e5e5}snt-faq-block[viewport=medium] .faq-block-body,snt-faq-block[viewport=medium] .faq-articles-count{margin-top:20px}snt-faq-block[viewport=medium] .faq-articles-count{position:absolute;left:0px;bottom:40px}snt-faq-block[viewport=large] .faq-block-wrapper{width:274px;height:310px;padding:60px 30px;box-shadow:0 2px 10px #e5e5e5}snt-faq-block[viewport=large] .faq-block-body,snt-faq-block[viewport=large] .faq-articles-count{font-size:16px;line-height:26px}snt-faq-block[viewport=large] .faq-block-body{margin-top:22px}snt-faq-block[viewport=large] .faq-articles-count{margin-top:30px;position:absolute;left:0px;bottom:60px}snt-faq-block[viewport=extra-large] .faq-block-wrapper{width:370px;height:292px;padding:60px 30px;box-shadow:0 2px 10px #e5e5e5}snt-faq-block[viewport=extra-large] .faq-block-body,snt-faq-block[viewport=extra-large] .faq-articles-count{font-size:16px;line-height:26px;margin-top:30px}snt-faq-block[viewport=extra-large] .faq-articles-count{position:absolute;left:0px;bottom:60px}";

const FAQBlockComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.titleText = "";
        this.bodyText = "";
        this.articlesCount = "";
        this.blockLink = "";
    }
    render() {
        return [
            h("a", { href: this.blockLink, target: "_blank" }, h("div", { class: "faq-block-wrapper" }, h("h3", null, this.titleText), h("div", { class: "faq-block-body" }, this.bodyText), h("div", { class: "faq-articles-count" }, this.articlesCount)))
        ];
    }
};
FAQBlockComponent.TAG_NAME = "snt-faq-block";
FAQBlockComponent.style = faqBlockComponentCss;

export { FAQBlockComponent as snt_faq_block };

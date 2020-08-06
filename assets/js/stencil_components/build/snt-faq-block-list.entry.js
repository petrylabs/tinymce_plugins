import { r as registerInstance, h, g as getElement } from './index-21c05bc9.js';

const faqBlockListComponentCss = "snt-faq-block-list .faq-grid-container{display:grid;grid-template-columns:260px;gap:26px;padding:0px}snt-faq-block-list snt-layout[viewport=medium] .faq-grid-container{grid-template-columns:334px 334px}snt-faq-block-list snt-layout[viewport=large] .faq-grid-container{grid-template-columns:274px 274px 274px;gap:30px}snt-faq-block-list snt-layout[viewport=extra-large] .faq-grid-container{grid-template-columns:370px 370px 370px;gap:30px}";

const FAQBlockListComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.faqBlockList = [];
        this.menuAriaLabel = "";
    }
    componentDidRender() {
        this.faqBlockHTMLItems = this.host.querySelectorAll('div.faq-grid-item-container');
    }
    onResize(event) {
        const viewport = event.detail.viewport;
        this.faqBlockHTMLItems.forEach(el => {
            el.firstElementChild.setAttribute('viewport', viewport);
        });
    }
    render() {
        return [
            h("snt-layout", null, h("nav", { class: "faq-grid-container", "aria-label": this.menuAriaLabel }, this.faqBlockList.map(item => (h("div", { class: "faq-grid-item-container" }, h("snt-faq-block", { "title-text": item.titleText, "body-text": item.bodyText, "articles-count": item.articlesCount }))))))
        ];
    }
    get host() { return getElement(this); }
};
FAQBlockListComponent.TAG_NAME = "snt-faq-block-list";
FAQBlockListComponent.style = faqBlockListComponentCss;

export { FAQBlockListComponent as snt_faq_block_list };

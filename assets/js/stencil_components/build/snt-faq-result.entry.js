import { r as registerInstance, h } from './index-21c05bc9.js';

const faqResultComponentCss = "snt-faq-result .faq-result-wrapper{margin-bottom:26px}@media (min-width: 1024px){snt-faq-result .faq-result-wrapper{margin-bottom:30px}}snt-faq-result .faq-result-wrapper .answer{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}@media (min-width: 768px){snt-faq-result .faq-result-wrapper .answer{-webkit-line-clamp:1}}snt-faq-result snt-link{display:block;margin-bottom:5px}snt-faq-result snt-link h4{display:inline}";

const FAQResultComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "faq-result-wrapper" }, h("snt-link", { "class-names": "theme-link theme-action", href: this.faqResult.faqUrl }, h("h4", { class: "link-content", innerHTML: this.faqResult.question })), h("p", { class: "answer", innerHTML: this.faqResult.answer })));
    }
};
FAQResultComponent.style = faqResultComponentCss;

export { FAQResultComponent as snt_faq_result };

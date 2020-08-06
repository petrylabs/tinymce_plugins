import { r as registerInstance, h } from './index-21c05bc9.js';
import { S as StringUtils } from './StringUtils-617c552f.js';

const faqResultListComponentCss = "snt-faq-result-list .faq-result-list-wrapper snt-layout .spacings{padding:2.5em 1.875em}@media (min-width: 768px){snt-faq-result-list .faq-result-list-wrapper snt-layout .spacings{padding:2.5em 2.313em}}@media (min-width: 1024px){snt-faq-result-list .faq-result-list-wrapper snt-layout .spacings{padding:3.75em 4.438em}}@media (min-width: 1440px){snt-faq-result-list .faq-result-list-wrapper snt-layout .spacings{padding:3.75em 8.438em}}";

const FAQResultListComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.faqResultList = [];
        this.faqResultListJson = StringUtils.empty();
        this.noResultMsg = "No results found";
    }
    render() {
        var content;
        if (StringUtils.hasValue(this.faqResultListJson)) {
            this.faqResultList = JSON.parse(this.faqResultListJson);
            content = (h("div", { class: "faq-result-list-wrapper" }, h("snt-layout", null, this.faqResultList.map(faq => (h("snt-faq-result", { faqResult: faq }))))));
        }
        else {
            content = (h("h4", null, this.noResultMsg));
        }
        return (content);
    }
};
FAQResultListComponent.style = faqResultListComponentCss;

export { FAQResultListComponent as snt_faq_result_list };

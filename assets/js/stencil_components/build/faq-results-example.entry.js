import { r as registerInstance, h } from './index-21c05bc9.js';

const FAQResultsExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        var faqResultListJSON = `[
            {\"question\":\"Question 1?\",\"answer\":\"This is answer 1\",\"faqUrl\":\"https:\/\/www.sonnet.ca\"},
            {\"question\":\"Question 2?\",\"answer\":\"This is answer 2\",\"faqUrl\":\"https:\/\/www.sonnet.ca\"},
            {\"question\":\"Question 3?\",\"answer\":\"This is answer 3\",\"faqUrl\":\"https:\/\/www.sonnet.ca\"},
            {\"question\":\"Question 4?\",\"answer\":\"This is answer 4\",\"faqUrl\":\"https:\/\/www.sonnet.ca\"},
            {\"question\":\"Question 5?\",\"answer\":\"This is answer 5\",\"faqUrl\":\"https:\/\/www.sonnet.ca\"}
        ]`;
        return [
            h("h3", null, "'FAQ results' with JSON string"),
            h("snt-faq-result-list", { faqResultListJson: faqResultListJSON })
        ];
    }
};

export { FAQResultsExample as faq_results_example };

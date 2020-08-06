import { r as registerInstance, h, g as getElement } from './index-21c05bc9.js';

const TreeviewExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const treeString = `
            {"items": [{"key": "quoting","title": "Quoting","description": "Step-by-step help and troubleshooting tips for home and auto quotes","identifier": "69e48e00-e601-4ba3-919c-6d3aacf89bae","languageId": "1","url": "quoting","items": [{"key": "all","title": "All","languageId": "1","url": "quoting"},{"key": "propertyInsurance","title": "Home","languageId": "1","url": "quoting"}, {"key": "autoInsurance","title": "Auto","languageId": "1","url": "quoting"}, {"key": "other","title": "Other","languageId": "1","url": "quoting"}]}, {"key": "purchasing","title": "Purchasing","description": "Buying your policy, from start to finish","identifier": "e39f6f41-014d-4663-8302-2bcec52b6556","languageId": "1","url": "purchasing","items": []}, {"key": "account","title": "Account","description": "Set up, log in and navigate your account","identifier": "e8f40aa7-601c-4ffa-8239-82406735d56e","languageId": "1","url": "account","items": []}, {"key": "policyCoverages","title": "Policy & Coverages","description": "Learn about documents, what we do and don’t cover and how to make changes","identifier": "0ee73a56-b00f-4e49-9a7e-a7bad7d61645","languageId": "1","url": "policy-and-coverages","items": [{"key": "all","title": "All","languageId": "1","url": "policy-and-coverages"},{"key": "propertyInsurance","title": "Home","languageId": "1","url": "policy-and-coverages"}, {"key": "autoInsurance","title": "Auto","languageId": "1","url": "policy-and-coverages"}, {"key": "other","title": "Other","languageId": "1","url": "policy-and-coverages"}]}, {"key": "payments","title": "Payments","description": "How to pay, when to pay and what to do if you miss a payment","identifier": "72d05d42-c2a9-4a6d-b92b-d60a709e57ac","languageId": "1","url": "payments","items": []}, {"key": "claims1","title": "Claims","description": "What you’re covered for and what to do before, during and after a claim","identifier": "d8010624-e1a8-40f2-92ca-07b6ac4e8862","languageId": "1","url": "claims","items": [{"key": "all","title": "All","languageId": "1","url": "claims"},{"key": "propertyInsurance","title": "Home","languageId": "1","url": "claims"}, {"key": "autoInsurance","title": "Auto","languageId": "1","url": "claims"}, {"key": "other","title": "Other","languageId": "1","url": "claims"}]}, {"key": "renewalCancellation","title": "Renewal & Cancellation","description": "Our renewal process, your premium and other details you need to know","identifier": "f9c94e12-acce-4495-9573-b0e4459e9195","languageId": "1","url": "renewal-and-cancellation","items": []}, {"key": "groupInsurance","title": "Group Insurance","description": "Find out if you qualify for a group discount and how to add one if you do","identifier": "99eac704-71f9-4db5-bf04-ae8090ccd249","languageId": "1","url": "group-insurance","items": [{"key": "all","title": "All","languageId": "1","url": "group-insurance"},{"key": "propertyInsurance","title": "Home","languageId": "1","url": "group-insurance"}, {"key": "autoInsurance","title": "Auto","languageId": "1","url": "group-insurance"}]}, {"key": "otherInquiries","title": "Other Inquiries","description": "Compliments and complaints, questions about fraud and more","identifier": "714337c1-8832-442b-a0bf-1af355c95ee0","languageId": "1","url": "other-inquiries","items": []}, {}]}
        `;
        var faqResultListJSON = `[
            {\"question\":\"Question 1?\",\"answer\":\"This is answer 1\",\"href\":\"https:\/\/www.sonnet.ca\"},
            {\"question\":\"Question 2?\",\"answer\":\"This is answer 2\",\"href\":\"https:\/\/www.sonnet.ca\"},
            {\"question\":\"Question 3?\",\"answer\":\"This is answer 3\",\"faqUrl\":\"https:\/\/www.sonnet.ca\"},
            {\"question\":\"Question 4?\",\"answer\":\"This is answer 4\",\"faqUrl\":\"https:\/\/www.sonnet.ca\"},
            {\"question\":\"Question 5?\",\"answer\":\"This is answer 5\",\"faqUrl\":\"https:\/\/www.sonnet.ca\"}
        ]`;
        return [
            h("div", { class: "wrapper" }, h("div", null, h("a", { href: "javascript:void(0)", title: "test" }, "First"), h("br", null), h("br", null), h("snt-treeview", { id: "categories", structure: treeString }), h("br", null), h("br", null), h("a", { href: "javascript:void(0)", title: "test" }, "Last")), h("div", null, h("div", null, h("snt-faq-result-list", { faqResultListJson: faqResultListJSON })), h("div", null, h("snt-pagination", { "total-pages": 8, curr: 1 })))),
            h("script", { type: "module", src: "/pages/faqresults.js?v=5" })
        ];
    }
    get element() { return getElement(this); }
};
TreeviewExample.TAG_title = "treeview-example";
TreeviewExample.style = ".wrapper { \n            margin: 0 auto; \n            max-width: 80%;\n            border: 1px solid transparent;\n            display: flex; \n        }\n        .wrapper > div {\n            outline: 1px solid;\n        }";

export { TreeviewExample as treeview_example };

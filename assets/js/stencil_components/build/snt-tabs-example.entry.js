import { r as registerInstance, h } from './index-21c05bc9.js';

const sntTabsExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("snt-tabs", null, h("div", { class: "tab-header" }, h("div", { class: "tab-item" }, h("p", null, h("a", { class: "title selected", id: "faq" }, "FAQs"))), h("div", { class: "tab-item" }, h("p", null, " ", h("a", { class: "title", id: "related" }, "Related article ")))), h("div", { class: "panel-wrapper" }, h("section", { class: "panel" }, h("snt-article-list", { articlesJson: '{ "articles": [\n                        {\n                            "href": "https://www.google.com",\n                            "ariaLabel": "aria label",\n                            "hiddenTitle": "",\n                            "copy": "Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google"\n                        },\n                        {\n                            "href": "https://www.yahoo.com",\n                            "ariaLabel": "aria label",\n                            "hiddenTitle": "",\n                            "copy": "Click here to go to Yahoo"\n                        },\n                        {\n                            "href": "https://www.facebook.com",\n                            "ariaLabel": "aria label",\n                            "hiddenTitle": "",\n                            "copy": "Click here to go to Facebook"\n                        }\n                    ]}' })), h("section", { class: "panel" }, "content panel 2"))));
    }
};
sntTabsExample.TAG_NAME = "snt-tabs-example";

export { sntTabsExample as snt_tabs_example };

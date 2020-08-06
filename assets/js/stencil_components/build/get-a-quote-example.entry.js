import { r as registerInstance, h, H as Host } from './index-21c05bc9.js';

const ontarioExampleCss = "#sidebar-wrapper,.navbar-light{display:none !important}";

const GetAQuoteExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("snt-title-copy", { "style-classes": "center", "title-string": "Let's get insured" }, "Bundle now or later. You'll get the best price no matter what."), h("button-link-group", null, h("button-link", { class: "theme-default" }, "Home & Auto"), h("button-link", { class: "theme-default" }, "Home"), h("button-link", { class: "theme-default" }, "Auto"))));
    }
};
GetAQuoteExample.style = ontarioExampleCss;

export { GetAQuoteExample as get_a_quote_example };

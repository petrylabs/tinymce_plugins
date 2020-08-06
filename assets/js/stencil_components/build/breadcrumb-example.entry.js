import { r as registerInstance, h } from './index-21c05bc9.js';

const BreadcrumbExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("div", { class: "col-6" }, h("snt-breadcrumb", { trail: '[{"title": "test", "href": "/test" },{ "title": "miguel", "href": "/test/miguel"},{ "title": "Current Page", "href": ""}]' }))
        ];
    }
};

export { BreadcrumbExample as breadcrumb_example };

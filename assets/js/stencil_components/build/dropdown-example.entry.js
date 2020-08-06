import { r as registerInstance, h } from './index-21c05bc9.js';

const DropdownExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("div", null, h("form", null, h("div", { class: "row" }, h("div", null, h("snt-dropdown", { id: "insurance-type", placeholderText: "Please Select", labelText: "" }, h("snt-options", null, h("snt-item", { key: "101", value: "One-O-One" }), h("snt-item", { key: "102", value: "One-O-Two" }), h("snt-item", { key: "103", value: "One-O-Three" }), h("snt-item", { key: "104", value: "One-O-Four" }), h("snt-item", { key: "105", value: "One-O-Five" }))))), h("div", { class: "row" }, h("div", null, h("label", null, "Input One"), h("br", null), h("input", { type: "text" })), h("div", null, h("label", null, "Input Two"), h("br", null), h("input", { type: "text" })), h("div", null, h("select", null, h("option", { value: "A", disabled: true }, "AAA"), h("option", { value: "B" }, "BBB"), h("option", { value: "C" }, "CCC"), h("option", { value: "D", disabled: true }, "DDD"), h("option", { value: "E" }, "EEE")))), h("div", { class: "row" }, h("div", null, h("input", { type: "submit", value: "submit" })))), h("div", { id: "dropdown-controller" }, h("h2", null, "Dropdown Controller"), h("snt-dropdown-controller", null)))
        ];
    }
};
DropdownExample.TAG_NAME = "dropdown-example";

export { DropdownExample as dropdown_example };

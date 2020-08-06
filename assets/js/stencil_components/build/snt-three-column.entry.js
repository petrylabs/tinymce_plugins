import { r as registerInstance, h, H as Host, g as getElement } from './index-21c05bc9.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-c0d293ee.js';

const threeColumnComponentCss = "snt-three-column snt-layout[viewport=medium] .column{margin-top:0px;flex:0 0 50%}snt-three-column snt-layout[viewport=medium] .column:nth-child(odd){justify-content:flex-start}snt-three-column snt-layout[viewport=medium] .column:nth-child(even){justify-content:flex-end}snt-three-column snt-layout[viewport=medium] .column:nth-child(n+3){margin-top:26px}snt-three-column snt-layout[viewport=medium] .column>*{display:flex;width:calc(100% - 13px)}snt-three-column snt-layout[viewport=medium] .column>*:first-child{display:flex;width:calc(100% - 13px)}snt-three-column snt-layout[viewport=large] .column{margin-top:0px;flex:0 0 33.3%}snt-three-column snt-layout[viewport=large] .column:first-child{justify-content:flex-start}snt-three-column snt-layout[viewport=large] .column:last-child{justify-content:flex-end}snt-three-column snt-layout[viewport=large] .column>*{display:flex;width:calc(100% - 20px)}snt-three-column snt-layout[viewport=extra-large] .column{margin-top:0px;flex:0 0 33.3%}snt-three-column snt-layout[viewport=extra-large] .column:first-child{justify-content:flex-start}snt-three-column snt-layout[viewport=extra-large] .column:last-child{justify-content:flex-end}snt-three-column snt-layout[viewport=extra-large] .column>*{display:flex;width:calc(100% - 20px)}snt-three-column.neutral-fill snt-layout,.neutral-fill snt-three-column snt-layout{background-color:#ffffff}snt-three-column.light-fill snt-layout,.light-fill snt-three-column snt-layout{background-color:#ffffff}snt-three-column.float-fill snt-layout,.float-fill snt-three-column snt-layout{background-color:#f8f8f8}snt-three-column slot{display:flex}snt-three-column .flex-row{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between}snt-three-column .column{display:flex;flex:0 0 100%;justify-content:center}snt-three-column .column:not(:first-child){margin-top:26px}snt-three-column .column>*{display:flex;width:100%}";

const ThreeColumnComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.styleClasses = StringUtils.empty();
    }
    onResize(event) {
        const viewport = event.detail.viewport;
        this.leftColumn.setAttribute('viewport', viewport);
        this.centerColumn.setAttribute('viewport', viewport);
        this.rightColumn.setAttribute('viewport', viewport);
    }
    componentDidLoad() {
        this.registerChildren(this.leftColumn);
        this.registerChildren(this.centerColumn);
        this.registerChildren(this.rightColumn);
    }
    registerChildren(column) {
        column.childNodes.forEach((childEl) => {
            if (childEl.tagName === 'SNT-ICON-COPY') {
                childEl.registerViewport(this.layoutEl);
            }
        });
    }
    render() {
        return (h(Host, { class: WebUtils.generateClasses([], this.styleClasses) }, h("snt-layout", { ref: (el) => this.layoutEl = el }, h("div", { class: "flex-row" }, h("div", { class: "column", ref: el => this.leftColumn = el }, h("slot", { name: "left" })), h("div", { class: "column", ref: el => this.centerColumn = el }, h("slot", { name: "center" })), h("div", { class: "column", ref: el => this.rightColumn = el }, h("slot", { name: "right" }))))));
    }
    get hostElement() { return getElement(this); }
};
ThreeColumnComponent.TAG_NAME = "snt-three-column";
ThreeColumnComponent.style = threeColumnComponentCss;

export { ThreeColumnComponent as snt_three_column };

import { r as registerInstance, h, H as Host, g as getElement } from './index-21c05bc9.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-c0d293ee.js';

const threeColumnMixedComponentCss = "snt-three-column-mixed .row{display:flex;flex-wrap:wrap;align-items:stretch}snt-three-column-mixed .column{display:flex;flex-direction:column;flex:1 0 100%;max-width:100%;margin-bottom:26px}snt-three-column-mixed .last-row{margin-bottom:0px}snt-three-column-mixed .column.row-start>*{align-self:flex-start}snt-three-column-mixed .column.row-end>*{align-self:flex-end}snt-three-column-mixed .d-none{display:none}snt-three-column-mixed snt-icon-copy{display:flex;flex-grow:1}snt-three-column-mixed .column snt-image-column{display:none}snt-three-column-mixed snt-image img{position:absolute;top:0;height:100%;width:100%;object-fit:cover}snt-three-column-mixed snt-image-column .image-panel{position:relative;width:100%;overflow:hidden}snt-three-column-mixed snt-action-button{width:100%}snt-three-column-mixed snt-action-button snt-button{width:100%}snt-three-column-mixed snt-action-button snt-button button{width:100% !important}snt-three-column-mixed snt-layout[viewport=medium] .column snt-image-column{display:none;margin-bottom:0px}snt-three-column-mixed snt-layout[viewport=medium] .column{flex:1 0 50%;max-width:50%;margin-bottom:30px}snt-three-column-mixed snt-layout[viewport=medium] .column>*{display:flex;width:calc(100% - 15px)}snt-three-column-mixed snt-layout[viewport=medium] .last-row{margin-bottom:0px}snt-three-column-mixed snt-layout[viewport=large] .column{flex:1 0 33.33%;max-width:33.33%;margin-bottom:30px}snt-three-column-mixed snt-layout[viewport=large] .column>*{display:flex;width:calc(100% - 20px)}snt-three-column-mixed snt-layout[viewport=large] .column:nth-child(3n)>*{align-self:flex-end}snt-three-column-mixed snt-layout[viewport=large] .column:nth-child(3n+2)>*{align-self:center}snt-three-column-mixed snt-layout[viewport=large] .column snt-image-column{display:flex;flex-grow:1}snt-three-column-mixed snt-layout[viewport=large] .last-row{margin-bottom:0px}snt-three-column-mixed snt-layout[viewport=extra-large] .column{flex:1 0 33.33%;max-width:33.33%;margin-bottom:30px}snt-three-column-mixed snt-layout[viewport=extra-large] .column>*{display:flex;width:calc(100% - 20px)}snt-three-column-mixed snt-layout[viewport=extra-large] .column:nth-child(3n)>*{align-self:flex-end}snt-three-column-mixed snt-layout[viewport=extra-large] .column:nth-child(3n+2)>*{align-self:center}snt-three-column-mixed snt-layout[viewport=extra-large] .column snt-image-column{display:flex;flex-grow:1}snt-three-column-mixed snt-layout[viewport=extra-large] .last-row{margin-bottom:0px}snt-three-column-mixed.neutral-fill snt-layout,.neutral-fill snt-three-column-mixed snt-layout{background-color:#ffffff}snt-three-column-mixed.light-fill snt-layout,.light-fill snt-three-column-mixed snt-layout{background-color:#ffffff}snt-three-column-mixed.float-fill snt-layout,.float-fill snt-three-column-mixed snt-layout{background-color:#f8f8f8}";

const ThreeColumnComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.styleClasses = StringUtils.empty();
    }
    componentDidLoad() {
        this.registerChildren();
    }
    registerChildren() {
        this.flexGrid.childNodes.forEach((childEl) => {
            if (childEl.classList && childEl.classList.contains('column')) {
                childEl.childNodes.forEach((columnChildEl) => {
                    if (columnChildEl.tagName === 'SNT-ICON-COPY') {
                        columnChildEl.registerViewport(this.layoutEl);
                    }
                });
            }
        });
    }
    onResize(event) {
        const viewport = event.detail.viewport;
        Array.from(this.flexGrid.children).forEach((child) => {
            child.setAttribute('viewport', viewport);
        });
        this.toggleImages(viewport);
        this.tagLastRow(viewport);
        this.setStartAndEnd(viewport);
    }
    toggleImages(viewport) {
        if (viewport == 'medium' || viewport == 'small') {
            this.hostElement.querySelectorAll('.column').forEach((item) => {
                if (item.contains(item.querySelector('snt-image-column'))) {
                    item.classList.add('d-none');
                }
            });
        }
        else {
            this.hostElement.querySelectorAll('.column').forEach((item) => {
                if (item.classList.contains('d-none')) {
                    item.classList.remove('d-none');
                }
            });
        }
    }
    tagLastRow(viewport) {
        const columnCount = {
            'extra-small': 1,
            'small': 1,
            'medium': 2,
            'large': 3,
            'extra-large': 3
        };
        this.hostElement.querySelectorAll('.column').forEach((containerEl) => {
            containerEl.classList.remove('last-row');
        });
        const columnElements = this.hostElement.querySelectorAll('.column:not(.d-none)');
        const numberOfColumnsInLastRow = columnElements.length % columnCount[viewport] === 0
            ? columnCount[viewport]
            : columnElements.length % columnCount[viewport];
        const startingElement = columnElements.length - numberOfColumnsInLastRow;
        for (let index = startingElement; index < columnElements.length; index++) {
            columnElements[index].classList.add('last-row');
        }
    }
    setStartAndEnd(viewport) {
        this.hostElement.querySelectorAll('.column').forEach((containerEl) => {
            containerEl.classList.remove('row-start');
            containerEl.classList.remove('row-end');
        });
        if (viewport !== 'medium') {
            return;
        }
        else {
            const columnElements = this.hostElement.querySelectorAll('.column:not(.d-none)');
            for (let index = 0; index < columnElements.length; index++) {
                if (index % 2 === 0) {
                    columnElements[index].classList.add('row-start');
                }
                else {
                    columnElements[index].classList.add('row-end');
                }
            }
        }
    }
    render() {
        return (h(Host, { class: WebUtils.generateClasses([], this.styleClasses) }, h("snt-layout", { ref: (el) => this.layoutEl = el }, h("div", { class: "row", ref: el => this.flexGrid = el }, h("slot", null)))));
    }
    get hostElement() { return getElement(this); }
};
ThreeColumnComponent.TAG_NAME = "snt-three-column-mixed";
ThreeColumnComponent.style = threeColumnMixedComponentCss;

export { ThreeColumnComponent as snt_three_column_mixed };

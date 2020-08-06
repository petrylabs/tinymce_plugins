import { r as registerInstance, h, H as Host, g as getElement } from './index-21c05bc9.js';

const iconComponentCss = "";

const IconComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { class: `icon-font ${this.styleClasses}`, "aria-hidden": "true" }));
    }
    get element() { return getElement(this); }
};
IconComponent.TAG_NAME = "snt-icon";
IconComponent.style = iconComponentCss;

export { IconComponent as snt_icon };

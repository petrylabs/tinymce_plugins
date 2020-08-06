import { r as registerInstance, h } from './index-21c05bc9.js';

const breadcrumbComponentCss = "snt-breadcrumb ul{display:flex;flex-direction:row}snt-breadcrumb ul li{display:flex;align-items:center;list-style:none;margin-right:5px}snt-breadcrumb ul li a{margin-right:5px;color:#323232}snt-breadcrumb ul li a:hover{color:#147582}";

const BreadcrumbComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillLoad() {
        this._trailObj = JSON.parse(this.trail);
    }
    render() {
        return (h("snt-layout", null, h("ul", null, this._trailObj.map((r, idx) => h("li", null, (r.href.length > 0)
            ? h("a", { href: r.href }, r.title)
            : h("span", null, r.title), (idx !== this._trailObj.length - 1) ? h("snt-icon", { styleClasses: "iconChevron" }) : null)))));
    }
};
BreadcrumbComponent.TAG_NAME = "snt-breadcrumb";
BreadcrumbComponent.style = breadcrumbComponentCss;

export { BreadcrumbComponent as snt_breadcrumb };

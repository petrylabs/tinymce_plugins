import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-21c05bc9.js';

const navbarCollapseComponentCss = "snt-navbar-collapse{width:290px}snt-navbar-collapse hr{border-top:1px solid #ffffff;margin:0}snt-navbar-collapse snt-nav{padding:0.825rem 0 0.5rem;border-bottom:1px solid #ffffff}@media (min-width: 1024px){snt-navbar-collapse snt-nav{padding:0;border-bottom:none}}snt-navbar-collapse snt-nav:last-of-type{border-bottom:none}snt-navbar-collapse snt-nav-item{width:100%}@media (min-width: 1024px){snt-navbar-collapse snt-nav-item{width:auto}}snt-navbar-collapse .header{padding:20px 30px 20px 30px}@media (min-width: 1024px){snt-navbar-collapse .header{padding:initial}}snt-navbar-collapse .header snt-icon{font-size:1rem;margin-right:24px}snt-navbar-collapse .header snt-image{width:100%;max-width:85px}snt-navbar-collapse .body{position:relative;padding:0.75rem 2rem 2rem}@media (min-width: 1024px){snt-navbar-collapse .body{padding:0}}snt-navbar-collapse .body snt-button.cta button{width:100%}snt-navbar-collapse .spacer{display:none}@media (min-width: 1024px){snt-navbar-collapse .spacer{display:flex;flex:0 1 4.375rem;min-width:1rem}}snt-navbar-collapse[shown]{z-index:10000;position:fixed;left:0;top:0;bottom:0;background-color:#323232}@media (min-width: 1024px){snt-navbar-collapse[shown]{position:initial}}";

const NavbarCollapseComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.shown = false;
        this.viewport = null;
        this.inDesktopMode = false;
        this.elementToFocusOn = null;
        this.lastActiveElement = null;
        this.navbarToggled = createEvent(this, "navbarToggled", 7);
    }
    async toggleShown(shown) {
        this.shown = (typeof (shown) === "boolean") ? shown : !this.shown;
        return Promise.resolve(this.shown);
    }
    onShown(shown) {
        if (shown) {
            this.lastActiveElement = document.activeElement || document.body;
        }
        this.elementToFocusOn = shown ? this.element : this.lastActiveElement;
    }
    onViewport() {
        this.inDesktopMode = (this.viewport == "large" || this.viewport == "extra-large");
    }
    componentWillRender() {
        this.inDesktopMode = (this.viewport == "large" || this.viewport == "extra-large");
    }
    componentDidUpdate() {
        if (this.elementToFocusOn !== null) {
            this.elementToFocusOn.focus();
            this.elementToFocusOn = null;
        }
    }
    render() {
        return (h(Host, { class: `collapse navbar-collapse ${this.shown ? "show" : ""}`, tabindex: this.inDesktopMode ? null : "-1", role: this.inDesktopMode ? null : "dialog", "aria-expanded": this.inDesktopMode ? "false" : this.shown ? "false" : "true" }, h("div", { class: "spacer" }), h("div", { class: "header d-flex d-lg-none align-items-center" }, h("snt-button", { class: "d-inline-flex", onClick: () => this.navbarToggled.emit() }, h("snt-icon", { styleClasses: "iconNavClose" })), h("snt-image", { "data-src": "https://www.sonnet.ca/_Insurance/images/MasterLogo-White.svg", width: "100", height: "100" })), h("div", { class: "body" }, h("slot", null))));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "shown": ["onShown"],
        "viewport": ["onViewport"]
    }; }
};
NavbarCollapseComponent.TAG_NAME = "snt-navbar-collapse";
NavbarCollapseComponent.style = navbarCollapseComponentCss;

export { NavbarCollapseComponent as N };

import { r as registerInstance, h, H as Host, g as getElement } from './index-21c05bc9.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-c0d293ee.js';
import { N as NavbarCollapseComponent } from './navbar-collapse-component-36029d55.js';

const navbarComponentCss = "snt-navbar{width:100%}snt-navbar.navbar{margin:0;padding:0;}@media (min-width: 768px){snt-navbar.navbar.navbar-expand-md .nav-link,snt-navbar.navbar.navbar-expand-lg .nav-link{padding-left:0;padding-right:0}}@media (max-width: 1023px){snt-navbar[active] snt-backdrop{display:block}}snt-navbar snt-backdrop{display:none}snt-navbar .actions-nav,snt-navbar .brand-and-toggle{display:flex;align-items:center;flex-flow:row nowrap}@media (min-width: 1024px){snt-navbar .actions-nav,snt-navbar .brand-and-toggle{flex-flow:column nowrap}}snt-navbar .brand-and-toggle>*:not(:last-child){margin-right:1.25rem}snt-navbar .actions-nav>*:not(:first-child){margin-left:1.25rem}@media (min-width: 1024px){snt-navbar .actions-nav>*:not(:first-child){margin-left:1.625rem}}snt-navbar .main-panel.hidden{visibility:hidden}";

const NavbarComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.styleClasses = StringUtils.empty();
    }
    listenNavbarTogglerEvent(_event) {
        this.toggleActive().then(null);
    }
    async toggleActive(active) {
        this.active = (typeof (active) === "boolean") ? active : !this.active;
        return this.active;
    }
    watchActive() {
        if (this.navbarCollapse) {
            this.navbarCollapse.toggleShown(this.active)
                .then(null);
        }
    }
    componentDidLoad() {
        this.navbarCollapse = document.querySelector(`${NavbarCollapseComponent.TAG_NAME}`);
        if (this.navbarCollapse) {
            this.navbarToggle.ariaControls = this.navbarCollapse.id;
        }
    }
    render() {
        return (h(Host, { class: WebUtils.generateClasses(["navbar"], this.styleClasses), onSntBackdropTap: () => this.toggleActive() }, h("div", { class: "brand-and-toggle" }, h("snt-navbar-toggle", { ref: (elem) => this.navbarToggle = elem, languageString: this.languageString }), h("slot", { name: "navbar-brand" })), h("slot", { name: "navbar-collapse" }), h("slot", null), h("snt-backdrop", null)));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "active": ["watchActive"]
    }; }
};
NavbarComponent.TAG_NAME = "snt-navbar";
NavbarComponent.style = navbarComponentCss;

export { NavbarComponent as snt_navbar };

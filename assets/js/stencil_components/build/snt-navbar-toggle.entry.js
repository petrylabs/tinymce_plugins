import { r as registerInstance, c as createEvent, h, g as getElement } from './index-21c05bc9.js';
import { L as LanguageUtils } from './LanguageUtils-7936212b.js';

const navbarToggleComponentCss = "snt-navbar-toggle .navbar-toggler{border:none;margin:0;padding:0;display:flex}@media (min-width: 768px){snt-navbar-toggle .navbar-toggler{font-size:1.75rem;margin-top:2px}}snt-navbar-toggle .navbar-toggler snt-icon{color:#ffffff}";

const NavbarToggleComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.navbarToggled = createEvent(this, "navbarToggled", 7);
    }
    async toggleCollapsed(collapsed) {
        this.collapsed = (typeof (collapsed) === "boolean") ? collapsed : !this.collapsed;
        return Promise.resolve(this.collapsed);
    }
    watchCollapsed() {
        this.navbarToggled.emit();
    }
    componentWillLoad() {
        this.languageVariables = LanguageUtils.getVariablesFromString(this.languageString, ["toggleNavigation"]);
    }
    render() {
        return (h("button", { class: "navbar-toggler", "aria-controls": this.ariaControls, "aria-label": this.languageVariables.get("toggleNavigation"), "aria-expanded": this.collapsed ? "false" : "true", onClick: () => this.toggleCollapsed() }, h("snt-icon", { styleClasses: "iconNavBurger" })));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "collapsed": ["watchCollapsed"]
    }; }
};
NavbarToggleComponent.TAG_NAME = "snt-navbar-toggle";
NavbarToggleComponent.style = navbarToggleComponentCss;

export { NavbarToggleComponent as snt_navbar_toggle };

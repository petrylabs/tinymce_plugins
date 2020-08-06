import { r as registerInstance, h, H as Host, g as getElement } from './index-21c05bc9.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-c0d293ee.js';
import { f as focusTrap } from './index-1490dfbf.js';
import './EventConfigurationBuilder-6e07cd4e.js';
import './event-component-473ec2a7.js';
import './ReflectionUtils-65000824.js';
import { S as SearchBarComponent } from './search-bar-component-9a0beffb.js';
import { S as SearchPanelComponent } from './search-panel-component-3e070df5.js';
import { A as ActionButtonComponent } from './action-button-component-bb613a2b.js';

const headerComponentCss = "snt-header{position:relative;display:block;width:100%;z-index:99;background-color:#323232}snt-header[fixed]{position:sticky;top:0;left:0;right:0}@media (max-width: 1023px){snt-header[active] .brand-and-toggle,snt-header[active] .actions-nav,snt-header[active] snt-pane{display:none}snt-header[active] header{padding:0}}snt-header header{position:relative;padding:1.125rem 0;margin:0 auto}snt-header snt-layout .spacings{overflow:visible}snt-header snt-nav[slot=secondary-nav-mobile]{display:flex}@media (min-width: 1024px){snt-header snt-nav[slot=secondary-nav-mobile]{display:none}}snt-header snt-nav[slot=secondary-nav-mobile] snt-nav-item{margin:0 0 0.625rem 0}snt-header snt-nav[slot=secondary-nav-desktop]{display:none}@media (min-width: 768px){snt-header snt-nav[slot=secondary-nav-desktop]{display:flex}}snt-header snt-nav[slot=secondary-nav-desktop] snt-nav-item{margin:0 0 0.625rem 0}@media (min-width: 768px){snt-header snt-nav[slot=secondary-nav-desktop] snt-nav-item{margin:0 0 0 1.65rem}}snt-header snt-navbar-collapse{overflow:hidden;position:relative}@media (min-width: 768px){snt-header snt-navbar-collapse{overflow:visible}}snt-header snt-navbar-collapse{order:1}@media (min-width: 768px){snt-header snt-navbar-collapse{order:initial}}snt-header snt-navbar{display:flex;flex-flow:row nowrap}snt-header snt-button{white-space:nowrap}snt-header snt-button button{background:transparent;border:none;color:white}snt-header snt-link a{color:#ffffff}snt-header snt-skip-to-main a{font-family:Averta-ExtraBold;color:#6ebac5;text-decoration:none}snt-header snt-skip-to-main a:focus{outline:0.125rem solid #b2b2b2}snt-header .header-container{width:100%;max-width:1440px;margin:auto}";

const HeaderComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.styleClasses = StringUtils.empty();
        this.fixed = false;
        this.languageJson = StringUtils.empty();
        this.mainContentId = StringUtils.empty();
        this.active = false;
        this.shrunk = false;
        this.languageStrings = {};
        this.focusTrap = null;
        this.gaqButtonActionData = null;
    }
    onToggleSearch(evt) {
        evt.composedPath().includes(this.secondaryNavDesktop) || evt.composedPath().includes(this.searchBar)
            ? this.searchBar.toggleActive().then((active) => {
                this.toggleFocusTrap(active);
            })
            : this.searchPanel.toggleActive().then((active) => {
                if (active) {
                    this.mainPanel.classList.add("hidden");
                }
                else {
                    this.mainPanel.classList.remove("hidden");
                    this.navbarCollapse.focus();
                }
            });
    }
    async toggleActive(active) {
        this.active = (typeof (active) === "boolean") ? active : !this.active;
        this.toggleFocusTrap(this.active);
        return Promise.resolve(this.active);
    }
    onScroll(_evt) {
        this.fixed && this.shrink();
    }
    onViewportChanged() {
        if (this.navbarCollapse) {
            this.navbarCollapse.viewport = this.layout.viewport;
        }
    }
    componentWillLoad() {
        try {
            this.languageStrings = JSON.parse(this.languageJson);
        }
        catch (e) {
            console.error(e);
        }
        ;
        this.gaqButtonActionData = JSON.stringify({
            getAQuoteUrl: this.languageStrings["getAQuoteUrl"],
            languageString: {
                close: this.languageStrings["close"]
            }
        });
    }
    componentDidLoad() {
        this.fixed && this.shrink();
        this.registersubComponents();
        this.setSubComponentClasses();
        this.insertAdditionalElements();
        this.focusTrap = focusTrap(this.element, {});
        this.searchBar = this.element.querySelector(SearchBarComponent.TAG_NAME);
        this.searchPanel = this.element.querySelector(SearchPanelComponent.TAG_NAME);
    }
    registersubComponents() {
        this.secondaryNavDesktop = this.element.querySelector(`[slot=${HeaderComponent.SECONDARY_NAV_DESKTOP_SLOT_NAME}]`);
        this.secondaryNavMobile = this.element.querySelector(`[slot=${HeaderComponent.SECONDARY_NAV_MOBILE_SLOT_NAME}]`);
        this.primaryNav = this.element.querySelector(`[slot=${HeaderComponent.PRIMARY_NAV_SLOT_NAME}]`);
    }
    setSubComponentClasses() {
        this.secondaryNavDesktop.classList.add("theme-header-nav", "flex-row", "justify-content-end", "secondary-nav");
        this.secondaryNavMobile.classList.add("theme-header-nav", "secondary-nav");
        this.primaryNav.classList.add("main-nav", "theme-header-nav");
    }
    insertAdditionalElements() {
        const searchButtonHTML = `<snt-nav-item><snt-action-button action-reference="Action.toggleSearch" icon-class-name="iconNavSearch" link-title="${this.languageStrings["search"] || "Search"}"></snt-action-button> </snt-nav-item>`;
        (!this.secondaryNavDesktop.querySelector(ActionButtonComponent.TAG_NAME) &&
            this.secondaryNavDesktop.insertAdjacentHTML("beforeend", searchButtonHTML));
        (!this.secondaryNavMobile.querySelector(ActionButtonComponent.TAG_NAME) &&
            this.secondaryNavMobile.insertAdjacentHTML("beforeend", searchButtonHTML));
    }
    shrink() {
        if (this.secondaryNavPane) {
            if (!this.shrunk && (this.element.offsetTop + window.scrollY) > (this.element.offsetTop + this.element.offsetHeight)) {
                this.secondaryNavPane.collapsed = true;
                this.shrunk = true;
            }
            else if (window.scrollY == 0 && this.shrunk) {
                this.secondaryNavPane.collapsed = false;
                this.shrunk = false;
            }
        }
    }
    toggleFocusTrap(active) {
        active ? this.focusTrap.activate() : this.focusTrap.deactivate();
    }
    render() {
        return (h(Host, { onSntBackdropTap: () => this.toggleActive(), onNavbarToggled: () => this.toggleActive() }, h("div", { class: "header-container" }, h("snt-layout", { padding: "vertical-only", ref: (elem) => this.layout = elem }, h("header", { class: WebUtils.generateClasses(["header"], this.styleClasses) }, h("snt-skip-to-main", { "main-content-id": `#${this.mainContentId}` }, this.languageStrings["skipToMainContent"] || "Skip to main content"), h("snt-pane", { animated: true, ref: (elem) => this.secondaryNavPane = elem }, h("slot", { name: HeaderComponent.SECONDARY_NAV_DESKTOP_SLOT_NAME })), h("snt-navbar", { "style-classes": "navbar-expand-lg", "language-string": this.languageJson }, h("div", { slot: HeaderComponent.NAVBAR_BRAND_SLOT_NAME }, h("slot", { name: HeaderComponent.NAVBAR_BRAND_SLOT_NAME })), h("snt-navbar-collapse", { id: "navbar-collapse", slot: "navbar-collapse", ref: (elem) => this.navbarCollapse = elem }, h("div", { class: "main-panel", ref: (elem) => this.mainPanel = elem }, h("snt-action-button", { actionReference: "Action.openGetQuoteModal", linkTitle: this.languageStrings["gaq"] || "Get a Quote", actionData: this.gaqButtonActionData, styleClasses: "gaq-mobile cta theme-headerNav d-flex d-lg-none" }), h("slot", { name: HeaderComponent.PRIMARY_NAV_SLOT_NAME }), h("slot", { name: HeaderComponent.SECONDARY_NAV_MOBILE_SLOT_NAME })), h("snt-search-panel", { class: "hidden", languageJson: this.languageJson })), h("snt-nav", { id: "actions-nav", class: "actions-nav theme-header-nav", expander: "false" }, h("snt-nav-item", null, h("snt-shopping-cart", null, " ")), h("snt-nav-item", { styleClasses: "d-none d-md-flex" }, h("snt-action-button", { styleClasses: "cta theme-headerNav", actionReference: "Action.openGetQuoteModal", actionData: this.gaqButtonActionData, linkTitle: this.languageStrings["gaq"] || "Get a Quote" }, " ")), h("snt-nav-item", null, h("snt-login", { languageJson: this.languageJson }))))), h("snt-search-bar", { languageJson: this.languageJson })))));
    }
    get element() { return getElement(this); }
};
HeaderComponent.TAG_NAME = "snt-header";
HeaderComponent.SECONDARY_NAV_DESKTOP_SLOT_NAME = "secondary-nav-desktop";
HeaderComponent.SECONDARY_NAV_MOBILE_SLOT_NAME = "secondary-nav-mobile";
HeaderComponent.PRIMARY_NAV_SLOT_NAME = "primary-nav";
HeaderComponent.NAVBAR_BRAND_SLOT_NAME = "navbar-brand";
HeaderComponent.style = headerComponentCss;

export { HeaderComponent as snt_header };

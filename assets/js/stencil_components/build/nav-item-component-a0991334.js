import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-21c05bc9.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-c0d293ee.js';

var NavItemTypeEnum;
(function (NavItemTypeEnum) {
    NavItemTypeEnum["LINK"] = "link";
    NavItemTypeEnum["SUBNAV"] = "subnav";
    NavItemTypeEnum["ACTION_LINK"] = "action-link";
    NavItemTypeEnum["CUSTOM"] = "custom";
})(NavItemTypeEnum || (NavItemTypeEnum = {}));
(function (NavItemTypeEnum) {
    function exists(value) {
        if (value) {
            return (NavItemTypeEnum[value.toUpperCase().trim()] != null);
        }
        throw new Error(`Argument with value ${value} must be a valid string.`);
    }
    NavItemTypeEnum.exists = exists;
    function findByValue(text) {
        if (exists(text)) {
            return NavItemTypeEnum[text.toUpperCase().trim()];
        }
        throw new Error(`Argument text with value ${text} does not exist.`);
    }
    NavItemTypeEnum.findByValue = findByValue;
})(NavItemTypeEnum || (NavItemTypeEnum = {}));

class NavUtils {
    static isCurrentPage(navItem) {
        if (navItem["href"]) {
            return (navItem["href"] == window.location.search);
        }
        return false;
    }
    static identifyType(element) {
        if (element.querySelectorAll(NavItemComponent.TAG_NAME).length > 0) {
            return NavItemTypeEnum.SUBNAV;
        }
        else if (element.href) {
            if (element.href.includes("action:")) {
                return NavItemTypeEnum.ACTION_LINK;
            }
            else {
                return NavItemTypeEnum.LINK;
            }
        }
        else {
            return NavItemTypeEnum.CUSTOM;
        }
    }
}

const navItemComponentCss = "snt-nav-item{position:relative}snt-nav-item .dropdown-toggle{margin-right:0.5rem}snt-nav-item .dropdown-toggle:after{display:none}snt-nav-item .dropdown-menu{top:calc(100% + 1rem);left:-1.875rem;font-family:\"Averta-Regular\", sans-serif;background-color:#323232;border:none;border-radius:0;padding:0.225rem 0 0 0.875rem}@media (min-width: 1024px){snt-nav-item .dropdown-menu{padding:1.5rem 1.875rem}}snt-nav-item .dropdown-menu a{margin-left:15px}@media (min-width: 768px){snt-nav-item .dropdown-menu a{margin-left:initial}}snt-nav-item .dropdown-menu snt-nav-item{line-height:1.3125rem}snt-nav-item .expander{outline:none}snt-nav-item .expander snt-icon{transform:rotate(90deg);outline:none}";

const NavItemComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.expanded = false;
        this.current = false;
        this.styleClasses = StringUtils.empty();
        this.navItemEvent = createEvent(this, "navItemEvent", 7);
    }
    async expand() {
        this.expanded = true;
    }
    async collapse() {
        this.expanded = false;
    }
    async toggleExpanded() {
        this.expanded = !this.expanded;
    }
    async setCurrent() {
        this.current = true;
    }
    async unsetCurrent() {
        this.current = false;
    }
    async toggleCurrent() {
        this.current = !this.current;
    }
    watchCurrent() {
        if (this.parent) {
            this.parent.toggleCurrent().then(null);
            if (!(window.innerWidth >= 768)) {
                this.parent.expanded = true;
            }
        }
    }
    watchExpanded() {
        if (this.type == NavItemTypeEnum.SUBNAV) {
            this.navItemEvent.emit();
        }
    }
    async registerParent(parent) {
        this.parent = parent;
    }
    handleMouseOver(_e) {
        if (window.innerWidth >= 768) {
            clearTimeout(this.collapseTimeout);
            if (!this.expanded)
                this.expanded = true;
        }
    }
    handleMouseleave() {
        this.collapseTimeout = setTimeout(() => {
            this.collapse();
        }, 250);
    }
    componentWillLoad() {
        this.type = NavUtils.identifyType(this.element);
        if (this.element["id"])
            console.log(this.element.id, this.type);
    }
    componentDidLoad() {
        this.registerChildren();
    }
    async isType(type) {
        return type == this.type;
    }
    registerChildren() {
        if (this.type == NavItemTypeEnum.SUBNAV) {
            const children = this.element.querySelectorAll(NavItemComponent.TAG_NAME);
            if (children) {
                children.forEach((child) => {
                    child.registerParent(this.element);
                });
            }
        }
    }
    render() {
        const subnavId = `${this.element.id}-subnav`;
        const expanderId = `${this.element.id}-expander`;
        const showClass = (this.expanded) ? "show" : "";
        const navItemClass = ["nav-item"];
        (this.type == NavItemTypeEnum.SUBNAV) ? navItemClass.push(`dropdown ${showClass}`) : false;
        const navLinkClass = `nav-link ${(this.type == NavItemTypeEnum.SUBNAV) ? "dropdown-toggle" : ""}`;
        const linkAriaLabel = `${(this.type == NavItemTypeEnum.SUBNAV) ? `${this.linkTitle}, tab to the next button to expand the sub-menu` : this.linkTitle}`;
        //const ariaCurrent = `${(this.current) ? "page" : false}`;
        const icon = [
            h("snt-icon", { styleClasses: this.iconClassName })
        ];
        const link = [
            h("snt-link", { href: this.href, target: this.target, class: navLinkClass, current: this.current, "aria-label": linkAriaLabel, "aria-current": true, "hidden-title": this.linkTitle }, this.iconClassName ? icon : "", this.linkTitle)
        ];
        const expander = (h("button", { type: "button", class: "expander", onClick: this.toggleExpanded.bind(this), "aria-expanded": this.expanded.toString(), "aria-haspopup": "true", "aria-label": `${this.linkTitle}`, "aria-owns": subnavId }, h("snt-icon", { styleClasses: (this.expanded) ? "icon-icon_nav_minus_inv" : "icon-icon_nav_plus" })));
        const subnav = [
            h("div", { class: "position-relative" }, [link, expander]),
            h("div", { "aria-label": "1 of 1", role: "menu", class: `dropdown-menu ${showClass}`, id: subnavId, "aria-labelledby": expanderId }, h("slot", null))
        ];
        const actionReference = (this.href) ? this.href.replace("action:", "") : "";
        const actionLink = h("snt-action-link", { "action-reference": actionReference, linkTitle: this.linkTitle, iconClassName: this.iconClassName });
        const custom = [
            h("slot", null)
        ];
        const template = {
            "link": link,
            "action-link": actionLink,
            "subnav": subnav,
            "custom": custom
        };
        return (h(Host, { class: WebUtils.generateClasses([], this.styleClasses), role: "listitem" }, template[this.type]));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "current": ["watchCurrent"],
        "expanded": ["watchExpanded"]
    }; }
};
NavItemComponent.TAG_NAME = "snt-nav-item";
NavItemComponent.style = navItemComponentCss;

export { NavItemComponent as N, NavItemTypeEnum as a, NavUtils as b };

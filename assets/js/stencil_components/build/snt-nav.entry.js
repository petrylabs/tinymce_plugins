import { r as registerInstance, h, H as Host, g as getElement } from './index-21c05bc9.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-c0d293ee.js';
import { N as NavItemComponent, a as NavItemTypeEnum, b as NavUtils } from './nav-item-component-a0991334.js';

const navComponentCss = "@charset \"UTF-8\";snt-nav{align-items:center}snt-nav[expander=all] snt-nav-item.dropdown .show .expander:after,snt-nav[expander=keyboard] snt-nav-item.dropdown .show .expander:after{content:\"⏶\"}snt-nav[expander=all] .expander,snt-nav[expander=keyboard] .expander{background:transparent;border:0;margin:0;padding:0;appearance:none;position:absolute;top:50%;transform:translateY(-50%) rotate(90deg);right:0;color:white;display:flex;font-size:12px}@media (min-width: 1024px){snt-nav[expander=all] .expander,snt-nav[expander=keyboard] .expander{left:calc(100% + 0.5rem)}}snt-nav[expander=all] .expander:focus,snt-nav[expander=keyboard] .expander:focus{outline:2px solid #b2b2b2}snt-nav[expander=all] .expander{opacity:1}snt-nav[expander=keyboard] snt-nav-item:focus-within:not(:active):not(:hover) .expander{opacity:1}@media (min-width: 1024px){snt-nav[expander=keyboard] snt-nav-item .expander{opacity:0}}snt-nav[separator]>snt-nav-item:last-child{border-right:none}snt-nav.main-nav snt-nav-item{margin:0 0 0.5rem 0;}@media (min-width: 1024px){snt-nav.main-nav snt-nav-item{margin:1.075rem 2.175rem 0 0}}snt-nav.main-nav snt-nav-item a{font-family:Averta-ExtraBold;font-size:1em}snt-nav.main-nav snt-nav-item snt-nav-item{margin:0 0 0.125rem 0}@media (min-width: 1024px){snt-nav.main-nav snt-nav-item snt-nav-item{padding:0;margin:0}}snt-nav.main-nav snt-nav-item snt-nav-item a{font-family:Averta-Regular}snt-nav.secondary-nav{margin-bottom:0.5rem}snt-nav.secondary-nav a,snt-nav.secondary-nav button{font-size:0.875rem;line-height:1.25rem}@media (min-width: 768px){snt-nav.actions-nav snt-nav-item{margin:0 0 0 1.5rem}}snt-nav.actions-nav snt-nav-item a{font-family:Averta-ExtraBold}snt-nav.theme-header-nav snt-nav-item{display:block;line-height:1.3125rem}snt-nav.theme-header-nav snt-nav-item .nav-item,snt-nav.theme-header-nav snt-nav-item .nav-link{padding:0;margin:0}snt-nav.theme-header-nav snt-link a{display:inline-block;margin:0;position:relative;text-decoration:none;border-bottom:none}snt-nav.theme-header-nav snt-button:hover snt-icon,snt-nav.theme-header-nav snt-button:hover button{color:#6ebac5}snt-nav.theme-header-nav snt-button snt-icon{margin-right:8px}snt-nav.theme-header-nav snt-link a,snt-nav.theme-header-nav snt-link button,snt-nav.theme-header-nav snt-button:not(.cta) a,snt-nav.theme-header-nav snt-button:not(.cta) button{margin:2px;outline:2px solid transparent;padding:0;white-space:nowrap;}snt-nav.theme-header-nav snt-link a:active,snt-nav.theme-header-nav snt-link a:focus,snt-nav.theme-header-nav snt-link a:hover,snt-nav.theme-header-nav snt-link button:active,snt-nav.theme-header-nav snt-link button:focus,snt-nav.theme-header-nav snt-link button:hover,snt-nav.theme-header-nav snt-button:not(.cta) a:active,snt-nav.theme-header-nav snt-button:not(.cta) a:focus,snt-nav.theme-header-nav snt-button:not(.cta) a:hover,snt-nav.theme-header-nav snt-button:not(.cta) button:active,snt-nav.theme-header-nav snt-button:not(.cta) button:focus,snt-nav.theme-header-nav snt-button:not(.cta) button:hover{color:#6ebac5;font-family:Averta-ExtraBold}snt-nav.theme-header-nav snt-link a:active:before,snt-nav.theme-header-nav snt-link a:focus:before,snt-nav.theme-header-nav snt-link a:hover:before,snt-nav.theme-header-nav snt-link button:active:before,snt-nav.theme-header-nav snt-link button:focus:before,snt-nav.theme-header-nav snt-link button:hover:before,snt-nav.theme-header-nav snt-button:not(.cta) a:active:before,snt-nav.theme-header-nav snt-button:not(.cta) a:focus:before,snt-nav.theme-header-nav snt-button:not(.cta) a:hover:before,snt-nav.theme-header-nav snt-button:not(.cta) button:active:before,snt-nav.theme-header-nav snt-button:not(.cta) button:focus:before,snt-nav.theme-header-nav snt-button:not(.cta) button:hover:before{visibility:hidden}snt-nav.theme-header-nav snt-link a:focus,snt-nav.theme-header-nav snt-link button:focus,snt-nav.theme-header-nav snt-button:not(.cta) a:focus,snt-nav.theme-header-nav snt-button:not(.cta) button:focus{outline:2px solid #b2b2b2;padding:0}snt-nav.theme-header-nav snt-link a:before,snt-nav.theme-header-nav snt-link button:before,snt-nav.theme-header-nav snt-button:not(.cta) a:before,snt-nav.theme-header-nav snt-button:not(.cta) button:before{background-color:#6ebac5;height:2px}snt-nav.theme-header-nav snt-link a:after,snt-nav.theme-header-nav snt-link button:after,snt-nav.theme-header-nav snt-button:not(.cta) a:after,snt-nav.theme-header-nav snt-button:not(.cta) button:after{display:block;font-family:Averta-ExtraBold;content:attr(hidden-title);height:0;overflow:hidden;visibility:hidden;font-size:1.015em}snt-nav.theme-header-nav snt-link[current] a:before,snt-nav.theme-header-nav snt-link[current] button:before,snt-nav.theme-header-nav snt-button:not(.cta)[current] a:before,snt-nav.theme-header-nav snt-button:not(.cta)[current] button:before{width:100%;visibility:visible;transform:scaleX(1)}";

const NavComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.styleClasses = StringUtils.empty();
    }
    handleNavItemEvent(event) {
        const expanded = event.target.expanded;
        if (expanded) {
            this.collapseSiblingSubnavs(event.target);
        }
    }
    componentDidLoad() {
        this.setActiveNavItem();
    }
    setActiveNavItem() {
        const navItems = this.element.querySelectorAll(NavItemComponent.TAG_NAME);
        if (navItems) {
            navItems.forEach((navItem) => {
                if (navItem.isType(NavItemTypeEnum.ACTION_LINK) && NavUtils.isCurrentPage(navItem)) {
                    navItem.toggleCurrent().then(null); //test
                }
            });
        }
    }
    collapseSiblingSubnavs(currentSubnav) {
        const expandedSubnavs = this.element.querySelectorAll(`${NavItemComponent.TAG_NAME}[expanded]`);
        expandedSubnavs.forEach((expandedSubnav) => {
            if (expandedSubnav != currentSubnav) {
                expandedSubnav.collapse().then(null);
            }
        });
    }
    render() {
        return (h(Host, { class: WebUtils.generateClasses(["navbar-nav"], this.styleClasses), role: "list" }, h("slot", null)));
    }
    get element() { return getElement(this); }
};
NavComponent.TAG_NAME = "snt-nav";
NavComponent.style = navComponentCss;

export { NavComponent as snt_nav };

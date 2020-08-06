import { r as registerInstance, c as createEvent, h, g as getElement } from './index-21c05bc9.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-c0d293ee.js';
import './LanguageUtils-7936212b.js';
import { A as AccessibilityUtils } from './AccessibilityUtils-9e525cc3.js';

const buttonLinkComponentCss = "@charset \"UTF-8\";button-link.theme-default{background-color:#6ebac5;color:#323232;box-shadow:inset 0 0 0 3px #6ebac5}button-link.theme-default:hover,button-link.theme-default:focus,button-link.theme-default:focus-within{color:#ffffff;background-color:#147582;box-shadow:inset 0 0 0 3px #147582}button-link.theme-secondary{background-color:transparent;color:#323232;box-shadow:inset 0 0 0 3px #323232}button-link.theme-secondary:hover,button-link.theme-secondary:focus,button-link.theme-secondary:focus-within{color:#ffffff;background-color:#323232}button-link.theme-secondaryDarkBg{background-color:transparent;color:#ffffff;box-shadow:inset 0 0 0 3px #ffffff}button-link.theme-secondaryDarkBg:hover,button-link.theme-secondaryDarkBg:focus,button-link.theme-secondaryDarkBg:focus-within{color:#323232;background-color:#ffffff}button-link.theme-primary{background-color:#323232;color:#ffffff;box-shadow:inset 0 0 0 3px #323232}button-link.theme-primary:hover,button-link.theme-primary:focus,button-link.theme-primary:focus-within{color:#323232;background-color:transparent}button-link.theme-headerNav{background-color:transparent;color:#6ebac5;box-shadow:inset 0 0 0 3px #6ebac5}button-link.theme-headerNav:hover,button-link.theme-headerNav:focus,button-link.theme-headerNav:focus-within{color:#323232;background-color:#6ebac5}button-link.theme-disabled{background-color:#e5e5e5;color:#7f7f7f;box-shadow:inset 0 0 0 3px #e5e5e5}button-link.theme-disabled:hover,button-link.theme-disabled:focus,button-link.theme-disabled:focus-within{color:#7f7f7f}button-link.theme-disabledSecondary{background-color:transparent;color:#b2b2b2;box-shadow:inset 0 0 0 3px #b2b2b2}button-link.theme-disabledSecondary:hover,button-link.theme-disabledSecondary:focus,button-link.theme-disabledSecondary:focus-within{color:#b2b2b2}button-link a:hover{color:inherit;text-decoration:inherit}button-link a:hover .icon-new-window:after{color:inherit}button-link a:focus .icon-new-window:after{color:inherit}button-link a{color:inherit;text-decoration:inherit;display:inline-block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;padding:13px 21px;font-size:1.125em;width:auto;cursor:pointer;line-height:normal;font-family:\"Averta-ExtraBold\", sans-serif;overflow:visible;outline:none;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;border:none}button-link .icon-new-window:before{all:unset}button-link .icon-new-window:after{content:\"\";font-size:1.02em !important;right:-21px;padding-left:5px;color:#323232;display:inline-block}";

const ButtonLinkComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.classNames = StringUtils.empty();
        this.linkEvent = createEvent(this, "linkEvent", 7);
    }
    handleKeyDown(keyboardEvent) {
        this.linkEvent.emit(keyboardEvent);
    }
    handleClick(clickEvent) {
        this.linkEvent.emit(clickEvent);
    }
    handleMouseover(clickEvent) {
        this.linkEvent.emit(clickEvent);
    }
    render() {
        let content = h("slot", null);
        if (this.target === '_blank' && StringUtils.hasValue(this.href)) {
            let title = AccessibilityUtils.getNewWindowTitle();
            let text = AccessibilityUtils.getNewWindowText();
            content = [content,
                h("span", { class: 'icon-font icon-new-window', title: title }, h("span", { class: 'sr-only' }, " ", text))
            ];
        }
        return [
            h("a", { href: this.href, target: this.target, "aria-label": this.ariaLabel, class: WebUtils.generateClasses([], this.classNames) }, content)
        ];
    }
    get element() { return getElement(this); }
};
ButtonLinkComponent.TAG_NAME = "button-link";
ButtonLinkComponent.style = buttonLinkComponentCss;

export { ButtonLinkComponent as button_link };

import { r as registerInstance, h } from './index-21c05bc9.js';
import './LanguageUtils-7936212b.js';
import { A as AccessibilityUtils } from './AccessibilityUtils-9e525cc3.js';

const sourceLinkComponentCss = "@charset \"UTF-8\";snt-source-link{display:inline-block}snt-source-link a{height:25px;font-size:14px;color:#323232;display:flex;align-items:center;border:1px solid #323232;border-radius:22px;padding:10px;position:relative}snt-source-link a .icon-new-window:after{content:\"\";font-size:1.02em !important;padding-left:5px;color:#323232;display:inline-block;position:relative}snt-source-link a .icon-new-window:before{content:\"\"}snt-source-link a:hover{color:#147582;border-color:#147582;box-shadow:0 0 0 2px #147582}snt-source-link a:hover .icon-new-window:after{color:#147582}snt-source-link a:focus{outline:none}snt-source-link a:focus:after{content:\"\";display:block;position:absolute;top:-7px;bottom:-7px;left:-7px;right:-7px;border-radius:30px;border:1px solid #323232}snt-source-link .link-content{max-width:249px;display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}snt-source-link .full-content{max-width:265px;display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}";

const SourceLinkComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        let content;
        let title = AccessibilityUtils.getNewWindowTitle();
        let text = AccessibilityUtils.getNewWindowText();
        if (this.target === "_blank") {
            content = [
                h("span", { class: "link-content" }, h("slot", null)),
                h("span", { class: "icon-font icon-new-window", title: title }, h("span", { class: "sr-only" }, " ", text))
            ];
        }
        else {
            content = (h("span", { class: "full-content" }, h("slot", null)));
        }
        return (h("a", { href: this.href, target: this.target, "aria-label": this.ariaLabel }, content));
    }
};
SourceLinkComponent.TAG_NAME = "snt-source-link";
SourceLinkComponent.style = sourceLinkComponentCss;

export { SourceLinkComponent as snt_source_link };

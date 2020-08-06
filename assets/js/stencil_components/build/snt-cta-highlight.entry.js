import { r as registerInstance, h, g as getElement } from './index-21c05bc9.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { E as EventConfigurationBuilder } from './EventConfigurationBuilder-6e07cd4e.js';
import './event-component-473ec2a7.js';
import './ReflectionUtils-65000824.js';

const ctaHighlightComponentCss = "snt-cta-highlight .left.text-content,.left snt-cta-highlight .text-content{text-align:left}@media (max-width: 767px){snt-cta-highlight snt-layout .left-mobile.text-content,.left-mobile snt-cta-highlight snt-layout .text-content{text-align:left}}snt-cta-highlight .center.text-content,.center snt-cta-highlight .text-content{text-align:center}@media (max-width: 767px){snt-cta-highlight snt-layout .center-mobile.text-content,.center-mobile snt-cta-highlight snt-layout .text-content{text-align:center}}snt-cta-highlight .right.text-content,.right snt-cta-highlight .text-content{text-align:right}@media (max-width: 767px){snt-cta-highlight snt-layout .right-mobile.text-content,.right-mobile snt-cta-highlight snt-layout .text-content{text-align:right}}snt-cta-highlight .cta-container{background:#6ebac5;display:flex;justify-content:center;align-items:center}snt-cta-highlight .cta-container h4.text-content{margin-right:30px;display:inline-block}snt-cta-highlight button-link{display:inline-block}snt-cta-highlight button-link .icon-font::after{color:white}snt-cta-highlight snt-layout[viewport=small] snt-button.cta button{width:100%;margin-bottom:10px}snt-cta-highlight snt-layout[viewport=small] h4.text-content{margin-right:0;display:inline-block;margin-bottom:15px;width:100%}snt-cta-highlight snt-layout[viewport=extra-small] snt-button.cta button{width:100%}snt-cta-highlight snt-layout[viewport=extra-small] .spacings{padding-top:15px;padding-bottom:15px}snt-cta-highlight snt-layout[viewport=small] .spacings{padding-top:15px;padding-bottom:15px}snt-cta-highlight snt-layout[viewport=medium] .spacings{padding-top:15px;padding-bottom:15px}snt-cta-highlight snt-layout[viewport=large] .spacings{padding-top:15px;padding-bottom:15px}snt-cta-highlight snt-layout[viewport=extra-large] .spacings{padding-top:15px;padding-bottom:15px}";

const CtaHighlightComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.url = StringUtils.empty();
        this.urlTarget = StringUtils.empty();
        this.eventConfiguration = null;
    }
    componentDidLoad() {
        if (!StringUtils.isEmpty(this.actionReference)) {
            this.eventConfiguration = EventConfigurationBuilder.newInstanceof().withComponent(this.element).build();
        }
    }
    render() {
        let content;
        if (StringUtils.hasValue(this.url)) {
            content = (h("button-link", { class: "theme-primary", target: this.urlTarget, href: this.url }, this.cta));
        }
        else {
            content = (h("snt-action-button", { "style-classes": "cta theme-primary", "action-reference": this.actionReference, "action-data": this.actionData, "link-title": this.cta }));
        }
        return (h("snt-layout", { class: "cta-container" }, h("div", null, h("h4", { class: "text-content" }, h("slot", null)), content)));
    }
    get element() { return getElement(this); }
};
CtaHighlightComponent.TAG_NAME = "snt-cta-highlight";
CtaHighlightComponent.style = ctaHighlightComponentCss;

export { CtaHighlightComponent as snt_cta_highlight };

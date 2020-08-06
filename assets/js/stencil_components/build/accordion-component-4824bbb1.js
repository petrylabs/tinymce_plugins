import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-21c05bc9.js';
import { W as WebUtils } from './WebUtils-c0d293ee.js';

var AccordionStateEnum;
(function (AccordionStateEnum) {
    AccordionStateEnum[AccordionStateEnum["COLLAPSED"] = 0] = "COLLAPSED";
    AccordionStateEnum[AccordionStateEnum["EXPANDED"] = 1] = "EXPANDED";
})(AccordionStateEnum || (AccordionStateEnum = {}));

class AccordionEvent {
    constructor(state) {
        this.state = state;
    }
}

const accordionComponentCss = "snt-accordion{display:block;width:100%}snt-accordion .card{border:none}snt-accordion.faq-accordion{margin-bottom:5px}snt-accordion.faq-accordion button{white-space:normal;text-align:left;padding:17px 75px 16px 30px}snt-accordion.faq-accordion .card-header{position:relative;overflow:hidden;z-index:0;border:0.25px solid #262626;background-color:#ffffff;padding:0;border-radius:0}snt-accordion.faq-accordion .card-header:before{position:absolute;z-index:-1;top:0;left:0;content:\" \";background-color:#147582;height:0;width:calc(100% + 4px);transition:0.65s height}snt-accordion.faq-accordion .card-header button{position:relative;width:100%;z-index:0;background-color:transparent;border:none}snt-accordion.faq-accordion .card-header button:before{position:absolute;z-index:-1;top:0;left:0;content:\" \";background-color:#147582;width:0;height:2px;transition:0.65s width}snt-accordion.faq-accordion .card-header button:after{position:absolute;top:50%;right:32px;background-position:center;transform:translate(50%, -50%) rotate(0deg);content:\" \";transition:0.65s transform;width:15px;height:15px;background-image:url(\"data:image/svg+xml,%3Csvg width='100%' height='100%' viewBox='0 0 45 45' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 57.1 (83088) - https://sketch.com --%3E%3Ctitle%3Eicon_global_caret_lk%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3Cpath d='M22.4891039,34 C21.9795084,34 21.4699128,33.8149412 21.0709531,33.4448236 L0.680426242,14.6563092 C-0.174487332,13.8689682 -0.23148157,12.5365449 0.553027357,11.6785451 C1.33753628,10.8239099 2.66851938,10.7700746 3.51672775,11.554051 L22.4891039,29.0370597 L41.4815957,11.5574157 C42.3365092,10.7734393 43.6574345,10.8272746 44.4486486,11.6852745 C45.229805,12.5432743 45.1761633,13.8756976 44.3178972,14.6630387 L23.9106072,33.4481883 C23.508295,33.8149412 22.9986994,34 22.4891039,34 Z' id='path-1'%3E%3C/path%3E%3C/defs%3E%3Cg id='icon_global_caret_lk' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cmask id='mask-2' fill='white'%3E%3Cuse xlink:href='%23path-1'%3E%3C/use%3E%3C/mask%3E%3Cuse id='icon_global_caret' fill='%23147582' fill-rule='nonzero' xlink:href='%23path-1'%3E%3C/use%3E%3C/g%3E%3C/svg%3E\")}@media (max-width: 768px){snt-accordion.faq-accordion .card-header button:after{top:24px;right:22.5px}}snt-accordion.faq-accordion .card-header button:hover,snt-accordion.faq-accordion .card-header button:focus{box-shadow:none;outline:0}snt-accordion.faq-accordion .card-header button:hover:before,snt-accordion.faq-accordion .card-header button:focus:before{width:calc(100% + 4px)}snt-accordion.faq-accordion .card-panel{overflow:hidden;transition:height 0.75s;border-left:0.25px solid #262626;border-right:0.25px solid #262626;border-bottom:0.25px solid #262626}snt-accordion.faq-accordion .card-panel.transitioning{display:block}snt-accordion.faq-accordion .card-body{padding:30px}@media (max-width: 768px){snt-accordion.faq-accordion .card-body{padding:20px 45px 20px 15px}}@media (max-width: 450px){snt-accordion.faq-accordion .card-body{padding:20px 15px 20px 15px}}snt-accordion.faq-accordion[expanded] .card-header:before{height:100%}snt-accordion.faq-accordion[expanded] .card-header button{color:#ffffff}snt-accordion.faq-accordion[expanded] .card-header button:before{width:100%}snt-accordion.faq-accordion[expanded] .card-header button:after{background-image:url(\"data:image/svg+xml,%3Csvg width='100%' height='100%' viewBox='0 0 45 45' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 57.1 (83088) - https://sketch.com --%3E%3Ctitle%3Eicon_global_caret_lk%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3Cpath d='M22.4891039,34 C21.9795084,34 21.4699128,33.8149412 21.0709531,33.4448236 L0.680426242,14.6563092 C-0.174487332,13.8689682 -0.23148157,12.5365449 0.553027357,11.6785451 C1.33753628,10.8239099 2.66851938,10.7700746 3.51672775,11.554051 L22.4891039,29.0370597 L41.4815957,11.5574157 C42.3365092,10.7734393 43.6574345,10.8272746 44.4486486,11.6852745 C45.229805,12.5432743 45.1761633,13.8756976 44.3178972,14.6630387 L23.9106072,33.4481883 C23.508295,33.8149412 22.9986994,34 22.4891039,34 Z' id='path-1'%3E%3C/path%3E%3C/defs%3E%3Cg id='icon_global_caret_lk' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cmask id='mask-2' fill='white'%3E%3Cuse xlink:href='%23path-1'%3E%3C/use%3E%3C/mask%3E%3Cuse id='icon_global_caret' fill='%23FFFFFF' fill-rule='nonzero' xlink:href='%23path-1'%3E%3C/use%3E%3C/g%3E%3C/svg%3E\");transform:translate(50%, -50%) rotate(-180deg)}snt-accordion-group{width:100%}snt-accordion-group snt-layout[viewport=medium] snt-accordion.faq-accordion button,snt-accordion-group snt-layout[viewport=small] snt-accordion.faq-accordion button,snt-accordion-group snt-layout[viewport=extra-small] snt-accordion.faq-accordion button{padding:15px 45px 15px 15px}.two-column-combined snt-accordion-group{flex-grow:1}";

const AccordionComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.expanded = false;
        this.accordionEvent = createEvent(this, "accordionEvent", 7);
    }
    async isCollapsed() {
        return Promise.resolve(!this.expanded);
    }
    async isExpanded() {
        return Promise.resolve(this.expanded);
    }
    async collapse() {
        this.expanded = false;
    }
    async expand() {
        this.expanded = true;
    }
    async toggle() {
        if (this.expanded) {
            this.collapse();
        }
        else {
            this.expand();
        }
    }
    /** TODO: Annotate this function **/
    async transition(transitionType) {
        const panel = this.element.querySelector(AccordionComponent.CARD_PANEL);
        panel.classList.add(AccordionComponent.TRANSITIONING_CLASS_NAME);
        if (transitionType == AccordionStateEnum.EXPANDED) {
            const eventualHeight = panel.scrollHeight;
            panel.style.height = "0px";
            await WebUtils.sleep(100);
            panel.style.height = `${eventualHeight}px`;
        }
        else {
            panel.style.height = `${panel.scrollHeight}px`;
            await WebUtils.sleep(100);
            panel.style.height = "0px";
        }
        setTimeout(() => {
            panel.classList.remove(AccordionComponent.TRANSITIONING_CLASS_NAME);
            panel.style.height = "";
            return Promise.resolve();
        }, (parseFloat(getComputedStyle(panel).transitionDuration) * 650));
    }
    expandedChanged(newValue) {
        this.accordionEvent.emit(new AccordionEvent(this.expanded ? AccordionStateEnum.EXPANDED : AccordionStateEnum.COLLAPSED));
        const transitionType = (newValue == true) ? AccordionStateEnum.EXPANDED : AccordionStateEnum.COLLAPSED;
        this.transition(transitionType).then(null);
    }
    render() {
        const accordionId = this.element.id;
        const panelClass = `card-panel collapse ${this.expanded ? "show" : ""}`;
        const ariaExpanded = (this.expanded) ? "true" : "false";
        return (h(Host, { expanded: this.expanded }, h("div", { class: "card pas-accordion" }, h("div", { id: `${accordionId}-header`, class: "card-header" }, h("button", { onClick: this.toggle.bind(this), class: "btn accordion-btn", "aria-expanded": ariaExpanded, "aria-controls": `${accordionId}-panel` }, h("div", { class: "mb-0 h4" }, h("slot", { name: "summary" })))), h("div", { id: `${accordionId}-panel`, class: panelClass, "aria-labelledby": `${accordionId}-header` }, h("div", { class: "card-body" }, h("slot", { name: "details" }))))));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "expanded": ["expandedChanged"]
    }; }
};
AccordionComponent.TAG_NAME = "snt-accordion";
AccordionComponent.CARD_PANEL = ".card-panel";
AccordionComponent.TRANSITIONING_CLASS_NAME = "transitioning";
AccordionComponent.style = accordionComponentCss;

export { AccordionComponent as A, AccordionStateEnum as a };

import { r as registerInstance, h, H as Host, g as getElement } from './index-21c05bc9.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-c0d293ee.js';

class AnimationUtils {
    static collapseElement(element) {
        // get the height of the element's inner content, regardless of its actual size
        const sectionHeight = element.scrollHeight;
        // temporarily disable all css transitions
        const elementTransition = element.style.transition;
        element.style.transition = '';
        // on the next frame (as soon as the previous style change has taken effect),
        // explicitly set the element's height to its current pixel height, so we
        // aren't transitioning out of 'auto'
        requestAnimationFrame(() => {
            element.style.height = sectionHeight + 'px';
            element.style.transition = elementTransition;
            // on the next frame (as soon as the previous style change has taken effect),
            // have the element transition to height: 0
            requestAnimationFrame(() => {
                element.style.height = 0 + 'px';
                // make element hidden to prevent elements within it being focusable
                element.style.visibility = 'hidden';
            });
        });
    }
    static expandElement(element) {
        // get the height of the element's inner content, regardless of its actual size
        const sectionHeight = element.scrollHeight;
        // make element visible to allow elements within it becoming focusable again
        element.style.visibility = "visible";
        // have the element transition to the height of its inner content
        element.style.height = sectionHeight + 'px';
        // when the next css transition finishes (which should be the one we just triggered)
        element.addEventListener('transitionend', function fn(_evt) {
            element.style.height = "auto";
            // remove this event listener so it only gets triggered once
            element.removeEventListener('transitionend', fn);
            // remove "height" from the element's inline styles, so it can return to its initial value
            //element.style.height = null;
        });
    }
}

const paneComponentCss = "snt-pane{width:100%;display:block}snt-pane[animated]{height:auto;overflow:hidden;transition:height 0.3s ease}";

const PaneComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.collapsed = false;
        this.animated = false;
        this.styleClasses = StringUtils.empty();
    }
    async toggleCollapsed(collapsed) {
        this.collapsed = (typeof (collapsed) === "boolean") ? collapsed : this.collapsed;
        return this.collapsed;
    }
    onCollapsed(collapsed) {
        if (this.animated)
            (collapsed) ? AnimationUtils.collapseElement(this.element) : AnimationUtils.expandElement(this.element);
    }
    listenButtonEvent(_event) {
        this.collapsed = !this.collapsed;
    }
    render() {
        return (h(Host, { class: WebUtils.generateClasses([], this.styleClasses), "aria-hidden": this.collapsed ? "true" : "false" }, h("slot", null)));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "collapsed": ["onCollapsed"]
    }; }
};
PaneComponent.style = paneComponentCss;

export { PaneComponent as snt_pane };

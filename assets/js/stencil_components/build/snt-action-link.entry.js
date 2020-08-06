import { r as registerInstance, h, g as getElement } from './index-21c05bc9.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { a as EventConfigurationUtils, E as EventConfigurationBuilder } from './EventConfigurationBuilder-6e07cd4e.js';
import './event-component-473ec2a7.js';
import './ReflectionUtils-65000824.js';

const ActionLinkComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.actionReference = StringUtils.empty();
        this.linkTitle = StringUtils.empty();
        this.iconClassName = StringUtils.empty();
        this.eventConfiguration = null;
    }
    async getEventConfiguration() {
        return this.eventConfiguration;
    }
    sntBtnEvent(event) {
        EventConfigurationUtils.processEvent(event, this.eventConfiguration, this.actionReference);
    }
    componentDidLoad() {
        if (StringUtils.isEmpty(this.actionReference)) {
            throw new Error("SntActionLink must contain a valid action-reference attribute!");
        }
        this.eventConfiguration = EventConfigurationBuilder.newInstanceof().withComponent(this.element).build();
    }
    render() {
        const icon = (StringUtils.notEmpty(this.iconClassName)) ? h("snt-icon", { styleClasses: this.iconClassName }) : "";
        const button = h("snt-link", null, icon, this.linkTitle); //test
        const events = (this.element.children.length > 0) ? h("slot", null) : [h("snt-event", { type: "click" }), h("snt-event", { type: "keydown", filters: "space" })];
        return [events, button];
    }
    get element() { return getElement(this); }
};
ActionLinkComponent.TAG_NAME = "snt-action-link";

export { ActionLinkComponent as snt_action_link };

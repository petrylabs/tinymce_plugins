import { r as registerInstance, h, H as Host } from './index-21c05bc9.js';

const EventComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillLoad() { }
    componentWillUpdate() { }
    componentDidLoad() { }
    render() {
        return (h(Host, null, h("slot", null)));
    }
};
EventComponent.TAG_NAME = "snt-event";

export { EventComponent as E };

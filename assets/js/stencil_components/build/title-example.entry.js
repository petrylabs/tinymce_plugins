import { r as registerInstance, h } from './index-21c05bc9.js';

const TitleExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("div", null, h("h3", null, "h1 example"), h("snt-title", { "title-type": 'h1' }, "This is sample title"), h("br", null), h("h3", null, "h2 example"), h("snt-title", { "title-type": 'h2' }, "This is sample title"), h("br", null), h("h3", null, "h3 example"), h("snt-title", { "title-type": 'h3' }, "This is sample title"), h("br", null), h("h3", null, "h4 example"), h("snt-title", { "title-type": 'h4' }, "This is sample title"), h("br", null))
        ];
    }
};

export { TitleExample as title_example };

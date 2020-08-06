import { r as registerInstance, h, H as Host, g as getElement } from './index-21c05bc9.js';
import { V as ViewportObserverManager } from './ViewportObserverManager-d617b144.js';

const panelComponentCss = "snt-panel{display:block;width:100%;min-height:39.063em;background-repeat:no-repeat;background-size:cover}";

const PanelComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidLoad() {
        const configEl = this.element.querySelector("snt-data");
        if (configEl) {
            const config = JSON.parse(configEl.innerHTML);
            // Create array from JSON obj keys, cast to number array, sort descending
            const viewportSizes = ((Object.keys(config.viewport)).map(Number)).sort((a, b) => b - a);
            ViewportObserverManager.getInstance().observe(this.element, (entries) => {
                const entry = entries[0];
                for (let viewportSize of viewportSizes) {
                    if (entry.contentRect.width >= viewportSize) {
                        console.log(entry.contentRect.width + " >= " + viewportSize);
                        const style = config.viewport[viewportSize].style;
                        for (let styleKey of (Object.keys(style))) {
                            this.element.style[styleKey] = style[styleKey];
                        }
                        const elClass = config.viewport[viewportSize]["class"];
                        if (elClass) {
                            for (let classVal of elClass) {
                                if (!this.element.classList.contains(classVal)) {
                                    this.element.classList.add(classVal);
                                }
                            }
                        }
                        break;
                    }
                }
            });
        }
    }
    render() {
        return (h(Host, null, h("snt-layout", null, h("slot", null))));
    }
    get element() { return getElement(this); }
};
PanelComponent.style = panelComponentCss;

export { PanelComponent as snt_panel };

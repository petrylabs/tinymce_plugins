import { r as registerInstance, h, H as Host } from './index-21c05bc9.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-c0d293ee.js';

const searchPanelComponentCss = "snt-search-panel{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-flow:column nowrap;transform:translateX(-100%);transition:0.3s ease-out;background-color:#323232;padding:15px 30px 30px}snt-search-panel:not(.active){visibility:hidden}snt-search-panel[active]{transform:translateX(0%);visibility:visible}@media (min-width: 1024px){snt-search-panel{display:none}}snt-search-panel snt-search-typeahead{margin-top:1.25rem}snt-search-panel snt-action-button snt-icon{margin-right:0.5rem;transform:rotate(180deg);display:inline-block}";

const SearchPanelComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.languageStrings = {};
        this.active = false;
        this.styleClasses = StringUtils.empty();
        this.languageJson = StringUtils.empty();
    }
    async toggleActive(active) {
        this.active = (typeof (active) === "boolean") ? active : !this.active;
        return this.active;
    }
    componentWillLoad() {
        try {
            this.languageJson && (this.languageStrings = JSON.parse(this.languageJson));
        }
        catch (e) {
            console.error(e);
        }
        ;
    }
    render() {
        return (h(Host, { class: WebUtils.generateClasses([], this.styleClasses) }, h("snt-action-button", { actionReference: "Action.toggleSearch", linkTitle: this.languageStrings["back"] || "Back", iconClassName: "iconChevron" }), h("snt-search-typeahead", { languageJson: this.languageJson })));
    }
};
SearchPanelComponent.TAG_NAME = "snt-search-panel";
SearchPanelComponent.style = searchPanelComponentCss;

export { SearchPanelComponent as S };

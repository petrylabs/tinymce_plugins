import { r as registerInstance, h, H as Host } from './index-21c05bc9.js';
import { S as StringUtils } from './StringUtils-617c552f.js';

const searchBarComponentCss = "snt-search-bar{display:none}snt-search-bar snt-pane{position:absolute;top:100%;left:0;right:0;background-color:#323232;border-top:1px solid #fcfcfc;padding:0.625rem 0;display:none}snt-search-bar[active]{display:block}snt-search-bar[active] snt-backdrop{display:block}snt-search-bar snt-search-typeahead{margin:0 0.75rem}snt-search-bar snt-search-typeahead+* snt-icon{font-size:0.875rem}";

const SearchBarComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.languageJson = StringUtils.empty();
    }
    async toggleActive(active) {
        this.active = (typeof (active) === "boolean") || !this.active;
        return this.active;
    }
    watchActive(active) {
        if (active) {
            this.lastActiveElement = document.activeElement;
        }
    }
    componentDidUpdate() {
        this.setFocus();
    }
    setFocus() {
        if (this.active) {
            const input = this.searchTypeahead.querySelector("input");
            if (input) {
                input.focus();
            }
        }
        else {
            this.lastActiveElement.focus();
        }
    }
    render() {
        return (h(Host, { onSntBackdropTap: this.toggleActive.bind(this) }, h("snt-pane", { styleClasses: "d-flex justify-content-center align-items-center" }, h("snt-search-typeahead", { ref: (el) => this.searchTypeahead = el, languageJson: this.languageJson }), h("snt-action-button", { "action-reference": "Action.toggleSearch", "icon-class-name": "iconNavClose" })), ",", h("snt-backdrop", null)));
    }
    static get watchers() { return {
        "active": ["watchActive"]
    }; }
};
SearchBarComponent.TAG_NAME = "snt-search-bar";
SearchBarComponent.style = searchBarComponentCss;

export { SearchBarComponent as S };

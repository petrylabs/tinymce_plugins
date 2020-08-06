import { r as registerInstance, h } from './index-21c05bc9.js';
import { S as StringUtils } from './StringUtils-617c552f.js';

class UrlUtils {
    static updateQueryStringParameter(url, key, value) {
        if (!url)
            url = window.location.href;
        var re = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "gi"), hash;
        if (re.test(url)) {
            if (typeof value !== 'undefined' && value !== null)
                return url.replace(re, '$1' + key + "=" + value + '$2$3');
            else {
                hash = url.split('#');
                url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');
                if (typeof hash[1] !== 'undefined' && hash[1] !== null)
                    url += '#' + hash[1];
                return url;
            }
        }
        else {
            if (typeof value !== 'undefined' && value !== null) {
                var separator = url.indexOf('?') !== -1 ? '&' : '?';
                hash = url.split('#');
                url = hash[0] + separator + key + '=' + value;
                if (typeof hash[1] !== 'undefined' && hash[1] !== null)
                    url += '#' + hash[1];
                return url;
            }
            else
                return url;
        }
    }
    ;
}

const searchTypeaheadComponentCss = "snt-search-typeahead{position:relative;background-color:#ffffff;width:100%;max-width:47rem}snt-search-typeahead input{box-sizing:border-box;width:100%;height:2.525rem;padding:0 3rem 0 0.75rem;font-size:0.875rem;line-height:1.25rem}snt-search-typeahead snt-button button{position:absolute;right:0.5rem;top:0;bottom:0;margin:auto;font-size:1.125rem;line-height:1.125rem;color:#323232}";

const SearchTypeaheadComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.baseHref = StringUtils.empty();
        this.searchHref = this.baseHref;
        this.languageStrings = {};
        this.languageJson = StringUtils.empty();
    }
    handleSearchButtonClick(evt) {
        if (evt.target == this.searchSntButton) {
            window.location.href = this.searchHref;
        }
    }
    onKeyDown(evt) {
        if (evt.key && evt.key == 'Enter' || evt.keyCode && evt.keyCode == 13) {
            window.location.href = this.searchHref;
        }
    }
    onInput() {
        this.searchHref = UrlUtils.updateQueryStringParameter(this.baseHref, 'searchtext', encodeURIComponent(this.input.value) + '&searchmode=anyword');
    }
    componentWillLoad() {
        try {
            this.languageJson && (this.languageStrings = JSON.parse(this.languageJson));
        }
        catch (e) {
            console.error(e);
        }
        ;
        this.baseHref = this.languageStrings["searchUrl"];
    }
    render() {
        return (h("div", { class: "search-input-area" }, h("input", { type: "text", ref: elem => (this.input = elem), onInput: this.onInput.bind(this), onKeyDown: this.onKeyDown.bind(this), placeholder: this.languageStrings["search"] || "Search" }), h("snt-button", { ref: elem => {
                this.searchSntButton = elem;
            } }, h("snt-icon", { styleClasses: "iconNavSearch" }), h("span", { class: "sr-only" }, this.languageStrings["search"] || "Search"))));
    }
};
SearchTypeaheadComponent.TAG_NAME = "snt-search-typeahead";
SearchTypeaheadComponent.style = searchTypeaheadComponentCss;

export { SearchTypeaheadComponent as snt_search_typeahead };

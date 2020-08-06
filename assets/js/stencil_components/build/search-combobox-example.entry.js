import { r as registerInstance, h } from './index-21c05bc9.js';

const SearchComboboxExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const languageString1 = `{\"search\":\"Rechercher\"}`;
        return (h("div", { class: "wrapper" }, h("div", { id: "example-one" }, h("a", { href: "javascript:void(0);", title: "Focusable Element 1" }, "Focusable Element 1"), h("br", null), h("br", null), h("h4", { id: "search-example-1-label" }, "Sonnet recherche"), h("snt-search-combobox", { id: "search-example-1", class: "theme-default", "search-function-ref": "Search.getResults", "aria-labelledby": "search-example-1-label", "auto-complete": true, "language-string": languageString1 }), h("br", null), h("a", { href: "javascript:void(0);", title: "Focusable Element 2" }, "Focusable Element 2"))));
    }
};
SearchComboboxExample.style = ".wrapper { \n            margin: 0 auto; \n            max-width: 80%; \n        }\n        #example-one {\n            max-width: 460px;\n        }";

export { SearchComboboxExample as search_combobox_example };

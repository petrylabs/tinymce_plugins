import './index-21c05bc9.js';
import './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-c0d293ee.js';
import { M as ModalComponent, a as ModalOptions } from './modal-component-71473144.js';
import './index-1490dfbf.js';
import { H as HtmlContentBuilder } from './HtmlContentBuilder-29f16d18.js';

class ModalBuilder {
    constructor() {
    }
    static newInstance() {
        return new ModalBuilder();
    }
    withTitle(title) {
        this.modalTitle = title;
        return this;
    }
    withId(id) {
        this.id = id;
        return this;
    }
    withLanguageString(languageString) {
        this.languageString = languageString;
        return this;
    }
    withOptions(options) {
        this.options = options;
        return this;
    }
    withContent(content) {
        this.content = content;
        return this;
    }
    withFooter(footer) {
        this.footer = footer;
        return this;
    }
    build() {
        const component = document.createElement(ModalComponent.TAG_NAME);
        if (this.id) {
            component.id = this.id;
        }
        if (this.modalTitle) {
            component.modalTitle = this.modalTitle;
        }
        if (this.languageString) {
            component.languageString = this.languageString;
        }
        if (this.options) {
            component.options = this.options;
        }
        WebUtils.appendElement(component, this.content, true);
        WebUtils.appendElement(component, this.footer, false);
        return component;
    }
}

class ModalOptionsBuilder {
    constructor() {
        this.modalOptions = new ModalOptions();
    }
    static newInstance() {
        return new ModalOptionsBuilder();
    }
    withKeyboardClose(value) {
        this.modalOptions.keyboardClose = value;
        return this;
    }
    withBackdropDismiss(value) {
        this.modalOptions.backdropDismiss = value;
        return this;
    }
    build() {
        return this.modalOptions;
    }
}

class Action {
    static toggleSearch(event) {
        const close = new CustomEvent('toggleSearch', { bubbles: true, detail: {} });
        event.target.dispatchEvent(close);
    }
    static logAction(event) {
        window.alert("ACTION initiated from " + event.target.innerText);
        event.target.style.outline = "1px solid red";
        setTimeout(() => {
            event.target.style.outline = "none";
        }, 100);
    }
    static openGetQuoteModal(_event, actionData) {
        const languageString = (actionData) ? JSON.stringify(actionData["languageString"]) : "";
        const getAQuoteUrl = actionData ? actionData['getAQuoteUrl'] || '/getAQuote' : '/getAQuote';
        let modal = document.querySelector(ModalComponent.TAG_NAME);
        if (!modal) {
            HtmlContentBuilder.newInstance()
                .withUrl(new URL(getAQuoteUrl, window.location.origin))
                .build().then((contentFromUrl) => {
                modal = ModalBuilder.newInstance()
                    .withId("gaq-modal")
                    .withLanguageString(languageString)
                    .withOptions(ModalOptionsBuilder.newInstance()
                    .withBackdropDismiss(true)
                    .withKeyboardClose(true)
                    .build())
                    .withContent(contentFromUrl)
                    .build();
                if (modal) {
                    document.body.appendChild(modal);
                    modal.show();
                }
            });
        }
        else {
            modal.show();
        }
    }
    static close(event) {
        const close = new CustomEvent('close', { bubbles: true, detail: {} });
        event.target.dispatchEvent(close);
    }
}

class SearchSuggestion {
    constructor(title = "", url = "") {
        this.title = title;
        this.url = url;
    }
}

class Search {
    static getResults(query) {
        return Search.result.filter((datum) => {
            const substrRegex = new RegExp(query, 'i');
            const isMatch = (substrRegex.test(datum['title']));
            return isMatch === true;
        });
    }
}
Search.result = [
    new SearchSuggestion("Auto Insurance", "/auto-insurance"),
    new SearchSuggestion("Home Insurance", "/home-insurance"),
    new SearchSuggestion("Tenant Insurance", "/tenant-insurance"),
    new SearchSuggestion("Landlord Insurance", "/landlord-insurance"),
    new SearchSuggestion("Claims", "/claims"),
    new SearchSuggestion("Blog", "/blog"),
    new SearchSuggestion("Sonnet Connect", "/sonnet-connect")
];

export { Action, Search };

import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-21c05bc9.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { K as KeyboardEventProcessorBuilder, a as Keyboard, N as NavigationDirectionEnum } from './Keyboard-7a3a52e7.js';
import { R as ReflectionUtils } from './ReflectionUtils-65000824.js';
import { L as LanguageUtils } from './LanguageUtils-7936212b.js';

const searchComboboxComponentCss = "snt-search-combobox{display:block;position:relative;background-color:#ffffff;width:100%}snt-search-combobox input{box-sizing:border-box;width:100%;height:2.525rem;font-size:0.875rem;line-height:1.25rem}snt-search-combobox snt-button button{display:none;position:absolute;right:0.5rem;top:0;bottom:0;margin:auto;font-size:1.125rem;line-height:1.125rem;color:#323232}snt-search-combobox.theme-default{background-color:transparent}snt-search-combobox.theme-default :focus{outline:none}snt-search-combobox.theme-default snt-button{display:none}snt-search-combobox.theme-default snt-icon{margin:0 0.625rem 0 1.25rem}snt-search-combobox.theme-default input{border:none;border-radius:0;background-color:transparent}snt-search-combobox.theme-default ul{list-style:none;margin:0;padding:0}snt-search-combobox.theme-default .search-input-area{display:flex;align-items:center;background-color:#ffffff;box-sizing:border-box;border:1px solid #b2b2b2;border-radius:25px}snt-search-combobox.theme-default .search-input-area:hover{border-color:#147582}snt-search-combobox.theme-default .search-results-area{display:none;color:#323232;position:absolute;left:0;right:0;top:100%;width:100%;padding:0.625rem;box-sizing:border-box;text-align:left;border:1px solid transparent;border-top:none;border-bottom-left-radius:25px;border-bottom-right-radius:25px;background-color:white}snt-search-combobox.theme-default .search-results-area:before{position:absolute;content:\" \";height:1px;margin-right:auto;margin-left:auto;top:0;left:0;right:0;width:calc(100% - 2rem);background-color:#147582}snt-search-combobox.theme-default .result{padding:0.3125rem 0.625rem;font-size:14px;line-height:23px;border-bottom:1px solid #e5e5e5}snt-search-combobox.theme-default .result:last-child{border-bottom:none}snt-search-combobox.theme-default.search-combobox-has-focus snt-backdrop{display:block;background-color:rgba(50, 50, 50, 0.2)}snt-search-combobox.theme-default.search-combobox-is-expanded .search-input-area{border:1px solid transparent;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom:none;pointer-events:all}snt-search-combobox.theme-default.search-combobox-is-expanded .search-results-area{display:block}snt-search-combobox.theme-default .result{cursor:default}snt-search-combobox.theme-default .result:hover,snt-search-combobox.theme-default .result.result-is-focused{background-color:#f8f8f8}snt-search-combobox.theme-default .result b{pointer-events:none}";

const SearchComboboxComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * State Variables
         */
        this.focused = false;
        this.expanded = false;
        /**
         * Public Properties API
         */
        this.autoComplete = false;
        this.ariaLabelledby = StringUtils.empty();
        this.ariaLabel = StringUtils.empty();
        this.languageJson = StringUtils.empty();
        this.languageString = StringUtils.empty();
        this.searchFunctionRef = StringUtils.empty();
        this.value = '';
        /**
         * Prop Lifecycle Events
         */
        this.activeIndex = -1;
        this.sntInput = createEvent(this, "sntInput", 7);
        this.sntFocus = createEvent(this, "sntFocus", 7);
        this.sntBlur = createEvent(this, "sntBlur", 7);
    }
    activeIndexChange(activeIndex) {
        if (this.autoComplete && activeIndex != -1) {
            this.value = this.SearchSuggestion[this.activeIndex].title;
        }
    }
    /**
     * Component Lifecycle Events
     */
    componentWillLoad() {
        if (StringUtils.isEmpty(this.hostElement.id)) {
            throw new Error(`${SearchComboboxComponent.TAG_NAME} must have a valid id.`);
        }
        if (this.searchFunctionRef) {
            ReflectionUtils.getObjectReference(this.searchFunctionRef).then((searchFunction) => {
                this.searchFunction = searchFunction;
            });
        }
        else {
            throw new Error(`${SearchComboboxComponent.TAG_NAME} requires a valid reference to a search function.`);
        }
        this.languageVariables = LanguageUtils.getVariablesFromString(this.languageString, ["search"]);
        this.initKeyboardEventProcessor();
    }
    /**
     * Listeners
     */
    onClick(evt) {
        if (evt.target === this.input || this.hostElement.contains(evt.target)) {
            return;
        }
        this.focused = this.expanded = false;
    }
    /**
     * Public Methods API
     */
    async setFocus() {
        if (this.input) {
            this.input.focus();
        }
        return Promise.resolve();
    }
    async getInputElement() {
        return Promise.resolve(this.input);
    }
    /**
     * Local Methods
     */
    onFocus() {
        this.focused = true;
        this.sntFocus.emit();
        this.updateSearchSuggestions();
    }
    onInput(evt) {
        const input = evt.target;
        if (input) {
            this.value = input.value;
        }
        this.updateSearchSuggestions();
        this.sntInput.emit(evt);
    }
    onListboxClick(evt) {
        if (evt.target) {
            if (evt.target.nodeName == "LI") {
                this.activeIndex = evt.target.dataset.index;
                this.selectItem();
            }
        }
    }
    selectItem() {
        if (this.activeIndex !== -1) {
            this.value = this.SearchSuggestion[this.activeIndex].title;
            this.expanded = false;
        }
    }
    clear() {
        this.expanded = false;
        this.value = StringUtils.empty();
    }
    dismiss() {
        this.focused = this.expanded = false;
    }
    updateSearchSuggestions() {
        this.SearchSuggestion = this.searchFunction(this.input.value);
        this.expanded = this.SearchSuggestion.length > 0;
    }
    initKeyboardEventProcessor() {
        this.keyboardEventProcessor = KeyboardEventProcessorBuilder.newInstance()
            .withKey(Keyboard.ARROW_UP, () => this.setNextActiveIndex(NavigationDirectionEnum.BACKWARDS))
            .withKey(Keyboard.ARROW_DOWN, () => this.setNextActiveIndex(NavigationDirectionEnum.FORWARDS))
            .withKey(Keyboard.HOME, () => this.setNextActiveIndex(NavigationDirectionEnum.FIRST))
            .withKey(Keyboard.END, () => this.setNextActiveIndex(NavigationDirectionEnum.LAST))
            .withKey(Keyboard.ENTER, () => this.selectItem())
            .withKey(Keyboard.ESCAPE, () => this.clear())
            .withKey(Keyboard.TAB, () => this.dismiss())
            .build();
    }
    processKeyboardEvent(evt) {
        this.keyboardEventProcessor.process(evt);
    }
    setNextActiveIndex(direction) {
        if (direction == NavigationDirectionEnum.BACKWARDS) {
            this.activeIndex = this.activeIndex <= 0 ?
                this.SearchSuggestion.length - 1 :
                this.activeIndex - 1;
        }
        else if (direction == NavigationDirectionEnum.FORWARDS) {
            this.activeIndex = this.activeIndex >= this.SearchSuggestion.length - 1 ?
                0 :
                this.activeIndex + 1;
        }
        else if (direction == NavigationDirectionEnum.FIRST) {
            this.activeIndex = 0;
        }
        else if (direction == NavigationDirectionEnum.LAST) {
            this.activeIndex = this.SearchSuggestion.length - 1;
        }
    }
    highlightPattern(text, pattern) {
        const splitText = text.split(pattern);
        if (splitText.length <= 1) {
            return text;
        }
        const matches = text.match(pattern);
        return splitText.reduce((arr, element, index) => (matches[index] ? [
            ...arr,
            element,
            h("b", null, matches[index]),
        ] : [...arr, element]), []);
    }
    ;
    render() {
        const comboboxId = this.hostElement.id ? `${this.hostElement.id}-combobox` : null;
        const textboxId = this.hostElement.id ? `${this.hostElement.id}-textbox` : null;
        const listboxId = this.hostElement.id ? `${this.hostElement.id}-listbox` : null;
        const resultItemPrefix = "result-item-";
        return (h(Host, { class: {
                'search-combobox-has-focus': this.focused,
                'search-combobox-is-expanded': this.expanded
            } }, StringUtils.notEmpty(this.ariaLabel) ?
            h("label", { htmlFor: textboxId, class: "sr-only" }, this.ariaLabel) : null, h("div", { role: "combobox", id: comboboxId, "aria-haspopup": "listbox", "aria-owns": listboxId, "aria-expanded": this.expanded.toString(), class: "search-input-area" }, h("snt-icon", { styleClasses: "iconNavSearch" }), h("input", { type: "text", id: textboxId, role: "textbox", "aria-labelledby": this.ariaLabelledby || null, "aria-autocomplete": "both", "aria-controls": listboxId, "aria-activedescendant": this.activeIndex >= 0 ? resultItemPrefix + this.activeIndex : null, onInput: this.onInput.bind(this), onFocus: this.onFocus.bind(this), onKeyDown: this.processKeyboardEvent.bind(this), placeholder: this.languageVariables.get("search"), ref: elem => (this.input = elem), value: this.value })), h("ul", { id: listboxId, role: "listbox", class: "search-results-area", onClick: this.onListboxClick.bind(this) }, (this.focused && this.SearchSuggestion.length > 0) ?
            this.SearchSuggestion.map((SearchSuggestionItem, index) => h("li", { role: "option", "aria-selected": index == this.activeIndex, id: resultItemPrefix + index, class: {
                    'result': true,
                    'result-is-focused': index == this.activeIndex
                }, "data-index": index }, this.highlightPattern(SearchSuggestionItem.title, new RegExp(this.input.value, 'ig'))))
            : null), this.focused ? h("snt-backdrop", null) : null));
    }
    get hostElement() { return getElement(this); }
    static get watchers() { return {
        "activeIndex": ["activeIndexChange"]
    }; }
};
SearchComboboxComponent.TAG_NAME = "snt-search-combobox";
SearchComboboxComponent.style = searchComboboxComponentCss;

export { SearchComboboxComponent as snt_search_combobox };

import { r as registerInstance, c as createEvent, h } from './index-21c05bc9.js';

const faqFilterSliderComponentCss = "snt-faq-filter-slider .wrapper{position:relative;overflow:hidden;box-shadow:0.2px 0.2px 10px #e5e5e5}snt-faq-filter-slider .right-gradient{position:absolute;pointer-events:none;right:0px;top:0px;width:21px;height:45px;z-index:10;background-image:linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%)}snt-faq-filter-slider .left-gradient{position:absolute;left:0px;top:0px;width:21px;height:45px;z-index:10;background-image:linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);pointer-events:none}snt-faq-filter-slider .filter-container{position:relative;width:100%;height:45px;line-height:45px;text-align:center;overflow-x:scroll;padding:0px;overflow-y:hidden;-webkit-overflow-scrolling:touch}snt-faq-filter-slider nav{width:100%}snt-faq-filter-slider ul{list-style:none;display:inline-block;margin:0px 7px 0px 7px;padding:0px;overflow:scroll;overflow-y:hidden;height:45px}snt-faq-filter-slider li{display:inline;margin:0px 13px;color:#323232;font-family:Averta;font-size:16px;letter-spacing:0;line-height:21px;overflow:scroll}snt-faq-filter-slider a{color:#323232;font-family:SANS-SERIF;font-size:16px;letter-spacing:0;line-height:21px;width:auto;height:21px}snt-faq-filter-slider a:hover{color:#9e0a9a;text-decoration:none !important}snt-faq-filter-slider a.active,snt-faq-filter-slider a:focus{text-decoration:underline;background-color:transparent;text-decoration-color:#147582}snt-faq-filter-slider ::-webkit-scrollbar{width:0px;background:transparent;}snt-faq-filter-slider li:first-child{margin-left:30px}snt-faq-filter-slider li:last-child{margin-right:30px}snt-faq-filter-slider snt-layout .spacings{padding-left:0px !important;padding-right:0px !important}snt-faq-filter-slider snt-layout[viewport=medium] .right-gradient{width:100px}snt-faq-filter-slider snt-layout[viewport=medium] .left-gradient{width:100px}snt-faq-filter-slider snt-layout[viewport=medium] li:first-child{margin-left:75px}snt-faq-filter-slider snt-layout[viewport=medium] li:last-child{margin-right:75px}snt-faq-filter-slider snt-layout[viewport=large] .wrapper{display:none}snt-faq-filter-slider snt-layout[viewport=extra-large] .wrapper{display:none}";

const FAQFilterSliderComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.faqFilterClick = createEvent(this, "faqFilterClick", 7);
    }
    componentWillLoad() {
        this._filterArr = JSON.parse(this.filterItems);
        this.currentActive = this._filterArr.length != 0 ? this._filterArr[0] : "";
    }
    onFilterClick(filterTitle) {
        this.currentActive = filterTitle;
        this.faqFilterClick.emit(filterTitle);
    }
    render() {
        return [
            h("snt-layout", null, h("div", { class: "wrapper" }, h("div", { class: "right-gradient" }), h("div", { class: "left-gradient" }), h("div", { class: "filter-container" }, h("nav", { "aria-label": this.menuAriaLabel }, h("ul", null, this._filterArr.map(item => (h("li", null, h("a", { href: "#", class: item.key == this.currentActive ? "active" : "", onClick: this.onFilterClick.bind(this, item.key) }, item.title)))))))))
        ];
    }
};
FAQFilterSliderComponent.TAG_NAME = "snt-faq-filter-slider";
FAQFilterSliderComponent.style = faqFilterSliderComponentCss;

export { FAQFilterSliderComponent as snt_faq_filter_slider };

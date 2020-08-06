import { r as registerInstance, h } from './index-21c05bc9.js';

var TitleTypeEnum;
(function (TitleTypeEnum) {
    TitleTypeEnum["h1"] = "h1";
    TitleTypeEnum["h2"] = "h2";
    TitleTypeEnum["h3"] = "h3";
    TitleTypeEnum["h4"] = "h4";
})(TitleTypeEnum || (TitleTypeEnum = {}));

const titleComponentCss = ".light-fill snt-title,snt-title.light-fill{display:block;background-color:#d9f0f4;color:#323232}.neutral-fill snt-title,snt-title.neutral-fill{display:block;background-color:#f8f8f8;color:#323232}.dark-fill snt-title,snt-title.dark-fill{display:block;background-color:#147582;color:#ffffff}.white-fill snt-title,snt-title.white-fill{display:block;background-color:#ffffff;color:#323232}.error-fill snt-title,snt-title.error-fill{display:block;background-color:#d9f0f4;background-image:none;color:#323232}snt-title .left.header,.left snt-title .header{text-align:left}@media (max-width: 767px){snt-title snt-layout .left-mobile.header,.left-mobile snt-title snt-layout .header{text-align:left}}snt-title .center.header,.center snt-title .header{text-align:center}@media (max-width: 767px){snt-title snt-layout .center-mobile.header,.center-mobile snt-title snt-layout .header{text-align:center}}snt-title .right.header,.right snt-title .header{text-align:right}@media (max-width: 767px){snt-title snt-layout .right-mobile.header,.right-mobile snt-title snt-layout .header{text-align:right}}snt-title .header{text-align:center}snt-title .title-combined-top snt-layout .spacings,.title-combined-top snt-title snt-layout .spacings,snt-title.title-combined-top snt-layout .spacings{padding-top:0.813em !important}@media (min-width: 1024px){snt-title .title-combined-top snt-layout .spacings,.title-combined-top snt-title snt-layout .spacings,snt-title.title-combined-top snt-layout .spacings{padding-top:0.938em !important}}snt-title .title-combined-bottom snt-layout .spacings,.title-combined-bottom snt-title snt-layout .spacings,snt-title.title-combined-bottom snt-layout .spacings{padding-bottom:0.813em !important}@media (min-width: 1024px){snt-title .title-combined-bottom snt-layout .spacings,.title-combined-bottom snt-title snt-layout .spacings,snt-title.title-combined-bottom snt-layout .spacings{padding-bottom:0.938em !important}}";

const TitleComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    getContent(titleType) {
        switch (titleType) {
            case TitleTypeEnum.h1: return (h("h1", { class: "header" }, h("slot", null)));
            case TitleTypeEnum.h2: return (h("h2", { class: "header" }, h("slot", null)));
            case TitleTypeEnum.h3: return (h("h3", { class: "header" }, h("slot", null)));
            case TitleTypeEnum.h4: return (h("h4", { class: "header" }, h("slot", null)));
            default: return "";
        }
    }
    render() {
        let content = this.getContent(this.titleType);
        return [
            h("snt-layout", null, content)
        ];
    }
};
TitleComponent.TAG_NAME = "snt-title";
TitleComponent.style = titleComponentCss;

export { TitleComponent as snt_title };

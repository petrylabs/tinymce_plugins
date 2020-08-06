import { r as registerInstance, h } from './index-21c05bc9.js';

const AdExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("div", null, h("h1", null, "Ad"), h("div", { class: "row" }, h("div", { class: "col-sm-12 col-md-6 col-lg-4 neutral-fill" }, h("snt-ad", { "icon-sources": '{\n                                "largeIconUrl": ""\n                            }', "title-string": "My Title" }, h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))), h("br", null), h("h1", null, "Ad With Logo"), h("div", { class: "row" }, h("div", { class: "col-sm-12 col-md-6 col-lg-4 primary-fill" }, h("snt-ad", { "icon-sources": '{\n                                "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png",\n                                "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png"\n                            }', "logo-sources": '{\n                                "smallLogoUrl":"https://via.placeholder.com/230x60?text=Mobile",\n                                "mediumLogoUrl":"https://via.placeholder.com/294x60?text=Tablet",\n                                "largeLogoUrl":"https://via.placeholder.com/234x80?text=Desktop",\n                                "extraLargeLogoUrl":"https://via.placeholder.com/330x80?text=Desktop+HD"\n                            }', "title-string": "My Title" }, h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum p.")))), h("h1", null, "Ad With Icon"), h("div", { class: "row" }, h("div", { class: "col-sm-12 col-md-6 col-lg-4 light-fill" }, h("snt-ad", { "icon-sources": '{\n                                "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png",\n                                "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png"\n                            }', "logo-sources": "", "style-classes": "center", "title-string": "My Title" }, h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum p.")))), h("br", null), h("h1", null, "Ad With No Title"), h("div", { class: "row" }, h("div", { class: "col-sm-12 col-md-6 col-lg-4 light-fill" }, h("snt-ad", { "icon-sources": '{\n                                "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png",\n                                "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png"\n                            }', "logo-sources": "", "style-classes": "center" }, h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum p.")))), h("br", null), h("h1", null, "Ad With CTA"), h("div", { class: "row" }, h("div", { class: "col-sm-12 col-md-6 col-lg-4 light-stroke" }, h("snt-ad", { "icon-sources": '{\n                                "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png",\n                                "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png"\n                            }', "logo-sources": '{\n                                "smallLogoUrl":"https://via.placeholder.com/230x60?text=Mobile",\n                                "mediumLogoUrl":"https://via.placeholder.com/294x60?text=Tablet",\n                                "largeLogoUrl":"https://via.placeholder.com/234x80?text=Desktop",\n                                "extraLargeLogoUrl":"https://via.placeholder.com/330x80?text=Desktop+HD"\n                            }', "title-string": "My Title", href: "https://google.com", "button-label": "Google", target: "_self" }, h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))), h("br", null), h("h1", null, "Ad For Desktop Only"), h("div", { class: "row" }, h("div", { class: "col-sm-12 col-md-6 col-lg-4 float-fill" }, h("snt-ad", { class: "desktop-only", "icon-sources": '{\n                                "largeIconUrl": ""\n                            }', "title-string": "My Title" }, h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))))),
        ];
    }
};
AdExample.TAG_NAME = "ad-example";

export { AdExample as ad_example };

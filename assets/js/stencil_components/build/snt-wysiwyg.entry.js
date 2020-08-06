import { r as registerInstance, h } from './index-21c05bc9.js';

const wysiwygComponentCss = "snt-wysiwyg .blog-icon-item{display:none}@media (min-width: 768px){snt-wysiwyg .blog-icon-item{display:inline-block;vertical-align:middle;width:30px;height:30px}}@media (min-width: 1024px){snt-wysiwyg .blog-icon-item{width:45px;height:45px}}snt-wysiwyg .blog-icon-container{border:2px solid #acdde4;border-radius:150px;align-items:center;justify-content:center;display:flex}@media (min-width: 768px){snt-wysiwyg .blog-icon-container{width:60px;height:60px}}@media (min-width: 1024px){snt-wysiwyg .blog-icon-container{width:80px;height:80px}}snt-wysiwyg .blog-logo-item{display:block;padding:40px 0 40px 0}@media (min-width: 1024px){snt-wysiwyg .blog-logo-item{padding:60px 0 60px 0}}";

const WYSIWYGComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("slot", null)));
    }
};
WYSIWYGComponent.style = wysiwygComponentCss;

export { WYSIWYGComponent as snt_wysiwyg };

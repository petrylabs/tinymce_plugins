import { r as registerInstance, h } from './index-21c05bc9.js';
import { S as StringUtils } from './StringUtils-617c552f.js';

const articleLinkComponentCss = "snt-article-link{display:block}snt-article-link a{display:flex;align-items:center;color:#323232;padding:10px;height:66px;box-sizing:border-box;background-color:#ffffff;overflow:hidden}@media (min-width: 768px){snt-article-link a{padding:15px;height:76px}}@media (min-width: 1024px){snt-article-link a{height:82px}}snt-article-link a:hover{color:#323232;text-decoration:none;outline-width:3px;outline-style:solid;outline-color:#147582;outline-offset:-3px}snt-article-link .article-link{display:block;overflow:hidden;max-height:46px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}@media (min-width: 768px){snt-article-link .article-link{max-height:46px}}@media (min-width: 1024px){snt-article-link .article-link{max-height:52px}}";

const ArticleLinkComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.hiddenTitle = StringUtils.empty();
    }
    render() {
        return (h("a", { href: this.href, "aria-label": this.ariaLabel, "hidden-title": this.hiddenTitle }, h("span", { class: "article-link" }, this.copy)));
    }
};
ArticleLinkComponent.TAG_NAME = "snt-article-link";
ArticleLinkComponent.style = articleLinkComponentCss;

export { ArticleLinkComponent as snt_article_link };

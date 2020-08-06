import { r as registerInstance, h } from './index-21c05bc9.js';
import { S as StringUtils } from './StringUtils-617c552f.js';

const articleListComponentCss = "snt-article-list .article-list{background-color:#f5f5f5;padding:15px 30px;box-sizing:border-box}@media (min-width: 768px){snt-article-list .article-list{padding:15px 15px}}snt-article-list .article-list a:hover{border:2px solid #147582;box-sizing:border-box;padding:15px 13px}@media (max-width: 768px){snt-article-list .article-list a:hover{padding:8px}}snt-article-list .article-list a:focus{outline:2px dotted #323232;outline-offset:3px}snt-article-list .article-list a:hover:focus{outline-offset:3px;border:3px solid #147582;padding:15px 12px}@media (max-width: 768px){snt-article-list .article-list a:hover:focus{padding:7px}}snt-article-list .article-list snt-article-link:not(:last-child){margin-bottom:15px}snt-article-list .article-title{font-family:\"Averta-ExtraBold\", sans-serif;font-weight:500;margin-bottom:15px}";

const ArticleListComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.articlesJson = StringUtils.empty();
        this.articles = [];
        this.heading = StringUtils.empty();
    }
    componentWillLoad() {
        if (StringUtils.hasValue(this.articlesJson)) {
            this.articles = JSON.parse(this.articlesJson).articles;
        }
    }
    render() {
        return (h("div", { class: "article-list" }, StringUtils.hasValue(this.heading)
            ? h("div", { class: "article-title" }, this.heading)
            : null, this.articles.map((article) => {
            return h("snt-article-link", { copy: article.copy, href: article.href, "aria-label": article.ariaLabel, "hidden-title": article.hiddenTitle });
        })));
    }
};
ArticleListComponent.TAG_NAME = "snt-article-list";
ArticleListComponent.style = articleListComponentCss;

export { ArticleListComponent as snt_article_list };

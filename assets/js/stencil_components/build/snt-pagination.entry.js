import { r as registerInstance, c as createEvent, h } from './index-21c05bc9.js';

const faqPaginationComponentCss = "snt-pagination .pagination-container{border-top:1px #147582 solid;padding-top:15px;max-width:260px;display:flex;justify-content:space-between;line-height:21px;font-size:12px}snt-pagination .prev-link{padding-left:4px}snt-pagination .next-link{padding-right:4px}snt-pagination i.arrows{border-style:solid;border-width:0 1px 1px 0;display:inline-block;padding:3.5px}snt-pagination .left{transform:rotate(135deg);-webkit-transform:rotate(135deg)}snt-pagination .right{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}snt-pagination .page-number{margin:0px 10px}snt-pagination .desktop-page-numbers{display:none}snt-pagination a{color:#323232;line-height:21px;font-size:12px}snt-pagination a:hover,snt-pagination a:focus{text-decoration:none;outline:none;color:#9e0a9a}snt-pagination a:hover .page-number,snt-pagination a:focus .page-number{border-bottom:2px #9e0a9a solid}snt-pagination a.active>.page-number{color:#323232;border-bottom:2px #147582 solid}snt-pagination a.hidden{visibility:hidden}snt-pagination snt-layout[viewport=medium] .pagination-container{padding-top:30px;max-width:694px;line-height:20px;font-size:14px}snt-pagination snt-layout[viewport=medium] .page-number{margin:0px 20px}snt-pagination snt-layout[viewport=medium] .mobile-page-numbers{display:none}snt-pagination snt-layout[viewport=medium] .desktop-page-numbers{display:block}snt-pagination snt-layout[viewport=medium] a{line-height:20px;font-size:14px}snt-pagination snt-layout[viewport=medium] i.arrows{padding:4.4px}snt-pagination snt-layout[viewport=large] .pagination-container{max-width:654px}snt-pagination snt-layout[viewport=extra-large] .pagination-container{max-width:800px}snt-pagination snt-layout[viewport=large] .pagination-container{padding-top:30px;line-height:21px;font-size:16px}snt-pagination snt-layout[viewport=large] .page-number{margin:0px 10px}snt-pagination snt-layout[viewport=large] .mobile-page-numbers{display:none}snt-pagination snt-layout[viewport=large] .desktop-page-numbers{display:block}snt-pagination snt-layout[viewport=large] a{line-height:21px;font-size:16px}snt-pagination snt-layout[viewport=large] i.arrows{padding:4.4px}snt-pagination snt-layout[viewport=extra-large] .pagination-container{padding-top:30px;line-height:21px;font-size:16px}snt-pagination snt-layout[viewport=extra-large] .page-number{margin:0px 10px}snt-pagination snt-layout[viewport=extra-large] .mobile-page-numbers{display:none}snt-pagination snt-layout[viewport=extra-large] .desktop-page-numbers{display:block}snt-pagination snt-layout[viewport=extra-large] a{line-height:21px;font-size:16px}snt-pagination snt-layout[viewport=extra-large] i.arrows{padding:4.4px}";

const FAQPaginationComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.prevLinkLang = "Previous";
        this.nextLinkLang = "Next";
        this.pageNumLang = "of";
        this.pageNumAriaLang = "Page number";
        this.paginationNavLang = "FAQ page navigation";
        this.totalPages = 1;
        this.curr = 1;
        this.ellipsis = "...";
        this.pageChanged = createEvent(this, "pageChanged", 7);
    }
    onPageNumberClick(pageNum) {
        this.curr = pageNum;
    }
    onPreviousClick() {
        if (this.curr > 1) {
            this.curr--;
        }
    }
    onNextClick() {
        if (this.curr < this.totalPages) {
            this.curr++;
        }
    }
    onPageChange() {
        this.pageChanged.emit(this.curr.toString());
    }
    getPageLink(pageNum) {
        return h("a", { href: "javascript:void(0);", class: this.curr == pageNum ? "active" : "", onClick: this.onPageNumberClick.bind(this, pageNum), "aria-label": this.pageNumAriaLang + " " + pageNum }, h("span", { class: "page-number" }, pageNum));
    }
    getEllipsis() {
        return h("span", { class: "page-number" }, this.ellipsis);
    }
    getPageNumbersForDesktop() {
        let pageNumbersDesktop = [];
        let i = 1;
        let j = this.totalPages - 1;
        let addEndEllipsis = false;
        //Add first page
        pageNumbersDesktop.push(this.getPageLink(i));
        i++;
        //Add start ellipsis if required
        if (this.curr - 1 > 4) {
            i = this.curr - 2;
            pageNumbersDesktop.push(this.getEllipsis());
        }
        //Check if end ellipsis is required
        if (this.totalPages - this.curr > 4) {
            j = this.curr + 2;
            addEndEllipsis = true;
        }
        //Add current and middle pages
        while (i <= j) {
            pageNumbersDesktop.push(this.getPageLink(i));
            i++;
        }
        //Add end ellipsis if required
        if (addEndEllipsis) {
            pageNumbersDesktop.push(this.getEllipsis());
        }
        //Add last page
        pageNumbersDesktop.push(this.getPageLink(this.totalPages));
        return pageNumbersDesktop;
    }
    render() {
        let pageNumbersMobile = h("span", null, this.curr, " ", this.pageNumLang, " ", this.totalPages);
        let pageNumbersDesktop = this.getPageNumbersForDesktop();
        return [
            h("snt-layout", null, h("div", { class: "pagination-container", role: "navigation", "aria-label": this.paginationNavLang }, h("div", null, h("a", { href: "javascript:void(0);", class: this.curr > 1 ? "" : "hidden", onClick: this.onPreviousClick.bind(this) }, h("span", { class: "prev-icon", "aria-hidden": "true" }, h("i", { class: "arrows left" })), h("span", { class: "prev-link" }, this.prevLinkLang))), h("div", null, h("div", { class: "desktop-page-numbers" }, pageNumbersDesktop), h("div", { class: "mobile-page-numbers" }, pageNumbersMobile)), h("div", null, h("a", { href: "javascript:void(0);", class: this.curr < this.totalPages ? "" : "hidden", onClick: this.onNextClick.bind(this) }, h("span", { class: "next-link" }, this.nextLinkLang), h("span", { class: "next-icon", "aria-hidden": "true" }, h("i", { class: "arrows right" }))))))
        ];
    }
    static get watchers() { return {
        "curr": ["onPageChange"]
    }; }
};
FAQPaginationComponent.TAG_NAME = "snt-pagination";
FAQPaginationComponent.style = faqPaginationComponentCss;

export { FAQPaginationComponent as snt_pagination };

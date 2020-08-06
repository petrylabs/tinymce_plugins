import { r as registerInstance, h, g as getElement } from './index-21c05bc9.js';

const demoAppCss = "#sidebar-wrapper{min-height:110vh;margin-left:-15rem;-webkit-transition:margin 0.25s ease-out;-moz-transition:margin 0.25s ease-out;-o-transition:margin 0.25s ease-out;transition:margin 0.25s ease-out}#sidebar-wrapper .sidebar-heading{padding:0.75rem 0.75rem;text-align:center;font-size:1.2rem}#sidebar-wrapper .list-group{width:15rem}#page-content-wrapper{background-color:white;min-width:100vw}#wrapper.toggled #sidebar-wrapper{margin-left:0}.remove{display:none}@media (min-width: 768px){#sidebar-wrapper{margin-left:0;width:242px;float:left}#page-content-wrapper{min-width:0;width:100%}#wrapper.toggled #sidebar-wrapper{margin-left:-15rem}}@media (max-width: 768px){#sidebar-wrapper{display:none}}.navbar{margin-bottom:2em}.components-panel{padding-right:5%;padding-left:5%}";

const DemoApp = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "d-flex", id: "wrapper" }, h("div", { class: "bg-light border-right", id: "sidebar-wrapper" }, h("h3", { class: "sidebar-heading" }, "Components"), h("div", { class: "list-group list-group-flush" }, h("stencil-route-link", { url: '/' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Home")), h("stencil-route-link", { url: '/accordion-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Accordion")), h("stencil-route-link", { url: '/ad-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Ad")), h("stencil-route-link", { url: '/article-list-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Article List")), h("stencil-route-link", { url: '/cta-reminder-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "CTA Reminder")), h("stencil-route-link", { url: '/dropdown-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Dropdown")), h("stencil-route-link", { url: '/icon-copy-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Icon Copy")), h("stencil-route-link", { url: '/panel-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Panel")), h("stencil-route-link", { url: '/testimonial-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Testimonials")), h("stencil-route-link", { url: '/header-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Header")), h("stencil-route-link", { url: '/footer-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Footer")), h("stencil-route-link", { url: '/common-styles-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Common Styles")), h("stencil-route-link", { url: '/hero-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Hero")), h("stencil-route-link", { url: '/skiptomain-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Skip to main content")), h("stencil-route-link", { url: '/three-column-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Three Column")), h("stencil-route-link", { url: '/tip-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Tip")), h("stencil-route-link", { url: '/title-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Title")), h("stencil-route-link", { url: '/title-copy-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Title Copy")), h("stencil-route-link", { url: '/two-column-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Two Column")), h("stencil-route-link", { url: '/three-column-mixed-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Three Column Mixed ")), h("stencil-route-link", { url: '/two-column-feature-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Two Column Feature")), h("stencil-route-link", { url: '/blog-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Blog")), h("stencil-route-link", { url: '/faq-filter-slider-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "FAQ filter/slider")), h("stencil-route-link", { url: '/faq-block-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "FAQ category block")), h("stencil-route-link", { url: '/faq-pagination-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "FAQ pagination")), h("stencil-route-link", { url: '/faq-results-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "FAQ results")), h("stencil-route-link", { url: '/treeview-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Treeview")), h("stencil-route-link", { url: '/cta-highlight-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "CTA Highlight")), h("stencil-route-link", { url: '/404-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "404 Error")), h("stencil-route-link", { url: '/search-combobox-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Search Combobox")), h("stencil-route-link", { url: '/responsive-images' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Responsive Images")), h("stencil-route-link", { url: '/source-list-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Source List")), h("stencil-route-link", { url: '/breadcrumb-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Breadcrumb Trail")), h("stencil-route-link", { url: '/side-tabs-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Side Rail Tabs")), h("stencil-route-link", { url: '/image-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Snt Image")))), h("main", { id: "page-content-wrapper" }, h("nav", { class: "navbar navbar-expand-lg navbar-light bg-light border-bottom" }, h("h2", { class: "sidebar-heading" }, "Sonnet Design System"), h("div", { class: "collapse navbar-collapse", id: "navbarSupportedContent" }, h("ul", { class: "navbar-nav ml-auto mt-2 mt-lg-0" }, h("li", { class: "nav-item active" }, h("a", { class: "nav-link", href: "https://pasprogram.economicalinsurance.com/secure/RapidBoard.jspa?rapidView=5936&projectKey=SCMS" }, "GIT")), h("li", { class: "nav-item" }, h("a", { class: "nav-link", href: "https://sonnet.invisionapp.com/dsm/sonnet/style-guide" }, "DSM"))))), h("div", { class: " " }, h("stencil-router", null, h("stencil-route-switch", { scrollTopOffset: 0 }, h("stencil-route", { url: '/', component: 'demo-app-home', exact: true }), h("stencil-route", { url: '/accordion-example', component: 'accordion-example' }), h("stencil-route", { url: '/ad-example', component: 'ad-example' }), h("stencil-route", { url: '/article-list-example', component: 'article-list-example' }), h("stencil-route", { url: '/cta-reminder-example', component: 'cta-reminder-example' }), h("stencil-route", { url: '/dropdown-example', component: 'dropdown-example' }), h("stencil-route", { url: '/icon-copy-example', component: 'icon-copy-example' }), h("stencil-route", { url: '/panel-example', component: 'panel-example' }), h("stencil-route", { url: '/testimonial-example', component: 'testimonial-example' }), h("stencil-route", { url: '/header-example', component: 'header-example' }), h("stencil-route", { url: '/footer-example', component: 'footer-example' }), h("stencil-route", { url: '/common-styles-example', component: 'common-styles-example' }), h("stencil-route", { url: '/hero-example', component: 'hero-example' }), h("stencil-route", { url: '/skiptomain-example', component: 'skiptomain-example' }), h("stencil-route", { url: '/tip-example', component: 'tip-example' }), h("stencil-route", { url: '/title-example', component: 'title-example' }), h("stencil-route", { url: '/title-copy-example', component: 'title-copy-example' }), h("stencil-route", { url: '/three-column-example', component: 'three-column-example' }), h("stencil-route", { url: '/three-column-mixed-example', component: 'three-column-mixed-example' }), h("stencil-route", { url: '/two-column-example', component: 'two-column-example' }), h("stencil-route", { url: '/two-column-feature-example', component: 'two-column-feature-example' }), h("stencil-route", { url: '/side-tabs-example', component: 'snt-tabs-example' }), h("stencil-route", { url: '/blog-example', component: 'blog-example' }), h("stencil-route", { url: '/faq-filter-slider-example', component: 'faq-filter-slider-example' }), h("stencil-route", { url: '/faq-block-example', component: 'faq-block-example' }), h("stencil-route", { url: '/faq-pagination-example', component: 'faq-pagination-example' }), h("stencil-route", { url: '/faq-results-example', component: 'faq-results-example' }), h("stencil-route", { url: '/treeview-example', component: 'treeview-example' }), h("stencil-route", { url: '/cta-highlight-example', component: 'cta-highlight-example' }), h("stencil-route", { url: '/ontario-example', component: 'ontario-example' }), h("stencil-route", { url: '/404-example', component: 'page-not-found-example' }), h("stencil-route", { url: '/getAQuote', component: 'get-a-quote-example' }), h("stencil-route", { url: '/search-combobox-example', component: 'search-combobox-example' }), h("stencil-route", { url: '/responsive-images', component: 'responsive-images-example' }), h("stencil-route", { url: '/breadcrumb-example', component: 'breadcrumb-example' }), h("stencil-route", { url: '/source-list-example', component: 'source-list-example' }), h("stencil-route", { url: '/image-example', component: 'image-example' })))))));
    }
    get element() { return getElement(this); }
};
DemoApp.TAG_NAME = "demo-app";
DemoApp.style = demoAppCss;

export { DemoApp as demo_app };

import{r as t,h as i,g as a}from"./p-8a8b139b.js";const s=class{constructor(i){t(this,i),this.faqBlockList=[],this.menuAriaLabel=""}componentDidRender(){this.faqBlockHTMLItems=this.host.querySelectorAll("div.faq-grid-item-container")}onResize(t){const i=t.detail.viewport;this.faqBlockHTMLItems.forEach(t=>{t.firstElementChild.setAttribute("viewport",i)})}render(){return[i("snt-layout",null,i("nav",{class:"faq-grid-container","aria-label":this.menuAriaLabel},this.faqBlockList.map(t=>i("div",{class:"faq-grid-item-container"},i("snt-faq-block",{"title-text":t.titleText,"body-text":t.bodyText,"articles-count":t.articlesCount})))))]}get host(){return a(this)}};s.TAG_NAME="snt-faq-block-list",s.style="snt-faq-block-list .faq-grid-container{display:grid;grid-template-columns:260px;gap:26px;padding:0px}snt-faq-block-list snt-layout[viewport=medium] .faq-grid-container{grid-template-columns:334px 334px}snt-faq-block-list snt-layout[viewport=large] .faq-grid-container{grid-template-columns:274px 274px 274px;gap:30px}snt-faq-block-list snt-layout[viewport=extra-large] .faq-grid-container{grid-template-columns:370px 370px 370px;gap:30px}";export{s as snt_faq_block_list}
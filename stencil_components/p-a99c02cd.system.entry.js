var __awaiter=this&&this.__awaiter||function(e,t,o,n){function r(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,i){function s(e){try{c(n.next(e))}catch(t){i(t)}}function a(e){try{c(n["throw"](e))}catch(t){i(t)}}function c(e){e.done?o(e.value):r(e.value).then(s,a)}c((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var o={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,r,i,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(e){return function(t){return c([e,t])}}function c(s){if(n)throw new TypeError("Generator is already executing.");while(o)try{if(n=1,r&&(i=s[0]&2?r["return"]:s[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;if(r=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:o.label++;return{value:s[1],done:false};case 5:o.label++;r=s[1];s=[0];continue;case 7:s=o.ops.pop();o.trys.pop();continue;default:if(!(i=o.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){o=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(s[0]===6&&o.label<i[1]){o.label=i[1];i=s;break}if(i&&o.label<i[2]){o.label=i[2];o.ops.push(s);break}if(i[2])o.ops.pop();o.trys.pop();continue}s=t.call(e,o)}catch(a){s=[6,a];r=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,o=arguments.length;t<o;t++)e+=arguments[t].length;for(var n=Array(e),r=0,t=0;t<o;t++)for(var i=arguments[t],s=0,a=i.length;s<a;s++,r++)n[r]=i[s];return n};System.register(["./p-64b22a95.system.js","./p-1bc037df.system.js","./p-4583435d.system.js","./p-f47dc977.system.js","./p-57c1c38e.system.js"],(function(e){"use strict";var t,o,n,r,i,s,a,c,u,h,l;return{setters:[function(e){t=e.r;o=e.d;n=e.h;r=e.H;i=e.g},function(e){s=e.S},function(e){a=e.L},function(e){c=e.K;u=e.a;h=e.N},function(e){l=e.R}],execute:function(){var d='snt-search-combobox{display:block;position:relative;background-color:#ffffff;width:100%}snt-search-combobox input{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:2.525rem;font-size:0.875rem;line-height:1.25rem}snt-search-combobox snt-button button{display:none;position:absolute;right:0.5rem;top:0;bottom:0;margin:auto;font-size:1.125rem;line-height:1.125rem;color:#323232}snt-search-combobox.theme-default{background-color:transparent}snt-search-combobox.theme-default :focus{outline:none}snt-search-combobox.theme-default snt-button{display:none}snt-search-combobox.theme-default snt-icon{margin:0 0.625rem 0 1.25rem}snt-search-combobox.theme-default input{border:none;border-radius:0;background-color:transparent}snt-search-combobox.theme-default ul{list-style:none;margin:0;padding:0}snt-search-combobox.theme-default .search-input-area{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:#ffffff;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid #b2b2b2;border-radius:25px}snt-search-combobox.theme-default .search-input-area:hover{border-color:#147582}snt-search-combobox.theme-default .search-results-area{display:none;color:#323232;position:absolute;left:0;right:0;top:100%;width:100%;padding:0.625rem;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:left;border:1px solid transparent;border-top:none;border-bottom-left-radius:25px;border-bottom-right-radius:25px;background-color:white}snt-search-combobox.theme-default .search-results-area:before{position:absolute;content:" ";height:1px;margin-right:auto;margin-left:auto;top:0;left:0;right:0;width:calc(100% - 2rem);background-color:#147582}snt-search-combobox.theme-default .result{padding:0.3125rem 0.625rem;font-size:14px;line-height:23px;border-bottom:1px solid #e5e5e5}snt-search-combobox.theme-default .result:last-child{border-bottom:none}snt-search-combobox.theme-default.search-combobox-has-focus snt-backdrop{display:block;background-color:rgba(50, 50, 50, 0.2)}snt-search-combobox.theme-default.search-combobox-is-expanded .search-input-area{border:1px solid transparent;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom:none;pointer-events:all}snt-search-combobox.theme-default.search-combobox-is-expanded .search-results-area{display:block}snt-search-combobox.theme-default .result{cursor:default}snt-search-combobox.theme-default .result:hover,snt-search-combobox.theme-default .result.result-is-focused{background-color:#f8f8f8}snt-search-combobox.theme-default .result b{pointer-events:none}';var b=e("snt_search_combobox",function(){function e(e){t(this,e);this.focused=false;this.expanded=false;this.autoComplete=false;this.ariaLabelledby=s.empty();this.ariaLabel=s.empty();this.languageJson=s.empty();this.languageString=s.empty();this.searchFunctionRef=s.empty();this.value="";this.activeIndex=-1;this.sntInput=o(this,"sntInput",7);this.sntFocus=o(this,"sntFocus",7);this.sntBlur=o(this,"sntBlur",7)}e.prototype.activeIndexChange=function(e){if(this.autoComplete&&e!=-1){this.value=this.SearchSuggestion[this.activeIndex].title}};e.prototype.componentWillLoad=function(){var e=this;if(s.isEmpty(this.hostElement.id)){throw new Error(b.TAG_NAME+" must have a valid id.")}if(this.searchFunctionRef){l.getObjectReference(this.searchFunctionRef).then((function(t){e.searchFunction=t}))}else{throw new Error(b.TAG_NAME+" requires a valid reference to a search function.")}this.languageVariables=a.getVariablesFromString(this.languageString,["search"]);this.initKeyboardEventProcessor()};e.prototype.onClick=function(e){if(e.target===this.input||this.hostElement.contains(e.target)){return}this.focused=this.expanded=false};e.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){if(this.input){this.input.focus()}return[2,Promise.resolve()]}))}))};e.prototype.getInputElement=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return[2,Promise.resolve(this.input)]}))}))};e.prototype.onFocus=function(){this.focused=true;this.sntFocus.emit();this.updateSearchSuggestions()};e.prototype.onInput=function(e){var t=e.target;if(t){this.value=t.value}this.updateSearchSuggestions();this.sntInput.emit(e)};e.prototype.onListboxClick=function(e){if(e.target){if(e.target.nodeName=="LI"){this.activeIndex=e.target.dataset.index;this.selectItem()}}};e.prototype.selectItem=function(){if(this.activeIndex!==-1){this.value=this.SearchSuggestion[this.activeIndex].title;this.expanded=false}};e.prototype.clear=function(){this.expanded=false;this.value=s.empty()};e.prototype.dismiss=function(){this.focused=this.expanded=false};e.prototype.updateSearchSuggestions=function(){this.SearchSuggestion=this.searchFunction(this.input.value);this.expanded=this.SearchSuggestion.length>0};e.prototype.initKeyboardEventProcessor=function(){var e=this;this.keyboardEventProcessor=c.newInstance().withKey(u.ARROW_UP,(function(){return e.setNextActiveIndex(h.BACKWARDS)})).withKey(u.ARROW_DOWN,(function(){return e.setNextActiveIndex(h.FORWARDS)})).withKey(u.HOME,(function(){return e.setNextActiveIndex(h.FIRST)})).withKey(u.END,(function(){return e.setNextActiveIndex(h.LAST)})).withKey(u.ENTER,(function(){return e.selectItem()})).withKey(u.ESCAPE,(function(){return e.clear()})).withKey(u.TAB,(function(){return e.dismiss()})).build()};e.prototype.processKeyboardEvent=function(e){this.keyboardEventProcessor.process(e)};e.prototype.setNextActiveIndex=function(e){if(e==h.BACKWARDS){this.activeIndex=this.activeIndex<=0?this.SearchSuggestion.length-1:this.activeIndex-1}else if(e==h.FORWARDS){this.activeIndex=this.activeIndex>=this.SearchSuggestion.length-1?0:this.activeIndex+1}else if(e==h.FIRST){this.activeIndex=0}else if(e==h.LAST){this.activeIndex=this.SearchSuggestion.length-1}};e.prototype.highlightPattern=function(e,t){var o=e.split(t);if(o.length<=1){return e}var r=e.match(t);return o.reduce((function(e,t,o){return r[o]?__spreadArrays(e,[t,n("b",null,r[o])]):__spreadArrays(e,[t])}),[])};e.prototype.render=function(){var e=this;var t=this.hostElement.id?this.hostElement.id+"-combobox":null;var o=this.hostElement.id?this.hostElement.id+"-textbox":null;var i=this.hostElement.id?this.hostElement.id+"-listbox":null;var a="result-item-";return n(r,{class:{"search-combobox-has-focus":this.focused,"search-combobox-is-expanded":this.expanded}},s.notEmpty(this.ariaLabel)?n("label",{htmlFor:o,class:"sr-only"},this.ariaLabel):null,n("div",{role:"combobox",id:t,"aria-haspopup":"listbox","aria-owns":i,"aria-expanded":this.expanded.toString(),class:"search-input-area"},n("snt-icon",{styleClasses:"iconNavSearch"}),n("input",{type:"text",id:o,role:"textbox","aria-labelledby":this.ariaLabelledby||null,"aria-autocomplete":"both","aria-controls":i,"aria-activedescendant":this.activeIndex>=0?a+this.activeIndex:null,onInput:this.onInput.bind(this),onFocus:this.onFocus.bind(this),onKeyDown:this.processKeyboardEvent.bind(this),placeholder:this.languageVariables.get("search"),ref:function(t){return e.input=t},value:this.value})),n("ul",{id:i,role:"listbox",class:"search-results-area",onClick:this.onListboxClick.bind(this)},this.focused&&this.SearchSuggestion.length>0?this.SearchSuggestion.map((function(t,o){return n("li",{role:"option","aria-selected":o==e.activeIndex,id:a+o,class:{result:true,"result-is-focused":o==e.activeIndex},"data-index":o},e.highlightPattern(t.title,new RegExp(e.input.value,"ig")))})):null),this.focused?n("snt-backdrop",null):null)};Object.defineProperty(e.prototype,"hostElement",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{activeIndex:["activeIndexChange"]}},enumerable:true,configurable:true});return e}());b.TAG_NAME="snt-search-combobox";b.style=d}}}));
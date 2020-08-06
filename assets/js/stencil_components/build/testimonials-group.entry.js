import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-21c05bc9.js';
import { T as TestimonialsComponent } from './testimonials-component-3fc81e23.js';

const testimonialsComponentCss = "testimonial-quote{color:#323232;background-color:#f8f8f8;}testimonial-quote.carousel{width:100%;display:flex;position:relative}testimonial-quote .carousel-item{height:max-content;min-height:100%}testimonial-quote .carousel-item .carousel-caption{left:0;right:0;position:relative}@media (max-width: 480px){testimonial-quote .carousel-item .carousel-caption{padding-bottom:0}}testimonial-quote .carousel-item blockquote,testimonial-quote .carousel-item p2{text-align:left;display:flex}testimonial-quote .carousel-caption{display:flex;align-items:center;height:208px}@media (min-width: 768px){testimonial-quote .carousel-caption{height:161px}}@media (min-width: 1024px){testimonial-quote .carousel-caption{height:136px}}@media (min-width: 1440px){testimonial-quote .carousel-caption{height:176px}}.light-fill testimonial-quote,testimonial-quote.light-fill{color:#323232;background-color:#d9f0f4}.neutral-fill testimonial-quote,testimonial-quote.neutral-fill{color:#323232;background-color:#f8f8f8}.dark-fill testimonial-quote,testimonial-quote.dark-fill{color:#ffffff;background-color:#147582}.white-fill testimonial-quote,testimonial-quote.white-fill{color:#323232;background-color:#ffffff}testimonials-group{display:block;color:#323232;background-color:#f8f8f8;}.light-fill testimonials-group,testimonials-group.light-fill{display:block;background-color:#d9f0f4;color:#323232}.neutral-fill testimonials-group,testimonials-group.neutral-fill{display:block;background-color:#f8f8f8;color:#323232}.dark-fill testimonials-group,testimonials-group.dark-fill{display:block;background-color:#147582;color:#ffffff}.white-fill testimonials-group,testimonials-group.white-fill{display:block;background-color:#ffffff;color:#323232}.error-fill testimonials-group,testimonials-group.error-fill{display:block;background-color:#d9f0f4;background-image:none;color:#323232}.light-fill testimonials-group .carousel-control-next,.light-fill testimonials-group .carousel-control-prev,testimonials-group.light-fill .carousel-control-next,testimonials-group.light-fill .carousel-control-prev{border-color:#323232}.light-fill testimonials-group .carousel-control-prev-icon,.light-fill testimonials-group .carousel-control-next-icon,testimonials-group.light-fill .carousel-control-prev-icon,testimonials-group.light-fill .carousel-control-next-icon{fill:#323232}.light-fill testimonials-group .carousel-indicators li,testimonials-group.light-fill .carousel-indicators li{border-color:#323232}.light-fill testimonials-group .carousel-indicators .active,testimonials-group.light-fill .carousel-indicators .active{background-color:#323232}.light-fill testimonials-group i.arrows,testimonials-group.light-fill i.arrows{border-color:#323232}.neutral-fill testimonials-group .carousel-control-next,.neutral-fill testimonials-group .carousel-control-prev,testimonials-group.neutral-fill .carousel-control-next,testimonials-group.neutral-fill .carousel-control-prev{border-color:#323232}.neutral-fill testimonials-group .carousel-control-prev-icon,.neutral-fill testimonials-group .carousel-control-next-icon,testimonials-group.neutral-fill .carousel-control-prev-icon,testimonials-group.neutral-fill .carousel-control-next-icon{fill:#323232}.neutral-fill testimonials-group .carousel-indicators li,testimonials-group.neutral-fill .carousel-indicators li{border-color:#323232}.neutral-fill testimonials-group .carousel-indicators .active,testimonials-group.neutral-fill .carousel-indicators .active{background-color:#323232}.neutral-fill testimonials-group i.arrows,testimonials-group.neutral-fill i.arrows{border-color:#323232}.dark-fill testimonials-group .carousel-control-next,.dark-fill testimonials-group .carousel-control-prev,testimonials-group.dark-fill .carousel-control-next,testimonials-group.dark-fill .carousel-control-prev{border-color:#ffffff}.dark-fill testimonials-group .carousel-control-prev-icon,.dark-fill testimonials-group .carousel-control-next-icon,testimonials-group.dark-fill .carousel-control-prev-icon,testimonials-group.dark-fill .carousel-control-next-icon{fill:#ffffff}.dark-fill testimonials-group .carousel-indicators li,testimonials-group.dark-fill .carousel-indicators li{border-color:#ffffff}.dark-fill testimonials-group .carousel-indicators .active,testimonials-group.dark-fill .carousel-indicators .active{background-color:#ffffff}.dark-fill testimonials-group i.arrows,testimonials-group.dark-fill i.arrows{border-color:#ffffff}.white-fill testimonials-group .carousel-control-next,.white-fill testimonials-group .carousel-control-prev,testimonials-group.white-fill .carousel-control-next,testimonials-group.white-fill .carousel-control-prev{border-color:#323232}.white-fill testimonials-group .carousel-control-prev-icon,.white-fill testimonials-group .carousel-control-next-icon,testimonials-group.white-fill .carousel-control-prev-icon,testimonials-group.white-fill .carousel-control-next-icon{fill:#ffffff}.white-fill testimonials-group .carousel-indicators li,testimonials-group.white-fill .carousel-indicators li{border-color:#323232}.white-fill testimonials-group .carousel-indicators .active,testimonials-group.white-fill .carousel-indicators .active{background-color:#ffffff}.white-fill testimonials-group i.arrows,testimonials-group.white-fill i.arrows{border-color:#323232}testimonials-group .testimonial-controls{position:relative;height:60px;display:flex;justify-content:flex-end}@media (max-width: 480px){testimonials-group .testimonial-controls{justify-content:center;height:30px}}testimonials-group .carousel-control-next,testimonials-group .carousel-control-prev{z-index:9;width:45px;height:45px;opacity:1;position:relative;border:3px solid;border-radius:50%;cursor:pointer;border-color:#323232}@media (max-width: 480px){testimonials-group .carousel-control-next,testimonials-group .carousel-control-prev{display:none}}testimonials-group .carousel-control-prev-icon,testimonials-group .carousel-control-next-icon{fill:#323232;background:none}testimonials-group .carousel-control-prev-icon{transform:translate(3px, 2px)}testimonials-group .carousel-control-next-icon{transform:translate(-2px, 2px) rotateY(360deg)}@media (min-width: 1440px){testimonials-group .carousel-control-prev-icon{transform:translate(3px, 0px)}testimonials-group .carousel-control-next-icon{transform:translate(-2px, -1px) rotateY(360deg)}}testimonials-group .carousel-indicators{position:relative;margin-right:1%;margin-left:1%;bottom:-20px;z-index:1}testimonials-group .carousel-indicators .active{background-color:#323232}testimonials-group .carousel-indicators li{width:6px;height:6px;cursor:pointer;border:3px solid;border-color:#323232;background:transparent;border-radius:50%;opacity:1;margin-left:7px;margin-right:7px}testimonials-group .full_container{width:100%}testimonials-group i.arrows{border-color:#323232;border-style:solid;border-width:0 3px 3px 0;display:inline-block;padding:6px}testimonials-group .left{transform:rotate(135deg);-webkit-transform:rotate(135deg)}testimonials-group .right{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}@media (max-width: 480px){testimonials-group{}}testimonials-group .carousel-slider-wrap{overflow-x:hidden}testimonials-group .carousel-inner{display:flex;align-items:flex-start;--carouselCount:1;min-width:100%;width:calc(var(--carouselCount) * 100%)}testimonials-group .carousel-inner .carousel-item{min-width:100%;width:calc(100% / var(--carouselCount));pointer-events:none;transform-origin:0%;transition:0.6s all cubic-bezier(0.6, 0, 0.35, 1)}h2.testimonial-title{margin-bottom:30px}@media (max-width: 480px){h2.testimonial-title{margin-bottom:15px}}";

const TOGGLE_CLASSES = {
    active: 'active',
    show: 'show',
    inactive: 'inactive',
    timing: 600
};
const TestimonialsGroupComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.selected = 0;
        this.slideSelector = '.carousel-item';
        this.indicatorSelector = '[data-slide-to]';
        this.prevSelector = '[data-slide="prev"]';
        this.nextSelector = '[data-slide="next"]';
        this.interval = '4000'; //default
        this.cycleType = 'hover';
        this.ride = false;
        this.wrap = true;
        this.listeners = {};
        this.currentSlide = 0;
        this.x0 = null; //intial click/touch position on testimonial
        this.showSlide = createEvent(this, "showSlide", 7);
        this.hideSlide = createEvent(this, "hideSlide", 7);
    }
    unify(e) { return e.changedTouches ? e.changedTouches[0] : e; }
    ;
    lock(e) {
        this.x0 = this.unify(e).clientX;
    }
    ;
    move(e) {
        if (this.x0 || this.x0 === 0) {
            let dx = this.unify(e).clientX - this.x0, s = Math.sign(dx);
            if ((this.currentSlide > 0 || s < 0) && (this.currentSlide < this.slideElements.length - 1 || s > 0)) {
                this.currentSlide -= s;
                if (s == -1) {
                    this.onShow(this.currentSlide);
                    this.animateNextSlide(this.slideElements[this.currentSlide], this.slideElements[this.currentSlide - 1]);
                }
                else if (s == 1) {
                    this.onShow(this.currentSlide);
                    this.animatePrevSlide(this.slideElements[this.currentSlide], this.slideElements[this.currentSlide + 1]);
                }
            }
            this.x0 = null;
        }
    }
    ;
    componentDidLoad() {
        this._carouselContainer = this.element.querySelector('.carousel-inner');
        this._carouselContainer.addEventListener('mousedown', this.lock.bind(this), false);
        this._carouselContainer.addEventListener('touchstart', this.lock.bind(this), false);
        this._carouselContainer.addEventListener('mouseup', this.move.bind(this), false);
        this._carouselContainer.addEventListener('touchend', this.move.bind(this), false);
        this.element.querySelector('.carousel-item').classList.add('active');
        this.currentSlide = this.selected || 0;
        this.getSlideElements();
        this.getIndicatorElements();
        this.getPrevNextButtons();
        if (this.currentSlide > 0) {
            this.onShow(this.selected);
        }
        this.play();
    }
    componentDidUnload() {
        if (this.slideElements && this.slideElements.length) {
            this.slideElements.forEach((element, i) => {
                element.removeEventListener('click', this.listeners[i]);
            });
        }
        if (this.prevElement && this.prevListener) {
            this.prevElement.removeEventListener('click', this.prevListener);
        }
        if (this.nextElement && this.nextListener) {
            this.nextElement.removeEventListener('click', this.nextListener);
        }
        this.pause();
    }
    getPrevNextButtons() {
        this.prevElement = this.element.querySelector(this.prevSelector);
        this.nextElement = this.element.querySelector(this.nextSelector);
        if (this.prevElement) {
            this.prevListener = this.addClickHandler(this.prevElement, () => this.prev());
        }
        if (this.nextElement) {
            this.nextListener = this.addClickHandler(this.nextElement, () => this.next());
        }
    }
    getSlideElements() {
        this.slideElements = this.element.querySelectorAll(this.slideSelector);
    }
    getIndicatorElements() {
        this.indicatorElements = this.element.querySelectorAll(this.indicatorSelector);
        this.indicatorElements.forEach((element, i) => {
            this.indicatorClickHandler(element, i);
        });
    }
    addClickHandler(element, fn = this.next) {
        if (!element)
            return;
        let eventHandler = () => {
            if (fn) {
                fn();
            }
        };
        element.addEventListener('click', eventHandler);
        return eventHandler;
    }
    indicatorClickHandler(element, index) {
        if (!element)
            return;
        let eventHandler = () => {
            this.onShow(index);
        };
        element.addEventListener('click', eventHandler);
        this.listeners[index] = eventHandler;
    }
    addActiveClass(element) {
        setTimeout(() => { element.classList.add(TOGGLE_CLASSES.active); }, TOGGLE_CLASSES.timing);
        if (TOGGLE_CLASSES.inactive) {
            element.classList.remove(TOGGLE_CLASSES.inactive);
        }
    }
    removeActiveClass(elements = this.slideElements) {
        elements.forEach(item => {
            setTimeout(() => { item.classList.remove(TOGGLE_CLASSES.active); }, TOGGLE_CLASSES.timing);
        });
    }
    animateNextSlide(currentSlide, prevSlide) {
        currentSlide.classList.add('carousel-item-next');
        currentSlide.classList.add('carousel-item-right');
        prevSlide.classList.add('carousel-item-left');
        setTimeout(() => {
            currentSlide.classList.remove('carousel-item-next');
            currentSlide.classList.remove('carousel-item-right');
            prevSlide.classList.remove('carousel-item-left');
        }, TOGGLE_CLASSES.timing);
    }
    animatePrevSlide(currentSlide, previousSlide) {
        previousSlide.classList.add('carousel-item-right');
        setTimeout(() => {
            currentSlide.classList.add('carousel-item-prev');
            currentSlide.classList.add('carousel-item-left');
        }, TOGGLE_CLASSES.timing / 2);
        setTimeout(() => {
            currentSlide.classList.remove('carousel-item-prev');
            currentSlide.classList.remove('carousel-item-left');
            previousSlide.classList.remove('carousel-item-right');
        }, TOGGLE_CLASSES.timing);
    }
    animateLastSlide(firstSlide, currentSlide) {
        currentSlide.classList.add('carousel-item-left');
        firstSlide.classList.add('carousel-item-right');
        this.onShow(0);
        setTimeout(() => {
            currentSlide.classList.add('d-none');
            firstSlide.classList.add('carousel-item-right');
            firstSlide.classList.add('carousel-item-next');
        }, TOGGLE_CLASSES.timing / 2);
        setTimeout(() => {
            firstSlide.classList.remove('carousel-item-next');
            currentSlide.classList.remove('d-none');
            firstSlide.classList.remove('carousel-item-right');
            currentSlide.classList.remove('carousel-item-left');
            currentSlide.classList.remove('carousel-item-prev');
        }, TOGGLE_CLASSES.timing);
    }
    animateFirstSlide(currentSlide, prevSlide) {
        currentSlide.classList.add('carousel-item-right');
        this.onShow(this.slideElements.length - 1);
        setTimeout(() => {
            currentSlide.classList.add('d-none');
            prevSlide.classList.add('carousel-item-left');
            prevSlide.classList.add('carousel-item-prev');
        }, TOGGLE_CLASSES.timing / 2);
        setTimeout(() => {
            currentSlide.classList.remove('d-none');
            prevSlide.classList.remove('carousel-item-left');
            prevSlide.classList.remove('carousel-item-prev');
            currentSlide.classList.remove('carousel-item-right');
        }, TOGGLE_CLASSES.timing);
    }
    async onShow(index = 0) {
        this.removeActiveClass();
        if (this.indicatorElements && this.indicatorElements.length) {
            this.removeActiveClass(this.indicatorElements);
            this.addActiveClass(this.indicatorElements[index]);
        }
        this.indicatorClickHandler(this.slideElements[index], index);
        this.addActiveClass(this.slideElements[index]);
        this.currentSlide = index;
        this.pause();
        this.play();
        this.showSlide.emit({
            current: this.currentSlide,
            element: this.slideElements[index]
        });
    }
    async onHide(index = 0) {
        this.removeActiveClass();
        if (this.indicatorElements && this.indicatorElements.length) {
            this.removeActiveClass(this.indicatorElements);
        }
        this.hideSlide.emit({
            current: this.currentSlide,
            element: this.slideElements[index]
        });
        this.currentSlide = 0;
    }
    async next() {
        if (this.slideElements && this.slideElements.length - 1 <= this.currentSlide) {
            this.animateLastSlide(this.slideElements[0], this.slideElements[this.currentSlide]);
        }
        else {
            this.onShow(this.currentSlide + 1);
            this.animateNextSlide(this.slideElements[this.currentSlide], this.slideElements[this.currentSlide - 1]);
        }
    }
    async prev() {
        if (this.currentSlide <= 0) {
            this.animateFirstSlide(this.slideElements[0], this.slideElements[this.slideElements.length - 1]);
        }
        else {
            this.onShow(this.currentSlide - 1);
            this.animatePrevSlide(this.slideElements[this.currentSlide], this.slideElements[this.currentSlide + 1]);
        }
    }
    async pause() {
        if (this.intervalHandler) {
            clearInterval(this.intervalHandler);
        }
    }
    async play() {
        if (this.interval) {
            this.intervalHandler = setInterval(() => this.next(), parseInt(this.interval));
        }
    }
    render() {
        let testimonials = Array.from(this.element.querySelectorAll(TestimonialsComponent.TAG_NAME));
        return (h(Host, { id: this.groupId, class: "carousel slide", "data-ride": "carousel" }, h("div", { class: "full_container" }, h("snt-layout", null, h("h2", { class: "testimonial-title" }, this.groupHeadline), h("div", { class: "carousel-slider-wrap" }, h("div", { class: "carousel-inner" }, h("slot", null))), h("div", { class: "testimonial-controls" }, h("a", { class: "carousel-control-prev", href: "javascript:void(0);", role: "button", "data-slide": "prev" }, h("span", { class: "carousel-control-prev-icon", "aria-hidden": "true" }, h("i", { class: "arrows left" })), h("span", { class: "sr-only" }, "Previous")), h("ol", { class: "carousel-indicators" }, testimonials.map((_elem, index) => h("li", { "data-target": "#" + this.groupId, "data-slide-to": index, class: (index == 0) ? 'active' : '' }))), h("a", { class: "carousel-control-next", href: "javascript:void(0);", role: "button", "data-slide": "next" }, h("span", { class: "carousel-control-next-icon", "aria-hidden": "true" }, h("i", { class: "arrows right" })), h("span", { class: "sr-only" }, "Next")))))));
    }
    get element() { return getElement(this); }
};
TestimonialsGroupComponent.style = testimonialsComponentCss;

export { TestimonialsGroupComponent as testimonials_group };

import { r as registerInstance, h } from './index-21c05bc9.js';

const TestimonialExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("h1", null, "Group Components"), h("br", null), h("testimonials-group", { class: "neutral-fill", "group-id": "group-carousel", "group-headline": "Testimonial", interval: "3000" }, h("testimonial-quote", { "container-id": "test1", from: "Sameer S. from Toronto, Ontario" }, "We switched to Sonnet last year after 20 years of loyalty to another insurance company\u2026 it\u2019s so easy to make changes to our policy and someone is always at the ready to answer any of our questions. Great job Sonnet!"), h("testimonial-quote", { "container-id": "test2", from: "Sameer S. from Toronto, Ontario" }, "Second We switched to Sonnet last year after 20 years of loyalty to another insurance company\u2026 it\u2019s so easy to make changes to our policy and someone is always at the ready to answer any of our questions. Great job Sonnet!"), h("testimonial-quote", { "container-id": "test3", from: "Sameer S. from Toronto, Ontario" }, "Third Testimonials"), h("testimonial-quote", { "container-id": "test4", from: "Sameer S. from Toronto, Ontario" }, "Fourth Testimonials")), h("br", null), h("br", null), h("h1", null, "Single Component"), h("br", null), h("testimonial-quote", { class: "dark-fill", "container-id": "test5", from: "Sameer S. from Toronto, Ontario", headline: "Testimonial" }, "Single testimonial")));
    }
};
TestimonialExample.TAG_NAME = "testimonial-example";

export { TestimonialExample as testimonial_example };

import { r as registerInstance, h } from './index-21c05bc9.js';

const skiptomainComponentCss = "snt-skip-to-main snt-link{position:absolute;top:0;left:0;z-index:100}";

const SkipToMainComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillLoad() {
        if (!this.mainContentId) {
            this.mainContentId = '#maincontent';
        }
        if (!this.mainContentId.startsWith('#')) {
            this.mainContentId = '#' + this.mainContentId;
        }
        if (!this.ariaLabel) {
            if (this.linkText) {
                this.ariaLabel = this.linkText;
            }
        }
    }
    render() {
        return [
            h("snt-link", { ariaLabel: this.ariaLabel, classNames: SkipToMainComponent.srClasses, href: this.mainContentId }, h("span", null, this.linkText ? this.linkText : h("slot", null)))
        ];
    }
};
SkipToMainComponent.TAG_NAME = 'snt-skip-to-main';
SkipToMainComponent.srClasses = 'sr-only sr-only-focusable';
SkipToMainComponent.style = skiptomainComponentCss;

export { SkipToMainComponent as snt_skip_to_main };

import { r as registerInstance, h } from './index-21c05bc9.js';
import { C as ComponentConstants } from './ComponentConstants-d606bde3.js';
import { C as CookieUtils } from './CookieUtils-d59e6373.js';

const shoppingCartComponentCss = "snt-shopping-cart snt-link{display:flex}snt-shopping-cart snt-link a{position:relative;font-size:1.5rem;display:flex;position:relative;text-decoration:none;margin:0 0.5rem 0.25rem}snt-shopping-cart .item-counter{position:absolute;top:-15%;right:-40%;height:14px;width:14px;border:1px solid #323232;background-color:#6ebac5;border-radius:50%;color:#323232;font-size:10px;line-height:14px;text-align:center;vertical-align:center}";

const ShoppingCartComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.cartValue = "0";
    }
    componentDidLoad() {
        const cartValue = CookieUtils.readCookie(ComponentConstants.CART_COOKIE_NAME);
        this.cartValue = cartValue || this.cartValue;
    }
    render() {
        if (this.cartValue && parseInt(this.cartValue) > 0) {
            return (h("snt-link", { href: ShoppingCartComponent.SHOPPING_CART_URL }, h("snt-icon", { styleClasses: "iconNavCartEmpty" }), h("span", { class: "item-counter" }, this.cartValue)));
        }
    }
};
ShoppingCartComponent.TAG_NAME = "snt-shopping-cart";
ShoppingCartComponent.SHOPPING_CART_URL = "https://secure.sonnet.ca/#/shopping_cart";
ShoppingCartComponent.style = shoppingCartComponentCss;

export { ShoppingCartComponent as snt_shopping_cart };

import { r as registerInstance, h } from './index-21c05bc9.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { C as ComponentConstants } from './ComponentConstants-d606bde3.js';
import { C as CookieUtils } from './CookieUtils-d59e6373.js';

const loginComponentCss = "snt-login a{text-decoration:none;white-space:nowrap;font-size:1rem;line-height:1.3125rem}";

const LoginComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.authed = "0";
        this.languageJson = StringUtils.empty();
        this.languageStrings = {};
    }
    componentWillLoad() {
        try {
            this.languageJson && (this.languageStrings = JSON.parse(this.languageJson));
        }
        catch (e) {
            console.error(e);
        }
        ;
    }
    componentDidLoad() {
        const authed = CookieUtils.readCookie(ComponentConstants.AUTH_COOKIE_NAME);
        this.authed = authed || this.authed;
    }
    render() {
        return ((this.authed && parseInt(this.authed) == 1) ?
            h("snt-link", { href: LoginComponent.ACCOUNT_DASHBOARD_URL }, h("snt-icon", { styleClasses: "icon-icon_nav_LoggedIn_act" }))
            :
                h("snt-link", { href: LoginComponent.ACCOUNT_LOGIN_URL }, this.languageStrings["login"] || "Log In"));
    }
};
LoginComponent.TAG_NAME = "snt-login";
LoginComponent.ACCOUNT_DASHBOARD_URL = "https://secure.sonnet.ca/#/account/dashboard";
LoginComponent.ACCOUNT_LOGIN_URL = "https://secure.sonnet.ca/#/login";
LoginComponent.style = loginComponentCss;

export { LoginComponent as snt_login };

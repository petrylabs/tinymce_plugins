class LanguageUtils {
    static isEnglish() {
        return document.body.lang == this.LANGUAGE_CODES.en;
    }
    static isFrench() {
        return document.body.lang == this.LANGUAGE_CODES.fr;
    }
    static current() {
        return this.isFrench() ? this.LANGUAGE_CODES.fr : this.LANGUAGE_CODES.en;
    }
    static getVariablesFromString(languageString, requiredLanguageVariables) {
        try {
            const parsedJson = JSON.parse(languageString);
            const languageVariables = new Map();
            requiredLanguageVariables.forEach((key) => {
                if (parsedJson.hasOwnProperty(key)) {
                    languageVariables.set(key, parsedJson[key]);
                }
                else {
                    console.error(`Required language variable '${key}' not passed through 'language-string' property.`);
                }
            });
            return languageVariables;
        }
        catch (e) {
            throw new Error("Invalid JSON string in language-string attribute.");
        }
    }
}
LanguageUtils.LANGUAGE_CODES = {
    "en": "en-CA",
    "fr": "fr-CA"
};

export { LanguageUtils as L };

class ReflectionUtils {
    static async getObjectReference(value, base) {
        if (!(base)) {
            base = await __sc_import_sonnet('./index-99952bad.js');
        }
        return value.split('.').reduce(function (obj, i) {
            const reference = obj[i];
            if (reference) {
                return reference;
            }
            throw Error(`Argument value with value ${value} does not exist.`);
        }, base);
    }
}

export { ReflectionUtils as R };

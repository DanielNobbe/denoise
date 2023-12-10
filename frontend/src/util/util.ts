export function isBrowser(): boolean {
    return typeof window !== "undefined";
};

export function convertDate(dateValue: Date): string {
    const date = new Date(dateValue);
    const yyyy = date.getFullYear();
    let mm = (date.getMonth() + 1).toString();
    let dd = (date.getDate()).toString();
    let h = (date.getHours()).toString();
    let m = (date.getMinutes()).toString();
    mm = mm.length === 1 ? "0" + mm : mm;
    dd = dd.length === 1 ? "0" + dd : mm;
    h = h.length === 1 ? "0" + h : mm;
    m = m.length === 1 ? "0" + m : mm;
    return `${dd}/${mm}/${yyyy} ${h}:${m}`;
};

export const isJsonString = (str: string): boolean => {
    if (typeof str !== "string" || isStringNumber(str)) {
        return false;
    }
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
};

export const isStringNumber = (str: string): boolean => {
    try {
        let number = Number.parseInt(str);
        if (Number.isNaN(number)) {
            return false;
        }
        return true;
    } catch (e) {
        return false;
    }
}
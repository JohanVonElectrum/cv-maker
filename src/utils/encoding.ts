import CV from "@/types/cv.ts";

Date.prototype.toJSON = function () {
    return `%date%${this.getMonth()}%${this.getFullYear()}`;
};

export function encodeCV(cv: CV): string {
    return btoa(JSON.stringify(cv));
}

export function decodeCV(base64: string): CV {
    return JSON.parse(atob(base64), (_, value) => {
        if (typeof value === "string" && value.startsWith("%date%")) {
            const [month, year] = value.slice(6).split("%").map(x => parseInt(x));
            const date = new Date(year, month);
            return date;
        }
        return value;
    });
}

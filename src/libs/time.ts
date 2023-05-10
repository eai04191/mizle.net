export function formatDate(date: Date | string) {
    return new Intl.DateTimeFormat("ja-JP", {
        dateStyle: "medium",
        timeStyle: "long",
        timeZone: "Asia/Tokyo",
    }).format(typeof date === "string" ? new Date(date) : date);
}

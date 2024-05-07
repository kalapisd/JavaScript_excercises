export function getSecondsOfThisYearUntilNow() {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 0);
    const diff = now - startOfYear;
    const seconds = Math.floor(diff/ 1000);
    return seconds;
}
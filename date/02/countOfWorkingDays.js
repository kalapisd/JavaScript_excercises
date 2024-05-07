export function countOfWorkingDays (startDate, endDate) {

    if (startDate > endDate) {
        throw new Error("The first parameter is earlier date, than second!");
    }

    let count = 0;
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {

        if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
            count++;
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return count;
}
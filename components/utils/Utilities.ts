
export function getTime(date: Date | undefined): string {
    return date ? `${date.getHours()}:${date.getMinutes()}` : ``;
}

export function getFixedDigitNumber(param: number | undefined): string {
    return param ? parseFloat(`${param}`).toFixed(2) : '0.00';
}

export const getDayFromNumber = (date: Date): string => {
    switch (date.getDay()) {
        case 0:
            return `Sun`
        case 1:
            return `Mon`
        case 2:
            return `Tue`
        case 3:
            return `Wed`
        case 4:
            return `Thu`
        case 5:
            return `Fri`
        default:
            return `Sat`
    }
}

export const getMonthFromNumber = (date: Date): string => {
    switch (date.getMonth()) {
        case 0:
            return 'Jan';
        case 1:
            return 'Feb';
        case 2:
            return 'Mar';
        case 3:
            return 'Apr';
        case 4:
            return 'May';
        case 5:
            return 'Jun';
        case 6:
            return 'Jul';
        case 7:
            return 'Aug';
        case 8:
            return 'Sep';
        case 9:
            return 'Oct';
        case 10:
            return 'Nov';
        default:
            return 'Dec';
    }
}

export const getDate = (date: Date): string => {
    return `${getDayFromNumber(date)}, ${date.getDate()} ${getMonthFromNumber(date)}`
}
import { data } from "./data"

export function getTime(dateInMs) {
    const date = new Date(dateInMs)
    let hours = date.getHours()
    let period = 'AM'
    if (hours >= 12) {
        period = 'PM'
        hours -= 12
    }
    if (hours === 0) {
        hours = 12
    }

    return `${hours}:00 ${period}`
}

// for (let i = 0; i < data.prices.length; i++) {
//     console.log(getTime(data.prices[i][0]))
// }



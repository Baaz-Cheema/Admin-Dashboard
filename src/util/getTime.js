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

    // const date = new Date(dateInMs);
    // const options = { month: 'short', day: 'numeric' };
    // const formattedDate = date.toLocaleDateString('en-US', options);
    // return formattedDate
}

// for (let i = 0; i < data.prices.length; i++) {
//     console.log(getTime(data.prices[i][0]))
// }



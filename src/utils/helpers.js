export const range = (start, end) => {
    const arr = [start]
    while (start < end) {
        arr.push(start += 1)
    }
    return arr
}

export const groupUp = (arr) => {
    const formatted = arr.map(d => {
        return {
            date: Number(d.date.split("-")[0]),
            dividend: d.dividend
        }
    })

    return formatted.reduce( (acc, val) => ({ ...acc, [val.date]: (acc[val.date] || 0) + val.dividend } ), {} )
}

export const getDiff = (arr1, arr2) => {
    const diff = arr1
        .filter(x => !Object.keys(arr2)
        .map(y => Number(y)).includes(x))
        .map(d => { return { year: d, dividend: 0 } })
    return diff
}

export const getSumDividend = (arr) => arr.map(d => d.dividend).reduce((a, b) => a + b)

export const getSumWeightedDividend = (arr) => {
    const newArr = [...arr].splice(0, 5) 
    const weights = [3, 2, 1, 1, 1]
    const res = newArr
        .sort((a, b) => b - a)
        .map((d, i)=> d.dividend * weights[i])
        .reduce((a, b) => a + b)
    return res
} 
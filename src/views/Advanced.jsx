import React, { useState, useEffect } from "react"

import { 
    range,
    groupUp, 
    getDiff
} from "../utils/helpers"
import axios from "axios"
import Board from "../components/Board"

export default function Advanced() {
    const [ data, setData ] = useState([])

    useEffect(() => {
        (async function () {
            const res = await axios.get("https://gist.githubusercontent.com/VincentLeV/a0c326b9cbeabf63b4e5e02aa9779f6c/raw/b916a9e3d40aef926bf7e3b9b4db308d7da1ca5d/shares_advanced.json")

            const transformed = res.data.map(s => {
                const yearRange = range(2017, 2021)
                const group = groupUp(s.dividendHistory)
                const difference = getDiff(yearRange, group)
                const original = Object.entries(group).map( ([key, value]) => ( {year: Number(key), dividend: value} ) )
                
                s.dividendHistory = [...original, ...difference]
                    .sort((a, b) => b.year - a.year)
                    .splice(0, 5)

                return s
            })
            setData(transformed)
        })()
    }, [])

    return (
        <section style={{ marginLeft: 20 }}>
            <h2>Advanced</h2>
            <Board data={data} />
        </section>
    )
}

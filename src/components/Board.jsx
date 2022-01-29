import React from "react"

import {
    getSumDividend,
    getSumWeightedDividend 
} from "../utils/helpers"

export default function Board({ data }) {
    return (
        <article>
            {data.map(s => {
                const found = s.dividendHistory.find(h => h.year === 2021)
                const sumDiv = getSumDividend(s.dividendHistory)
                const sumWeightedDiv = getSumWeightedDividend(s.dividendHistory)

                return (
                    <article style={{ marginBottom: 20 }} key={s.share}>
                        <div>
                            <span>Share: </span>
                            <span style={{ fontWeight: "bold" }}>{s.share}</span>
                        </div>
                        <div>
                            <span>Company: </span>
                            <span style={{ fontWeight: "bold" }}>{s.company}</span>
                        </div>
                        <div>
                            <span>Price: </span>
                            <span style={{ fontWeight: "bold" }}>{s.price}</span>
                        </div>
                        <div>
                            <span>Last Year Dividend: </span>
                            <span style={{ fontWeight: "bold" }}>{found.dividend}</span>
                        </div>
                        <div>
                            <span>Dividend yield-%: </span>
                            <span style={{ fontWeight: "bold" }}>{(found.dividend / s.price * 100).toFixed(1)}</span>
                        </div>
                        <div>
                            <span>5-year average dividend yield-%: </span>
                            <span style={{ fontWeight: "bold" }}>{(sumDiv / 5 / s.price * 100).toFixed(1)}</span>
                        </div>
                        <div>
                            <span>5-year weighted average dividend yield-%: </span>
                            <span style={{ fontWeight: "bold" }}>{(sumWeightedDiv / 5 / s.price * 100).toFixed(1)}</span>
                        </div>
                    </article>
                )
            })}
        </article>
    )
}

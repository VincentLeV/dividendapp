import React, { useState, useEffect } from "react"

import axios from "axios"
import Board from "../components/Board"

export default function Simple() {
    const [ data, setData ] = useState([])

    useEffect(() => {
        (async function () {
            const res = await axios.get("https://gist.githubusercontent.com/VincentLeV/a0c326b9cbeabf63b4e5e02aa9779f6c/raw/1165755ed5d4399218423dfd08e68a6ae3d43d85/simple_shares.json")
            setData(res.data)
        })()
    }, [])

    return (
        <section style={{ marginRight: 20 }}>
            <h2 style={{ textAlign: "center" }}>Simple</h2>
            <Board data={data} />
        </section>
    )
}

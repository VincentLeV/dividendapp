import React from "react"

import Simple from "./views/Simple"
import Advanced from "./views/Advanced"

function App() {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Dividend</h1>

            <main 
                style={{ 
                    display: "flex", 
                    flexDirection: "row", 
                    alignItems: "center", 
                    justifyContent: "space-between",
                    maxWidth: 700,
                    margin: "auto"
                }}
            >
                <Simple />
                <Advanced />
            </main>
        </div>
    )
}

export default App

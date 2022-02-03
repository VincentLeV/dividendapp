import React from "react"

import Simple from "./views/Simple"
import Advanced from "./views/Advanced"

function App() {
    return (
        <div>
            <main 
                style={{ 
                    maxWidth: 700,
                    margin: "auto"
                }}
            >
                <h1 style={{ textAlign: "center" }}>Dividend</h1>
                <div
                    style={{
                        display: "flex", 
                        flexDirection: "row", 
                        alignItems: "center", 
                        justifyContent: "space-between",
                    }}
                >
                    <Simple />
                    <Advanced />
                </div>
            </main>
        </div>
    )
}

export default App

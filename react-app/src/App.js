//Imports
import { useState } from "react"
import phoneContext from "./contexts/phoneContext"
import "./App.css"

function App() {

  //State
  const [phoneState, setPhoneState] = useState({
    apps: [
      {
        name: "phone",
        icon: "",
        position: 0,
      },
    ],
  })

  //JSX
  return (
    <div className="App">
      <phoneContext.Provider value={{ phoneState, setPhoneState }}>
        <p>Genesis</p>
      </phoneContext.Provider>
    </div>
  )
}

export default App

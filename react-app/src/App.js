//Imports
import { useState } from "react"
import phoneContext from "./contexts/phoneContext"
import Phone from "./components/Phone"
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
        <Phone />
      </phoneContext.Provider>
    </div>
  )
}

export default App

import { useContext } from "react"
import phoneContext from "../contexts/phoneContext"
import "./Phone.css"

function Phone() {
  const { phoneState, setPhoneState } = useContext(phoneContext)

  return (
    <div id='Phone'>
        
    </div>
  )
}

export default Phone

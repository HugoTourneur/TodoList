import { context } from "../pages/_app"
import { useContext } from "react"

const AddListButton = () => {
  
  const { state, setState } = useContext(context)
  
  return(
    <button >+</button>
  )
}

export default AddListButton
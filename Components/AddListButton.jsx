import { useContext } from "react"
import { context } from "../pages/_app"
import AddListForm from "./AddListForm"

const AddListButton = () => {
  
  const { showAddListModal, setShowAddListModal } = useContext(context)
  const handleClick = () => {
    console.log(showAddListModal)
    setShowAddListModal(true)
    console.log(showAddListModal)
  }
  
  return (
    <>
      <button onClick={handleClick}>+</button>
      {showAddListModal ? (<AddListForm />) : null}
    </>
  )
}

export default AddListButton
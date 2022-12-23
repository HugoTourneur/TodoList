import { useContext } from "react"
import { context } from "../pages/_app"
import AddListModal from "./ui/AddListModal"

const AddListButton = () => {
  const { showAddListModal, setShowAddListModal } = useContext(context)
  const handleClick = () => {
    setShowAddListModal(true)
  }
  
  return (
    <>
      <button className="border rounded-md px-4 py-2 text-lg" onClick={handleClick}>+</button>
      {showAddListModal ? (<AddListModal />) : null}
    </>
  )
}

export default AddListButton
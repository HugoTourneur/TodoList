import { useContext } from "react"
import { context } from "../pages/_app"
import ModifyListForm from "./ModifyListForm"

const ModifyListModal = (props) => {
  const { setShowModifyListModal } = useContext(context)
  const {listId} = props
  const closeIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
  </svg>
  
  const handleClick = () => {
    setShowModifyListModal(false)
  }

  return (
    <div className="bg-white w-full h-full inset-0 p-0 absolute z-10">
      <header className="border-b flex justify-between p-2">
        <h1 className="font-bold text-lg">Modify todo list</h1>
        <button onClick={handleClick}>{closeIcon}</button>
      </header>
      <ModifyListForm listId={listId} />    
    </div>
  )
}

export default ModifyListModal
import { useContext } from "react"
import NameList from "./NameList"
import { context } from '../pages/_app'
import AddListButton from "./AddListButton"

const Header = () => {

  const { state } = useContext(context)
  
  return (
    <div>
      <NameList/>
      <AddListButton />
    </div>
  )
}

export default Header
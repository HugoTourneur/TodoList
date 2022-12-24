import AddListButton from "./AddListButton"
import NameList from "./NameList"

const Header = () => {
  return (
    <div className="overflow-x-auto flex border-b pt-2">
      <nav className="flex">
        <NameList/>
        <AddListButton />
      </nav>
    </div>
  )
}

export default Header
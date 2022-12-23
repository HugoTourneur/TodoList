import { useContext } from "react"
import { context } from "../pages/_app"
import ListHeader from "./ListHeader"

const NameList = () => {
  const { state } = useContext(context)
  const lists = state.todoList
  
return (
    <ul className="flex">
    {Object.values(lists).map((item) => (
        <ListHeader list={ item } key={`${item.id}${item.name}`}>{item.name}</ListHeader>
      ))}
    </ul>
  )
}

export default NameList
import { useCallback, useContext } from "react"
import { context } from "../pages/_app"

const ListHeader = (props) => {
  const { children, list, key, id, ...otherProps } = props
  const { setDisplayedList, state } = useContext(context)
  const totalTask = Object.values(state.todoList[id].todos).length
  const doneTask = state.todoList[id].doneTask

  const handleClick = useCallback(() => {
    setDisplayedList(list)
  },
    [list, setDisplayedList]
  )

  return (
    <li key={key} className="border-x border-t rounded-t-lg">
      <div className="flex items-center px-1">
        <button className="text-lg font-bold px-4 py-2 active:bg-slate-50" onClick={handleClick} {...otherProps}>{children}</button>
        
        <div className="bg-blue-500 rounded-full px-2 flex items-end">{totalTask}{doneTask > 0 ? <div className="bg-green-500 rounded-full px-2 ">{doneTask}</div> : <></>}  </div>
      </div>
    </li>
  )
}

export default ListHeader

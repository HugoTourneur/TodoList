import { useCallback, useContext } from "react"
import { context } from "../../pages/_app"

const Task = (props) => {
  const { key, id, object } = props
  const {state, setState, displayedList} = useContext(context)
  const delIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
</svg>

  const handleClick = useCallback(() => {
    if (state.todoList[displayedList.id].todos[id].done === true)
    {
      state.todoList[displayedList.id].doneTask -= 1
    }

    delete state.todoList[displayedList.id].todos[id]
    setState(() => {
      return {
        ...state
      }
    })
  }, [displayedList.id, id, setState, state])

  const handleCheckBox = useCallback(() => {
    if (state.todoList[displayedList.id].todos[id].done === true)
    {
      state.todoList[displayedList.id].todos[id].done = false
      state.todoList[displayedList.id].doneTask -= 1 
    } else {
      state.todoList[displayedList.id].todos[id].done = true
      state.todoList[displayedList.id].doneTask += 1 
    }
    
    setState(() => {
      return {
        ...state
      }
    })
  }, [setState, displayedList.id, id, state])
  
  return (
    <li key={key} className="p-2 border-b flex gap-4 item-center justify-between group">
      <div className="flex gap-4 items-center">
        <input type="checkbox" className="bg-gray-500 checked:bg-green-500" onChange={handleCheckBox}/>
        <span>{object.description}</span>
      </div>
      <div className="invisible group-hover:visible">
        <button onClick={handleClick}>{delIcon}</button>
      </div>
    </li>
  )
}

export default Task
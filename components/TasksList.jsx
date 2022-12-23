import { useContext } from "react"
import { context } from "../pages/_app"
import Task from "./Task"
import ToolBar from "./ToolBar"

const TasksList = () => {
  const { displayedList } = useContext(context)
  const list = displayedList

  return (
    <>    
      {list.todos === null || list.todos === undefined ? <></> :
        <>
          <ToolBar/>
          <div>
            {Object.keys(list.todos).map((key) => (
              <>
                <Task key={key} id={key} object={list.todos[key]} />
              </>
            ))}
          </div>
        </>}
    </>
  )
}

export default TasksList
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
            {Object.values(list.todos).map((item) => (
              <>
                <Task key={`${item.description}`} object={item} />
              </>
            ))}
          </div>
        </>}
    </>
  )
}

export default TasksList
import { useContext } from "react"
import { context } from "../pages/_app"
import TasksFrameHeader from "./TasksFrameHeader"
import TasksList from "./TasksList"

const TasksFrame = () => {
  const { displayedList } = useContext(context)
  const { id } = {displayedList}


return (
    <>
    <TasksFrameHeader listId={ id } />
      <TasksList />
    </>
  )
}

export default TasksFrame
import { useContext } from 'react'
import { context } from '../pages/_app'
import Task from './Task'

const TasksList = () => {
  const { displayedList } = useContext(context)
  
  return (
    <div>
      {displayedList.map((item) => (
        <>
          <Task>{item}</Task>
        </>
      ))}
    </div>
  )
}

export default TasksList
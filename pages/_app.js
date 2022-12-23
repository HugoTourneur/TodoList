import { createContext, useState } from "react"
import "../styles/globals.css"

const context = createContext()

const MyApp = ({ Component, pageProps }) => {
  const [state, setState] = useState({
    lastTodoListId: 1,
    todoList: {
      0: {
      id: 0,
      name: "Homework",
      todos: {
        1: {
          description: "HTML / CSS",
          done: false
        },
        2: {
          description: "React",
          done: true
        }
      }
      },
      1: {
        id: 1,
        name: "Chore",
        todos: {
          1: {
            description: "Take a shower",
            done: false
          }
        }
      }
    }
  })
  const [showAddListModal, setShowAddListModal] = useState(false)
  const [showModifyListModal, setShowModifyListModal] = useState(false)
  const [showAddTaskModal, setShowAddTaskModal] = useState(false)

  const [displayedList, setDisplayedList] = useState({})

  setState

  return (
    <context.Provider
      value={{
        state,
        setState,
        showAddListModal,
        setShowAddListModal,
        displayedList,
        setDisplayedList,
        showAddTaskModal,
        setShowAddTaskModal,
        showModifyListModal,
        setShowModifyListModal
      }}
    >
      <Component {...pageProps} />
    </context.Provider>
  )
}

export default MyApp
export { context }

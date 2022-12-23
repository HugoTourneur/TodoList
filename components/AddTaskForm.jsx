import { Form, Formik } from "formik"
import { useCallback, useContext } from "react"
import * as yup from "yup"
import { context } from "../pages/_app"
import FormField from "/components/FormField"
import Text from "/components/generic/Text"

const AddTaskForm = (props) => {
  const { listId} = props
  const { state, setState, setShowAddTaskModal, displayedList, setDisplayedList } = useContext(context)
  const initialValues = {
    description: ""
  }

  const addTodo = (todos, newTask) => {
    return {...todos, ...newTask}
  }

  const validationSchema = yup.object().shape({
    description: yup.string()
  })

  const handleSubmit = useCallback((values, { resetForm }) => {
    const refLastTaskId = Object.keys(displayedList.todos).length + 1
    const newId = displayedList[refLastTaskId]
    const previousTodos = state.todoList[listId].todos
    const newTask = {
      [newId]: {
        description: values.description,
        status: false
      }
    }
    setState((prevState) => {
      return {
        ...prevState,
        todoList: {
          ...prevState.todoList,
          [listId]: {
            ...prevState.todoList[listId],
            todos: { ...previousTodos, ...newTask }
          }
        }
      }
    }
    )
    setDisplayedList(Object.values(state.todoList[listId].todos))
    console.log(state)
    resetForm({ values: "" })
    setShowAddTaskModal(false)
  },
    [displayedList, state.todoList, setState, setShowAddTaskModal, setDisplayedList, listId]
  )

  const handleClose = () => {
    setShowAddTaskModal(false)
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Text>Description:</Text>
          <FormField 
            label="Description"
            name="description"
            placeholder="Task's descritpion"
            />
          <button type="submit">Enter</button>
        </Form>
      </Formik>
      <button onClick = {handleClose}>Close</button>
    </>
  )
}

export default AddTaskForm
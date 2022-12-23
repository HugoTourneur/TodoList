import { Form, Formik } from "formik"
import { useCallback, useContext } from "react"
import * as yup from "yup"
import { context } from "../pages/_app"
import FormField from "/components/FormField"
import Text from "/components/generic/Text"

const AddTaskForm = (props) => {
  const { listId } = props
  const { state, setState, setShowAddTaskModal, displayedList, setDisplayedList } = useContext(context)
  const initialValues = {
    description: ""
  }
  
  const validationSchema = yup.object().shape({
    description: yup.string()
  })

  const handleSubmit = useCallback((values, { resetForm }) => {
    const newId = Object.values(displayedList.todos).length + 1
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
          <Text className="font-bold px-4 py-1">Description:</Text>
          <FormField 
            label="Description"
            name="description"
            placeholder="Task's descritpion"
            />
          <div className="flex py-4 gap-2 items-center justify-end px-4">
            <button className="bg-blue-600 active:bg-blue-700 text-white border rounded-md font-semibold px-4 py-2 text-lg" type="submit">Save</button>
            <button className="bg-white active:bg-slate-50 text-black border rounded-md font-semibold px-4 py-2 text-lg" onClick = {handleClose}>Cancel</button>
          </div>
        </Form>
      </Formik>
    </>
  )
}

export default AddTaskForm
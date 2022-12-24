import { Form, Formik } from "formik"
import { useCallback, useContext } from "react"
import * as yup from "yup"
import { context } from "../../pages/_app"
import FormField from "/components/FormField"
import Text from "/components/generic/Text"

const ModifyListForm = (props) => {
  const { setState, setShowModifyListModal, state } = useContext(context)
  const { listId } = props
  const previousName = state.todoList[listId].name

  const initialValues = {
    description: previousName
  }

  const validationSchema = yup.object().shape({
    description: yup.string()
  })

  const handleSubmit = useCallback((values, { resetForm }) => {
    const newState = Object.values(state.todoList).map((item) => {
      if (item.name === previousName)
      {
        const updatedList = {
          id: item.id,
          name: values.description,
          doneTask: item.doneTask,
          todos: item.todos
        }

        return updatedList
      }

      return item
    })

    setState((previousState) => ({
      lastTodoListId: previousState.lastTodoListId,
      todoList: {
        ...newState
      }
    }))
    resetForm({ values: "" })
    setShowModifyListModal(false)
  },
    [state, setState, setShowModifyListModal, previousName]
  )

  const handleClose = () => {
    setShowModifyListModal(false)
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Text className="font-bold px-4 py-1">New name</Text>
          <FormField
            label=""
            name="description"
            placeholder="Enter the list's name"
          />
          <div className="flex py-4 gap-2 items-center justify-end px-4">
            <button className="bg-blue-600 active:bg-blue-700 text-white border rounded-md font-semibold px-4 py-2 text-lg" type="submit">Save</button>
            <button className="bg-white active:bg-slate-50 text-black border rounded-md font-semibold px-4 py-2 text-lg" onClick={handleClose}>Cancel</button>
          </div>
        </Form>
      </Formik>
    </>
  )
}

export default ModifyListForm
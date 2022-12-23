import { Form, Formik } from "formik"
import { useCallback, useContext } from "react"
import * as yup from "yup"
import { context } from "../../pages/_app"
import FormField from "/components/FormField"
import Text from "/components/generic/Text"

const AddListForm = () => {
  const { setState, setShowAddListModal, state } = useContext(context)
  
  const initialValues = {
    description: ""
  }

  const validationSchema = yup.object().shape({
    description: yup.string()
  })

  const handleSubmit = useCallback((values, { resetForm }) => {
    const lastId = state.lastTodoListId + 1
    setState((previousState) => ({
      lastTodoListId: lastId,
      todoList: {
        ...previousState.todoList,
        [lastId]: {
          id: state.lastTodoListId+1,
          name: values.description,
          todos: {},
        },
      },
    }))
      resetForm({ values: "" })
      setShowAddListModal(false)
    },
    [setState, setShowAddListModal, state.lastTodoListId]
  )

  const handleClose = () => {
    setShowAddListModal(false)
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Text className="font-bold px-4 py-1">Description</Text>
          <FormField 
            label=""
            name="description"
            placeholder="Enter the list's name"
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

export default AddListForm
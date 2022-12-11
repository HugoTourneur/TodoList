import { Form, Formik } from 'formik'
import { useCallback, useContext } from 'react'
import * as yup from 'yup'
import { context } from "../pages/_app"
import FormField from '/Components/FormField'
import Text from '/Components/generic/Text'

const AddListForm = (props) => {

  const { setState, setShowAddListModal } = useContext(context)
  
  const initialValues = {
    description: ""
  }

  const validationSchema = yup.object().shape({
    description: yup.string()
  })

  const handleSubmit = useCallback((values, { resetForm }) => {
      const newList = {
        name: values.description,
      }
      setState((current) => [...current, newList])
      resetForm({ values: "" })
      setShowAddListModal(false)
    },
    [setState, setShowAddListModal]
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
          <Text>Description:</Text>
          <FormField 
            label="Description"
            name="description"
            placeholder="Description's name"
            />
          <button type="submit">Enter</button>
        </Form>
      </Formik>
      <button onClick = {handleClose}>Close</button>
    </>
  )
}

export default AddListForm
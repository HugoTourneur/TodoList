import { Form, Formik } from 'formik'
import * as yup from 'yup'
import Input from '/Components/generic/Input'
import Text from '/Components/generic/Text'
import Button from '/Components/generic/Button'
import FormField from '/Components/FormField'

const AddListForm = (props) => {
  
  const initialValues = {
    description: ""
  }

  const validationSchema = yup.object().shape({
    description: yup.string()
  })

  const handleSubmit = (values, { resetForm }) => {
    console.log("HELLLLLL")
    resetForm({ values: "" })
  }

  return (
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
          placeholder=""
          />
        <Button type="submit">Enter</Button>
      </Form>
    </Formik>
  )
}

export default AddListForm
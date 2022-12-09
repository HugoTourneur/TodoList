import classNames from 'classnames'
import { useField } from 'formik'

const Input = (props) => {
  const { name, children, className, ...otherProps } = props

  return <input {...otherProps} className={classNames(className)} />
}

export default Input
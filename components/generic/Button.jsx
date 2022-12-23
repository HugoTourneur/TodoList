import classNames from 'classnames'

const Button = (props) => {
  const { className, children, ...otherProps } = props

  return <button { ...otherProps } className={classNames(className)}>{ children }</button>
}

export default Button

const ListHeader = (props) => {
  const { children, onClick, ...otherProps } = props

  return <button onClick= { onClick } { ...otherProps }>{children}</button>
}

export default ListHeader

import { useCallback, useContext } from "react"
import { context } from "../pages/_app"

const ListHeader = (props) => {

  const { children, list, onClick, ...otherProps } = props
  const { setDisplayedList } = useContext(context)
  
  const handleClick = useCallback(() => {
    setDisplayedList(list)
  },
    [setDisplayedList, list]
  )

  return <button onClick= { handleClick } { ...otherProps }>{children}</button>
}

export default ListHeader

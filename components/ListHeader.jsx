import { useCallback, useContext } from "react"
import { context } from "../pages/_app"

const ListHeader = (props) => {
  const { children, list, key, ...otherProps } = props
  //console.log(key)
  const { setDisplayedList } = useContext(context)

  const handleClick = useCallback(() => {
    setDisplayedList(list)
  },
    [list, setDisplayedList]
  )

  return (
    <li key={key} className="ml-2 border-x border-t rounded-t-lg">
      <button className="text-lg font-bold px-4 py-2 active:bg-slate-50" onClick={handleClick} {...otherProps}>{children}</button>
    </li>
  )
}

export default ListHeader

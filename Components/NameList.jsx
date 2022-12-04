import { useContext } from 'react'
import { context } from '../pages/_app'

const NameList = () => {
  const {state} = useContext(context)
  

  return (
    <>
      {state.map((item) => (
        <button key={item.id}>{item.name}</button>
      ))}
    </>
  )
}

export default NameList
import { useContext } from 'react'
import { context } from '../pages/_app'
import ListHeader from './ListHeader'

const NameList = () => {
  const {state} = useContext(context)
  

  return (
    <>
      {state.map((item) => (
        <ListHeader list={ item } key={item.id}>{item.name}</ListHeader>
      ))}
    </>
  )
}

export default NameList
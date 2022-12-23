//import { Component } from 'react'
import classNames from "classnames"

const Text = (props) => {
  const { children, className } = props

  return (
    <h1 className={classNames(className)}  >{ children }</h1>
  )
}

export default Text
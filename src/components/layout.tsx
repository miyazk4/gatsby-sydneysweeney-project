import React from "react"
import Header from "./header"
import "../styles/css-reset.scss"

const Layout = props => {
  return (
    <div>
      <Header />
      <div>{props.children}</div>
    </div>
  )
}

export default Layout

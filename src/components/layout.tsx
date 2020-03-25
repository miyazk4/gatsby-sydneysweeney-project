import React from "react"
import Header from "./header"
import "../styles/css-reset.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        <div className={layoutStyles.interiorContent}>
          <div>{props.children}</div>
        </div>
      </div>
    </div>
  )
}

export default Layout

import React, { useState } from "react"
import hamburgerStyles from "./hamburger.module.scss"
import Navigation from "./navigation"
import cn from "classnames"

const Hamburger = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div>
      <div
        className={cn(hamburgerStyles.hamburgerMenu, {
          [hamburgerStyles.change]: open,
        })}
        onClick={toggle}
      >
        <div className={hamburgerStyles.bar1}></div>
        <div className={hamburgerStyles.bar2}></div>
        <div className={hamburgerStyles.bar3}></div>
      </div>
      <Navigation open={open} />
    </div>
  )
}

export default Hamburger

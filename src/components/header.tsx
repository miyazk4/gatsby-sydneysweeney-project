import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"
import Hamburger from "./hamburger"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link to="/" className={headerStyles.logo}>
          Home
        </Link>
      </h1>
      <div>
        <Hamburger />
      </div>
    </header>
  )
}

export default Header

import React from "react"
import { Link } from "gatsby"
const Header = () => {
  return (
    <header>
      <div>
        <h1>
          <Link to="/">Home</Link>
        </h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

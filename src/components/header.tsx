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
            <Link to="/" onClick={e => e.preventDefault()}>
              About
            </Link>
            <ul>
              <li>
                <Link to="/about/sydneysweeney">Sydney Sweeney</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

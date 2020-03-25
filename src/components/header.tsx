import React from "react"
import { Link } from "gatsby"
const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">Home</Link>
      </h1>
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
              <li>
                <Link to="/about/contacts">Contacts</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/works">Works</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

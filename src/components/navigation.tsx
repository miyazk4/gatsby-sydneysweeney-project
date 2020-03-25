import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"
import cn from "classnames"

interface NavigationProps {
  open: boolean
}

const Navigation = ({ open }: NavigationProps) => {
  return (
    <nav
      className={cn(headerStyles.navigationContainer, {
        [headerStyles.navigationModalOpen]: open,
      })}
    >
      <ul className={headerStyles.navList}>
        <li className={headerStyles.secondaryNavMain}>
          <Link
            to="/"
            className={headerStyles.navItem}
            onClick={e => e.preventDefault()}
          >
            About
          </Link>
          <ul className={headerStyles.secondaryNavItem}>
            <li>
              <Link to="/about/sydneysweeney" className={headerStyles.navItem}>
                Sydney Sweeney
              </Link>
            </li>
            <li>
              <Link to="/about/contacts" className={headerStyles.navItem}>
                Contacts
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/news" className={headerStyles.navItem}>
            News
          </Link>
        </li>
        <li>
          <Link to="/works" className={headerStyles.navItem}>
            Works
          </Link>
        </li>
        <li>
          <Link to="/gallery" className={headerStyles.navItem}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/register" className={headerStyles.navItem}>
            Register
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation

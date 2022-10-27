import { NavLink } from "react-router-dom"
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav className={styles.container} >
        <img src='/images/werklogo.png' alt='werk logo' />
        <NavLink to="/">WERK.</NavLink>
      {user ?
        <ul>
          <li><NavLink to="/jobs">Job Board</NavLink></li>
          <li><NavLink to="/resources">Resources</NavLink></li>
          <li><NavLink to="/events">Events</NavLink></li>
          <li><NavLink to="/profile">My Profile</NavLink></li>
          <li><NavLink to="" onClick={handleLogout}>Log Out</NavLink></li>
        </ul>
      :
        <ul>
          <li><NavLink to="/login">Log In</NavLink></li>
          <li><NavLink to="/signup">Sign Up</NavLink></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar

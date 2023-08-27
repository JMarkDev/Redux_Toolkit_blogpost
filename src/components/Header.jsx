import { Link } from "react-router-dom"
import "../Styles/Navbar.css"
import { RxHamburgerMenu } from 'react-icons/rx'
import { useState } from "react"

const Header = () => {
  const [nav, setNav] = useState(false)

  const handleClick = () => {
    setNav(!nav)
    console.log('cute')
  }
  
  return (
    <div >
      <nav className="navbar">
        <div className="logo">
          <h2 className="logo">
          ReduxBlog
          </h2>
        </div>
        <div className={`links ${nav ? "showLinks" : ""}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/post">Posts</Link>
            </li>
          </ul>
        </div>
          <div className="bars">
            <i className="bars_icon" onClick={handleClick}><RxHamburgerMenu /></i>
          </div>
      </nav>
    </div>
  )
}

export default Header

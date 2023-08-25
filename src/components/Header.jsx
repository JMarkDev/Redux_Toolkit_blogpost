import { Link } from "react-router-dom"
import "../Styles/Navbar.css"
import { RxHamburgerMenu } from 'react-icons/rx'

const Header = () => {

  const handleClick = () => {
    console.log("hello")
  }
  
  return (
    <div >
      <nav className="navbar">
        <div className="logo">
          <h2 className="logo">
          ReduxBlog
          </h2>
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </div>
          <div className="bars">
            <i className="bars_icon" onClick={() => handleClick()}><RxHamburgerMenu /></i>
          </div>
      </nav>
    </div>
  )
}

export default Header

import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-header-section">
    <div className="wave-image-section">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="wave-image"
        alt="wave"
      />
      <h1 className="wave-text">Wave</h1>
    </div>
    <ul className="nav-menu">
      <li>
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header

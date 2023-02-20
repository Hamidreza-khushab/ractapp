import { NavLink } from 'react-router-dom'
import '../assetes/css/header.css'
const Header = () => {
  return (
    <>
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/products">Productes</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <ul>
        <li><NavLink to="/login">Login</NavLink></li><span>/</span>
        <li><NavLink to="/register">register</NavLink></li>
      </ul>
    </nav>
    </>
  )
}

export default Header
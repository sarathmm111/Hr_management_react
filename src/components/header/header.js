import { Link, NavLink } from "react-router-dom"
import './header.css'
import logo from  './logo.png'

export default function Navbar(){
    return(
    <nav id="nav" className="navbar navbar-expand navbar-dark bg-dark">
  <div className="container-fluid">
    <Link to="/">
  <img  src={logo} alt="Logo" height="70" className="d-inline-block align-text-top rounded-circle mt-3" />
  </Link>
  <NavLink to={'/'} id="hrms" className="navbar-brand">HRMS</NavLink>
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink id="emplo" to={'/employees'} className="navbar-brand">Employees</NavLink>
        </li>
        <li className = "nav-item">
        <NavLink id="abou" to={'/about'}className="navbar-brand">About</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
)
}
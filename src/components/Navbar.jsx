import { NavLink } from "react-router-dom"

export default function Navbar(){
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand">Navbar</span>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" style={({isActive}) => {
                  return {
                    color: isActive ? 'red' : ''
                  }
                }} to='/'>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/about'>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/album'>Album</NavLink>
              </li>
            </ul>

            <div className="list-group">
              <NavLink className="list-group-item list-group-item-action" to='/' aria-current="true">
                Home test
              </NavLink>
              <NavLink className="list-group-item list-group-item-action" to='/about' aria-current="true">
                About test
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
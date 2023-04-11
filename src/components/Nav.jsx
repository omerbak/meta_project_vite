import { useState } from 'react'
import logo from "../icons_assets/Logo.svg"
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  function handleMenu(){
    setDisplayMenu((prev) => !prev);
  }


  return (
    <nav className={displayMenu ?'navbar open-menu' : 'navbar'}>
        <div className="container">
          <div className='mobile-menu'>
            <Link to="/" className= 'brand-logo' >
              <img src={logo} alt="little lemon logo" />
            </Link>
            {displayMenu ? <span class="material-symbols-outlined hamberger-menu" onClick={handleMenu}>close</span>
            : <span class="material-symbols-outlined hamberger-menu" onClick={handleMenu}>menu</span>}
          </div>
          <ul className='desk-menu'>
            <li><NavLink to="/" className={({isActive}) => isActive? 'link active' : 'link' }>Home</NavLink></li>
            <li>About</li>
            <li>Menu</li>
            <li><NavLink className={({isActive}) => isActive? 'link active' : 'link' } to="/booking">Reservations</NavLink></li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
    </nav>
  )
}

export default Nav
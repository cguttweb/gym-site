import React from 'react'
import { Link } from 'gatsby'

const NavBar = () => {
    return (
        // <div>
        <nav className="main-nav" style={{ display: `flex`, justifyContent: `center`, flexGrow: 1 }}>
            <ul style={{ margin: 0, padding: `1rem 0` }}>
                <Link to="/">Home</Link>
                <Link to="/membership">Membership</Link>
                <Link to="/spa">Spa</Link>
                <Link to="/contact">Contact</Link>
            </ul>
        </nav>
        // </div>
    )
}

export default NavBar

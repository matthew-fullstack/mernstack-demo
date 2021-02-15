import React from 'react'
import { NavLink } from 'react-router-dom'
import { history } from '..';

export const NavBar = () => {

    const handleLogout = () => {
        window.localStorage.removeItem('jwt');
        history.push('/login');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to='/dashboard' className="nav-link" >Dashboard</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/aasdf' className="nav-link" >Add company</NavLink>
                    </li>
                </ul>
                <span className='mr-2'>User1@test.com</span>
                <button className="btn btn-secondary my-2 my-sm-0" type="submit" onClick={handleLogout}>Logout</button>
            </div>

        </nav>
    )
}

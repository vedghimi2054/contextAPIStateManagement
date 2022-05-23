import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Auth'
export const Navbar = () => {
    const navbarActivity = ({ isActive }) => {
        return {
            fontWeight: isActive?'bold':'normal',
            textDecoration: isActive?'none':'underline'
        }
    }
    const auth=useAuth();
    return (
        <>
            <nav className='primary-nav'>
                <NavLink to='/' style={navbarActivity}>
                    Home
                </NavLink>
                <NavLink to='product' style={navbarActivity}>
                    Product
                </NavLink>
                <NavLink to='profile' style={navbarActivity}>
                    Profile
                </NavLink>
                {
                !auth.user &&(
                        <NavLink to='login' style={navbarActivity}>
                        Login
                    </NavLink>
                    )
                }
            </nav>
        </>

    )
}


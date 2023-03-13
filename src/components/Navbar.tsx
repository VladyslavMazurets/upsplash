import React from 'react'
import { Outlet } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'

import Logo from '../assets/images/unsplash-logo.png'

import Authorization from './Authorization '
import '../styles/Navbar.scss'

const handleSearch = (e: any) => {
    e.preventDefault();
}


export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <img className="navbar_logo" src={Logo} alt="Logo"
                    width="40px" height="40px" />
                <form onSubmit={handleSearch} className="search-form">
                    <button type="submit" className="search-form__button">
                        <BsSearch />
                    </button>
                    <input className="search-form__input" type="text" placeholder="Search high-resolution images" />
                </form>
                <div>
                    <button>Advertise</button>
                    <button>Blog</button>
                    <button>Unsplash+</button>
                </div>
                <Authorization />
            </div>
            <Outlet />
        </>
    )
}

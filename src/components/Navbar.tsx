import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { RxAvatar, RxHamburgerMenu } from 'react-icons/rx'
import { IoNotificationsSharp } from 'react-icons/io5'

import Logo from '../assets/images/unsplash-logo.png'

import Authorization from './Authorization '
import '../styles/Navbar.scss'
import Topics from './Topics'
import ClientDropdown from './dropdown/ClientDropdown'

const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
}

export default function Navbar() {

    const [clickedOnAvatar, setClickedOnAvatar] = useState(false);

    return (
        <>
            <div className="navbar">
                <div className="navbar-search-block">
                    <div className="navbar-search">
                        <Link to="/">
                            <img className="navbar_logo" src={Logo} alt="Logo"
                                width="40px" height="40px" />
                        </Link>
                        <form onSubmit={handleSearch} className="search-form">
                            <button type="submit" className="search-form__button">
                                <BsSearch />
                            </button>
                            <input className="search-form__input" type="text"
                                placeholder="Search high-resolution images" required />
                        </form>
                        <div className="navbar-search__btns">
                            <NavLink className="navbar-search__btn" to="">
                                Advertise
                            </NavLink>
                            <NavLink className="navbar-search__btn" to="">
                                Blog
                            </NavLink>
                            <NavLink className="navbar-search__btn" to="">
                                Unsplash+
                            </NavLink>
                        </div>
                    </div>
                    <div className="navbar-client__btns">
                        <button className="navbar-client__submit-btn">
                            Submit a photo
                        </button>
                        <button className="navbar-client__btn">
                            <IoNotificationsSharp />
                        </button>
                        <div className="navbar-client__block">
                            <button className="navbar-client__btn"
                                onClick={() =>
                                    setClickedOnAvatar(prev => !prev)}>
                                <RxAvatar />
                            </button>
                            {clickedOnAvatar && <ClientDropdown
                                setClickedOnAvatar={setClickedOnAvatar} />}
                        </div>
                        <button className="navbar-client__btn">
                            <RxHamburgerMenu />
                        </button>
                    </div>
                    <Authorization />
                </div>
                <Topics />
            </div>
        </>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/topicsHeader.scss'

function TopicsHeader() {
    return (
        <>
            <div className="header">
                <img
                    src={''}
                    alt="header_photo" className="header__img" />
                <div className="header__container">
                    <div className="header__bg" />
                    <div className="header__content">
                        <p className="header__title"> 3D Renders </p>
                        <span className="header__subtitle">
                            
                        </span>
                        <button className="header__btn">
                            Submit to <strong>3D Renders</strong>
                        </button>
                    </div>

                    <div className="header__footer">
                        <div className="footer__photo">
                            <Link to="" className="footer__link">Photo</Link>
                            <span> by </span>
                            <Link to="" className="footer__link">Guns</Link>
                        </div>
                        <div className="footer__license">
                            <span> Read more about the </span>
                            <a href="https://unsplash.com/license"
                                target="_blank" rel="noreferrer"
                                className="footer__link">
                                Unsplash License
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopicsHeader
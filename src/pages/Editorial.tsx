import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { useGetApiDataQuery } from '../store/api/unsplashApi'
import { RootType } from '../store/store'
import '../styles/header.scss'

function Editorial() {

    const token = useSelector((state: RootType) => state.token)
    const { data, isSuccess } = useGetApiDataQuery({
        url: 'photos/random?orientation=landscape&count=1',
        token
    })

    return (
        <>
            {isSuccess &&
                <div className="header">
                    <img
                        src={data[0].urls?.regular}
                        alt="" className="header__img" />
                    <div className="header__container">
                        <div className="header__bg" />
                        <div className="header__content">
                            <p className="header__title"> 3D Renders </p>
                            <span className="header__subtitle">
                                The Unsplash community continues to push the boundaries of creativity through 3D Renders. From abstract worlds to photo-realistic interiors, this category celebrates exciting 3-dimensional images designed in the software of your choice and rendered into JPEG images.
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
            }
        </>
    )
}

export default Editorial
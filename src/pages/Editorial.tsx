import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { ITopics } from '../models/models'
import { useGetApiDataQuery } from '../store/api/unsplashApi'
import { RootType } from '../store/store'
import '../styles/Editorial.scss'

function Editorial() {

    const token = useSelector((state: RootType) => state.token)
    const { data: header, isSuccess: headerSuccess } = useGetApiDataQuery({
        url: 'photos/random?orientation=landscape&count=1',
        token
    })
    const { data: photos, isSuccess: photosSuccess } = useGetApiDataQuery({
        url: 'photos/random?orientation=landscape&count=30',
        token
    })

    return (
        <>
            {headerSuccess &&
                <>
                    <div className="header">
                        <img
                            src={header[0].urls?.regular}
                            alt="" className="header__img" />
                        <div className="header__container">
                            <div className="header__bg" />
                            <div className="header__content">
                                <p className="header__title"> Upsplash </p>
                                <span className="header__subtitle">
                                    The internet’s source for visuals.
                                    <br />Powered by creators everywhere.
                                </span>
                            </div>

                            <div className="header__footer">
                                <div className="footer__photo">
                                    <Link to="" className="footer__link">Photo</Link>
                                    <span> by </span>
                                    <Link to="" className="footer__link">
                                        {header[0].user?.username}
                                    </Link>
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

                    <div className="cards">
                        <div className="cards__container">
                            {photos?.map((photo: ITopics) =>
                                <div key={photo.id} className="card">
                                    <img src={photo.urls!.regular}
                                        alt={`Photo by ${photo.user!.name}`} 
                                        />
                                </div>
                            )}
                        </div>
                    </div>
                </>
            }
            {console.log(photos)}
        </>
    )
}

export default Editorial
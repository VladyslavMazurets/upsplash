import React from 'react'
import { useSelector } from 'react-redux'

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
                        Unsplash
                    </div>
                </div>
            }
        </>
    )
}

export default Editorial
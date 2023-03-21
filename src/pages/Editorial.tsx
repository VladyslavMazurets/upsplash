import React from 'react'
import { useSelector } from 'react-redux'

import { useGetApiDataQuery } from '../store/api/unsplashApi'
import { RootType } from '../store/store'
import '../styles/header.scss'

function Editorial() {

    const token = useSelector((state: RootType) => state.token)
    // const { data, isSuccess } = useGetApiDataQuery({
    //     url: 'photos/random?orientation=landscape&count=1',
    //     token
    // })

    return (
        <>
            {/* {isSuccess && console.log(data[0].urls)} */}
                <div className="header">
                    <img 
                    src={'https://images.unsplash.com/photo-1679212792248-6c8c9b5fd899?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MjA4MTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Nzk0MjU4ODE&ixlib=rb-4.0.3&q=80&w=400'} 
                    alt=""  className="header__img"/>
                </div>
            
        </>
    )
}

export default Editorial
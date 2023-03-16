import React from 'react'
import { useSelector } from 'react-redux'

import { useGetTopicsQuery } from '../store/api/unsplashApi'

import { RootType } from '../store/store'

function Topics() {

    const token = useSelector((state: RootType) => state.token)
    const {data} = useGetTopicsQuery({url:'topics', token})

    return (
        <>
            <h1>Token -- {token}</h1>
            {console.log(data)}
        </>
    )
}

export default Topics
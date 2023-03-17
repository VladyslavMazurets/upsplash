import React from 'react'
import { useSelector } from 'react-redux'

import { useGetTopicsQuery } from '../store/api/unsplashApi'

import { RootType } from '../store/store'

function Topics() {

    const token = useSelector((state: RootType) => state.token)
    const {data, isSuccess, isLoading} = useGetTopicsQuery({url:'topics', token})

    return (
        <>
        {isLoading && <h1>...Loading</h1>}
            <h1>Token -- {token}</h1>
            {isSuccess && console.log(data[6].title)}
        </>
    )
}

export default Topics
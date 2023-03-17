import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { ITopics } from '../models/models'
import { useGetTopicsQuery } from '../store/api/unsplashApi'
import { topicsSliceAction } from '../store/reducers/topicsSlice'

import { RootType } from '../store/store'

function Topics() {

    const dispatch = useDispatch()
    const token = useSelector((state: RootType) => state.token)
    const { data, isSuccess, isLoading } = useGetTopicsQuery({
        url: 'topics?per_page=20', token
    })

    useEffect(() => {
        isSuccess && dispatch(topicsSliceAction.saveTopicsData(data))
    }, [])


    return (
        <>
            {isSuccess && console.log(data)}

            <div className="topics-editior">
                <NavLink to="/" className="topics-editior__btn">
                    Editorial
                </NavLink>
                <NavLink to="/" className="topics-editior__btn">
                    Following
                </NavLink>
            </div>

            <div className="topics-line" />

            <div className="topics-list">
                {data?.map((item: ITopics) =>
                    <NavLink key={item.id} to="" className="topics-list__btn">
                        {item.title}
                    </NavLink>
                )}
            </div>
        </>
    )
}

export default Topics
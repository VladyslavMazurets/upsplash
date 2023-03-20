import React, { MutableRefObject, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

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
    const scrollRef = useRef() as MutableRefObject<HTMLInputElement>;

    const scroll = (direction: string) => {
        const { current } = scrollRef;

        if (current && direction === 'left') {
            current.scrollLeft -= 200
            { console.log('LEFT', current.scrollLeft) }

        }
        else {
            current.scrollLeft += 200
            { console.log('RIGHT', current.scrollLeft) }
        }
    }

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

            <div className="topics-list" >
                <div className="topics-list__container" ref={scrollRef}>
                    {data?.map((item: ITopics) =>
                        <NavLink key={item.id} to={item.title}
                            className="topics-list__btn">
                            {item.title}
                        </NavLink>
                    )}
                </div>
                { window.pageXOffset <= 0 &&
                <SlArrowLeft
                    className="topics-list-icon__left"
                    onClick={() => scroll('left')} />
                }
                { window.pageXOffset >= 746 &&
                <SlArrowRight
                    className="topics-list-icon__right"
                    onClick={() => scroll('right')} />
                } 
            </div>
        </>
    )
}

export default Topics
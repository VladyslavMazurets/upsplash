import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

import { ITopics } from '../models/models';
import { useGetApiDataQuery } from '../store/api/unsplashApi';
import { topicsSliceAction } from '../store/reducers/topicsSlice';

import { RootType } from '../store/store';

function Topics() {
  const dispatch = useDispatch();
  const token = useSelector((state: RootType) => state.token);

  const scrollRef = useRef() as MutableRefObject<HTMLInputElement>;
  const [scrollBarPosition, setScrollBarPosition] = useState(0);
  const { data, isSuccess, isLoading } = useGetApiDataQuery({
    url: 'topics?per_page=20',
    token,
  });

  const scroll = (direction: string) => {
    const { current } = scrollRef;

    if (current && direction === 'left') {
      current.scrollLeft -= 250;
      setScrollBarPosition(current.scrollLeft);
    } else {
      current.scrollLeft += 250;
      setScrollBarPosition(current.scrollLeft);
    }
  };

  useEffect(() => {
    isSuccess && dispatch(topicsSliceAction.saveTopicsData(data));
  }, []);

  return (
    <>
      <div className="topics-editior">
        <NavLink to="/" className="topics-editior__btn">
          Editorial
        </NavLink>
        <NavLink to="/following" className="topics-editior__btn">
          Following
        </NavLink>
      </div>

      <div className="topics-line" />

      <div className="topics-list">
        <div className="topics-list__container" ref={scrollRef}>
          {data?.map((item: ITopics) => (
            <NavLink
              key={item.id}
              to={item.title?.toLowerCase()}
              className="topics-list__btn"
            >
              {item.title}
            </NavLink>
          ))}
        </div>
        {scrollBarPosition !== 0 && (
          <SlArrowLeft
            className="topics-list-icon__left"
            onClick={() => scroll('left')}
          />
        )}
        {scrollBarPosition !== 746 && (
          <SlArrowRight
            className="topics-list-icon__right"
            onClick={() => scroll('right')}
          />
        )}
      </div>
    </>
  );
}

export default Topics;

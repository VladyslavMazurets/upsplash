import React, { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

import { RootType } from '../store/store';
import { ITopics } from '../models/models';
import { useGetApiDataQuery } from '../store/api/unsplashApi';
import { topicsSliceAction } from '../store/reducers/topicsSlice';

import Spinners from './Spinners';

function Topics() {
  const dispatch = useDispatch();
  const token = useSelector((state: RootType) => state.token);

  const scrollRef = useRef() as MutableRefObject<HTMLInputElement>;
  const [scrollBarPosition, setScrollBarPosition] = useState(0);
  const [isMaxWidth, setIsMaxWidth] = useState<boolean>(false);

  const { data, isSuccess } = useGetApiDataQuery({
    url: 'topics?per_page=20',
    token,
  });

  const scroll = useCallback(
    (direction: string) => {
      const { current } = scrollRef;
      if (current && direction === 'left') {
        current.scrollLeft -= 250;
        setScrollBarPosition(current.scrollLeft);
      } else {
        current.scrollLeft += 250;
        setScrollBarPosition(current.scrollLeft);
      }
    },
    [scrollBarPosition]
  );

  useEffect(() => {
    isSuccess && dispatch(topicsSliceAction.saveTopicsData(data));
  }, [data]);

  useEffect(() => {
    if (data) {
      const { current } = scrollRef;
      setIsMaxWidth(current.scrollWidth - current.scrollLeft !== current.clientWidth);
    }
  }, [data, scroll]);

  if (!isSuccess) return <Spinners />;
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
            <NavLink key={item.id} to={item.title?.toLowerCase()} className="topics-list__btn">
              {item.title}
            </NavLink>
          ))}
        </div>

        {scrollBarPosition !== 0 && <SlArrowLeft className="topics-list-icon__left" onClick={() => scroll('left')} />}
        {isMaxWidth && <SlArrowRight className="topics-list-icon__right" onClick={() => scroll('right')} />}
      </div>
    </>
  );
}

export default Topics;

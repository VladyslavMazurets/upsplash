import React, { MutableRefObject, useRef, useEffect, useState } from 'react';
import Mesonry from 'react-masonry-css';
import { useSelector } from 'react-redux';

import '../styles/PhotoCards.scss';
import { ITopics } from '../models/models';
import { useGetApiDataQuery } from '../store/api/unsplashApi';
import { RootType } from '../store/store';

function PhotoCards() {
  const scrollRef = useRef() as MutableRefObject<HTMLDivElement>;
  const [scrollBarPosition, setScrollBarPosition] = useState(0);
  const [page, setPage] = useState(1);
  // eslint-disable-next-line prettier/prettier

  const token = useSelector((state: RootType) => state.token);
  const {
    data: photos,
    isSuccess,
    isLoading,
  } = useGetApiDataQuery({
    url: `photos?page=${page}&per_page=30&order_by=popular`,
    token,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 4000 && scrollBarPosition + 800 < window.scrollY) {
        setScrollBarPosition(window.scrollY);
      }
    };

    console.log(scrollBarPosition);
    setPage((prevState) => prevState + 1);
    console.log(window.innerHeight + document.documentElement.scrollTop);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollBarPosition]);

  return (
    <>
      <div className="cards" ref={scrollRef}>
        <Mesonry
          breakpointCols={{ default: 3, 1100: 3, 700: 2, 500: 1 }}
          className="photo-grid"
          columnClassName="photo-grid__column"
        >
          {photos?.map((photo: ITopics) => (
            <div key={photo.id} className="photo">
              <img
                src={photo.urls?.regular}
                alt={`Photo by ${photo.user?.name}`}
              />
            </div>
          ))}
        </Mesonry>
      </div>
    </>
  );
}

export default PhotoCards;

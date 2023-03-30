import React, { useEffect, useState } from 'react';
import Mesonry from 'react-masonry-css';
import { useSelector } from 'react-redux';

import '../styles/PhotoCards.scss';
import { ITopics } from '../models/models';
import { useGetApiDataQuery } from '../store/api/unsplashApi';
import { RootType } from '../store/store';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

function PhotoCards() {
  const [photos, setPhotos] = useState<ITopics[]>([]);
  const [isFetching, setIsFetching] = useInfiniteScroll();
  const [page, setPage] = useState(1);

  const token = useSelector((state: RootType) => state.token);
  const { data, isSuccess, isLoading } = useGetApiDataQuery({
    url: `photos?page=${page}&per_page=30&order_by=popular`,
    token,
  });

  const fetchMorePhotos = () => {
    if (isSuccess) {
      setPhotos((prevState) => [...prevState, ...data]);
      setPage((prevState) => prevState + 1);
      setIsFetching(false);
    }
  };

  useEffect(() => {
    if (!isFetching) return;
    fetchMorePhotos();
  }, [isFetching]);

  return (
    <>
      <div className="cards">
        <Mesonry
          breakpointCols={{ default: 3, 1100: 3, 700: 2, 500: 1 }}
          className="photo-grid"
          columnClassName="photo-grid__column"
        >
          {photos?.map((photo: ITopics) => (
            <div key={photo.id} className="photo">
              <img src={photo.urls?.regular} alt={`Photo by ${photo.user?.name}`} />
            </div>
          ))}
        </Mesonry>
      </div>
    </>
  );
}

export default PhotoCards;

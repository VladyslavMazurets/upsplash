import React from 'react';
import Mesonry from 'react-masonry-css';

import '../styles/PhotoCards.scss';
import { ITopics } from '../models/models';

interface IPhotos {
  photos: ITopics[];
}

function PhotoCards({ photos }: IPhotos) {
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
              <img
                src={photo.urls!.regular}
                alt={`Photo by ${photo.user!.name}`}
              />
            </div>
          ))}
        </Mesonry>
      </div>
    </>
  );
}

export default PhotoCards;

import React from 'react';
import { AiTwotoneHeart } from 'react-icons/ai';
import { CgMathPlus } from 'react-icons/cg';
import { useSelector } from 'react-redux';

import '../styles/PhotoCard.scss';
import { RootType } from '../store/store';

function PhotoCard() {
  const token = useSelector((state: RootType) => state.token);

  return (
    <>
      <div className="card">
        <div>
          <div className="blur-bg" />
          <div className="card-info">
            <div className="card-navbar">
              <div className="card-navbar__profil">
                <img src="" alt="Prof_Img" />
                <p>Name</p>
              </div>

              <div className="card-navbar__btns">
                <button>
                  <AiTwotoneHeart />
                </button>
                <button>
                  <CgMathPlus />
                </button>
                <button>3</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhotoCard;

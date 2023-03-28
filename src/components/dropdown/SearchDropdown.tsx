import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowTrendingUp } from 'react-icons/hi2';

import {
  trendingCollections,
  trendingSearches,
  trendingTopics,
} from '../../assets/constData/searchDropdowndata';

interface ITrending {
  id: number;
  title: string;
}

function SearchDropdown() {
  return (
    <>
      <div className="search-dropdown">
        <div className="search-dropdown-container">
          <div className="search-dropdown__item">
            <p className="search-dropdown__title">Trending Searches</p>
            <div className="search-dropdown__btns">
              {trendingSearches.map((item: ITrending) => (
                <Link to="" key={item.id} className="search-dropdown__btn">
                  <HiArrowTrendingUp className="search-dropdown__icn" />
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="search-dropdown__item">
            <p className="search-dropdown__title">Trending Topics</p>
            <div className="search-dropdown__btns">
              {trendingTopics.map((item: ITrending) => (
                <Link key={item.id} to="" className="search-dropdown__btn">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="search-dropdown__item">
            <p className="search-dropdown__title">Trending Collections</p>
            <div className="search-dropdown__btns">
              {trendingCollections.map((item: ITrending) => (
                <Link key={item.id} to="" className="search-dropdown__btn">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchDropdown;

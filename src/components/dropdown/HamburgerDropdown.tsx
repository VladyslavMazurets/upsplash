import React from 'react';
import { Link } from 'react-router-dom';
import { SiTelegram } from 'react-icons/si';
import {
  MdOutlineMapsHomeWork,
  MdOutlineLibraryBooks,
  MdOutlineGroups,
} from 'react-icons/md';
import { AiFillLinkedin, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';

import { companyData } from '../../assets/constData/companyData';
import { productData } from '../../assets/constData/productData';
import { communityData } from '../../assets/constData/communityData';
import { useClickOutside } from '../../hooks/useClickOutside';

function HamburgerDropdown({ setClickOnHamburger }: any) {
  const domNode = useClickOutside(() => setClickOnHamburger(false));

  return (
    <>
      <div ref={domNode} className="hamburger-dropdown">
        <div className="hamburger-dropdown-nav">
          <div className="hamburger-dropdown-company">
            <div className="hamburger-dropdown-company__title">
              <MdOutlineMapsHomeWork className="company__icon" />
              <p>Company</p>
            </div>
            {companyData.map((item) => (
              <Link key={item.id} to="/" className="hamburger-dropdown__btn">
                {item.title}
              </Link>
            ))}
          </div>

          <div className="hamburger-dropdown-product">
            <div className="hamburger-dropdown-product__title">
              <MdOutlineLibraryBooks className="product__icon" />
              <p>Product</p>
            </div>
            {productData.map((item) => (
              <Link key={item.id} to="/" className="hamburger-dropdown__btn">
                {item.title}
              </Link>
            ))}
          </div>

          <div className="hamburger-dropdown-community">
            <div className="hamburger-dropdown-community__title">
              <MdOutlineGroups className="community__icon" />
              <p>Community</p>
            </div>
            {communityData.map((item) => (
              <Link key={item.id} to="/" className="hamburger-dropdown__btn">
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="hamburger-dropdown__line" />

        <div className="hamburger-dropdown-social">
          <div>
            <button
              className="hamburger-dropdown-social__btn"
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/vladyslav-mazurets-00b9b8257'
                )
              }
            >
              <AiFillLinkedin className="hamburger-dropdown-social__icon" />
            </button>
            <button
              className="hamburger-dropdown-social__btn"
              onClick={() =>
                window.open('https://github.com/VladyslavMazurets')
              }
            >
              <AiOutlineGithub className="hamburger-dropdown-social__icon" />
            </button>
            <button
              className="hamburger-dropdown-social__btn"
              onClick={() => window.open('mailto:vladmazurec@gmail.com')}
            >
              <AiOutlineMail className="hamburger-dropdown-social__icon" />
            </button>
            <button
              className="hamburger-dropdown-social__btn"
              onClick={() => window.open('https://t.me/Shaman_K1ng')}
            >
              <SiTelegram className="hamburger-dropdown-social__icon" />
            </button>
          </div>
          <span className="hamburger-dropdown-created">
            © Created by Vladyslav Mazurets
          </span>
        </div>
      </div>
    </>
  );
}

export default HamburgerDropdown;

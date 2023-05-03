import React from 'react';
import { PropagateLoader } from 'react-spinners';

import '../styles/componentsStyle/Loader.scss';

function Spinners() {
  return (
    <>
      <div className="loader-box">
        <PropagateLoader className="loader" color="#000000" size={20} speedMultiplier={0.8} />
      </div>
    </>
  );
}

export default Spinners;

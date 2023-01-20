import React from 'react';

import UnauthorizedImage from '../../assets/images/unauthorized.png';

import useView from './View.hooks';

const View = () => {
  const { something } = useView();

  return (
    <>
      <div className='grid bg-white w-full min-h-screen items-center'>
        <div className='m-auto text-center'>
          <h2 className='font-bold'>unauthorized ...</h2>
          <img
            src={UnauthorizedImage}
            alt='unauthorized'
            className='w-60 mt-5'
          />
        </div>
      </div>
    </>
  );
};

export default View;

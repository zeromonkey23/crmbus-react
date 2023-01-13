import React from 'react';

import NeverGiveGif from '../../assets/gif/never-give-you-up.gif';

import useView from './View.hooks';

const View = () => {
  const { something } = useView();

  return (
    <>
      <div className='block h-96 w-full tex my-4'>
        <img
          src={NeverGiveGif}
          alt='not found'
          className='w-1/2 block m-auto'
        />
      </div>
    </>
  );
};

export default View;

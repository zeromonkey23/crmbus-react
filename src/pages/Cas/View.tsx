import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import useView from './View.hooks';

const View = () => {
  const { something } = useView();

  return (
    <>
      <div className='p-3 bg-white'>
        <Outlet />
      </div>
    </>
  );
};

export default View;

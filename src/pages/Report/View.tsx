import React from 'react';

import useView from './View.hooks';

const View = () => {
  const { something } = useView();

  return (
    <>
      <h1>Report</h1>
    </>
  );
};

export default View;

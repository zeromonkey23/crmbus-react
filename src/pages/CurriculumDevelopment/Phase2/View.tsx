import React from 'react';

import useView from './View.hooks';

const View = () => {
  const { something } = useView();

  return (
    <>
      <h1>Phase 2</h1>
    </>
  );
};

export default View;

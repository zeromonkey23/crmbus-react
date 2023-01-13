import React, { lazy } from 'react';

const View = lazy(() => import('./View'));

const Unauthorized = () => {
  return <View />;
};

export default Unauthorized;

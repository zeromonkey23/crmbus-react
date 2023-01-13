import React, { lazy } from 'react';

const View = lazy(() => import('./View'));

const NotFound = () => {
  return <View />;
};

export default NotFound;

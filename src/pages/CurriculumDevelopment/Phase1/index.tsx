import React from 'react';
import { lazy } from 'react';

const View = lazy(() => import('./View'));

const Phase1 = () => {
  return <View />;
};

export default Phase1;

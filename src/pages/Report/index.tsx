import React from 'react';
import { lazy } from 'react';

const View = lazy(() => import('./View'));

const Report = () => {
  return <View />;
};

export default Report;

import React, { lazy } from 'react';

const View = lazy(() => import('./View'));

const Dashboard = () => {
  return (
    <>
      <View />
    </>
  );
};

export default Dashboard;

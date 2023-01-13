import { useState } from 'react';

const useView = () => {
  const [something, setSomething] = useState('Dashboard View');
  return { something };
};

export default useView;

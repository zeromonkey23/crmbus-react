import { useState } from 'react';

const useView = () => {
  const [something, setSomething] = useState('something');

  return { something };
};

export default useView;

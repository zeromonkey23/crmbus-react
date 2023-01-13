import { useState } from 'react';

const useView = () => {
  const [something, useSomething] = useState('something');
  return { something };
};

export default useView;

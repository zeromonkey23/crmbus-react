import { useState } from 'react';

const useView = () => {
  const [something, setSomething] = useState('Cas something');

  return { something };
};

export default useView;

import { useState } from 'react';

const useView = () => {
  const [batchStart, setBatchStart] = useState<number>(2018);
  const [batchEnd, setBatchEnd] = useState<number>(2022);

  return { batchStart, batchEnd };
};

export default useView;

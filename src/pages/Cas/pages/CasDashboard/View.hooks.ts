import React, { useState } from 'react';

const useView = () => {
  const [something, setSomething] = useState();

  return { something };
};

export default useView;

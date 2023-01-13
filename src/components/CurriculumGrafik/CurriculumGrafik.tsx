import React from 'react';

import GrafikImage from '../../assets/images/Grafik.png';

const CurriculumGrafik = () => {
  return (
    <>
      <div className='p-3'>
        <img src={GrafikImage} alt='grafik' className='block w-full' />
      </div>
    </>
  );
};

export default CurriculumGrafik;

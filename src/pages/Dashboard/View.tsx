import React from 'react';

import CurriculumGrafik from '../../components/CurriculumGrafik/CurriculumGrafik';
import CurriculumTable from '../../components/CurriculumTable/CurriculumTable';
import GrafikPie from '../../components/GrafikPie/GrafikPie';

import useView from './View.hooks';

const View = () => {
  const { something } = useView();
  return (
    <>
      <h2 className='mb-3'>Dashboard View</h2>
      <div>
        <p className='mb-2 text-sm'>Total Curriculum Submitted</p>
        <div className='bg-white border'>
          <CurriculumGrafik />
        </div>
      </div>
      <div className='grid grid-cols-3 my-5 gap-4 h-80'>
        <p className='text-sm col-span-3'>Curriculum Development Progress</p>
        <div className=' overflow-auto'>
          <div className='bg-white border'>
            <GrafikPie />
          </div>
        </div>
        <div className='col-span-2'>
          <div className='bg-white border'>
            <CurriculumTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default View;

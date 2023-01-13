import React from 'react';

import CurriculumTable from '../../components/CurriculumTable/CurriculumTable';

import useView from './View.hooks';

const View = () => {
  const { something } = useView();
  return (
    <>
      <div className='p-3 bg-white'>
        <div className='flex items-center justify-between mb-3 px-3'>
          <h2>Credit Allocation Schema</h2>
          <button className='bg-blue-400 rounded border px-5 py-1 block text-white'>
            Add CAS
          </button>
        </div>
        <CurriculumTable />
      </div>
    </>
  );
};

export default View;

import React from 'react';

import ListCurriculumImage from '../../assets/images/ListCurriculum.png';
import CurriculumTable from '../../components/CurriculumTable/CurriculumTable';

import useView from './View.hooks';

const View = () => {
  const { something } = useView();

  return (
    <>
      <div className='w-full p-3 my-3 bg-white'>
        <CurriculumTable />
      </div>
    </>
  );
};

export default View;

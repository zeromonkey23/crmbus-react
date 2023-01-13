import React from 'react';

import GrafikImage from '../../assets/images/ListCurriculum.png';

const CurriculumTable = () => {
  return (
    <>
      <div className='p-3 w-full h-80 box-border overflow-auto'>
        {/* <img src={GrafikImage} alt='grafik' className='block w-full' /> */}
        <table className='table table-auto w-full  text-sm'>
          <thead>
            <tr>
              <th className='border py-1 px-3'>No</th>
              <th className='border py-1 px-3'>Action</th>
              <th className='border py-1 px-3'>Batch</th>
              <th className='border py-1 px-3'>Version</th>
              <th className='border py-1 px-3'>Institution</th>
              <th className='border py-1 px-3'>Degree</th>
              <th className='border py-1 px-3'>Study Program</th>
              <th className='border py-1 px-3'>Faculty/School</th>
              <th className='border py-1 px-3'>Program</th>
              <th className='border py-1 px-3'>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border py-1 px-3'>No</td>
              <td className='border py-1 px-3'>Action</td>
              <td className='border py-1 px-3'>Batch</td>
              <td className='border py-1 px-3'>Version</td>
              <td className='border py-1 px-3'>Institution</td>
              <td className='border py-1 px-3'>Degree</td>
              <td className='border py-1 px-3'>Study</td>
              <td className='border py-1 px-3'>Faculty</td>
              <td className='border py-1 px-3'>Program</td>
              <td className='border py-1 px-3'>Status</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CurriculumTable;

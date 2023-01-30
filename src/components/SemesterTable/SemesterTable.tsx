import React from 'react';

import { SemesterTableTypes } from './SemesterTable.types';

const SemesterTable = (prop: SemesterTableTypes) => {
  return (
    <>
      <table className='table-auto bg-white border rounded w-full text-sm'>
        <thead>
          <tr>
            <th className='border font-normal'>Name</th>
            <th className='border font-normal'>SCU Type</th>
            <th className='border font-normal'>Split Period</th>
            <th className='border font-normal'>SCU Total</th>
            <th className='border font-normal'>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='px-2 py-1 border'>Lorem</td>
            <td className='px-2 py-1 border'>Lorem</td>
            <td className='px-2 py-1 border'>Lorem</td>
            <td className='px-2 py-1 border'>Lorem</td>
            <td className='px-2 py-1 border'>Lorem</td>
          </tr>
        </tbody>
      </table>
      <div className='block w-full text-right my-3 text-sm'>
        <button className='rounded border py-1 px-5 bg-blue-200'>Add</button>
      </div>
    </>
  );
};

export default SemesterTable;

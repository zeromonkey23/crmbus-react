import React from 'react';

import CourseTypeTable from '../../../../components/CourseTypeTable/CourseTypeTable';
import SemesterTable from '../../../../components/SemesterTable/SemesterTable';
import useView from '../../View.hooks';

const View = () => {
  const { something } = useView();
  return (
    <>
      <h3 className='text-sm mb-4'>Create New Credit Allocation Schema</h3>
      <div className='grid gap-4 grid-cols-1 lg:grid-cols-2'>
        <div className='form w-full block'>
          <label htmlFor='batchYear' className='w-full block text-sm'>
            Batch Year
          </label>
          <input
            type='text'
            name='batchYear'
            id='batchYear'
            className='w-full block border shadow-sm text-sm py-1 px-3 my-1'
            placeholder='Select batch year'
          />
        </div>
        <div className='form w-full block'>
          <label htmlFor='currYear' className='w-full block text-sm'>
            Curriculum Year
          </label>
          <input
            type='text'
            name='currYear'
            id='currYear'
            className='w-full block border shadow-sm text-sm py-1 px-3 my-1'
            placeholder='Select curriculum year'
          />
        </div>
        <div className='form w-full block'>
          <label htmlFor='institution' className='w-full block text-sm'>
            Institution
          </label>
          <input
            type='text'
            name='institution'
            id='institution'
            className='w-full block border shadow-sm text-sm py-1 px-3 my-1'
            placeholder='Select institution'
          />
        </div>
        <div className='form w-full block'>
          <label htmlFor='studyProgram' className='w-full block text-sm'>
            Study Program
          </label>
          <input
            type='text'
            name='studyProgram'
            id='studyProgram'
            className='w-full block border shadow-sm text-sm py-1 px-3 my-1'
            placeholder='Select study program'
          />
        </div>
        <div className='form w-full block'>
          <label htmlFor='faculty' className='w-full block text-sm'>
            Faculty / School
          </label>
          <input
            type='text'
            name='faculty'
            id='faculty'
            className='w-full block border shadow-sm text-sm py-1 px-3 my-1'
            placeholder='Select faculty'
          />
        </div>
        <div className='form w-full block'>
          <label htmlFor='degree' className='w-full block text-sm'>
            Degree
          </label>
          <input
            type='text'
            name='degree'
            id='degree'
            className='w-full block border shadow-sm text-sm py-1 px-3 my-1'
            placeholder='Select degree'
          />
        </div>
        <div className='form w-full block'>
          <label htmlFor='program' className='w-full block text-sm'>
            Program
          </label>
          <input
            type='text'
            name='program'
            id='program'
            className='w-full block border shadow-sm text-sm py-1 px-3 my-1'
            placeholder='Select program'
          />
        </div>
      </div>

      <div className='form w-full block my-2'>
        <label htmlFor='currChangeInfo' className='w-full block text-sm'>
          Curriculum Change Info
        </label>
        <textarea
          name='currChangeInfo'
          id='currChangeInfo'
          className='w-full block border shadow-sm text-sm py-1 px-3 my-1'
          placeholder='Curriculum Change Info'
          cols={4}
          rows={8}
        />
      </div>
      <div className='form w-full block my-2'>
        <label htmlFor='selectProgram' className='w-full block text-sm my-2'>
          Select Program
        </label>
        <div className='px-3 py-1 border rounded inline-block'>
          <input type='radio' name='Major' id='major' />
          <label htmlFor='major' className='px-3 text-sm'>
            Major
          </label>
        </div>
        <div className='px-3 py-1 border rounded inline-block mx-2'>
          <input type='radio' name='Minor' id='minor' />
          <label htmlFor='minor' className='px-3 text-sm'>
            Minor
          </label>
        </div>
        <div className='px-3 py-1 border rounded inline-block mx-2'>
          <input
            type='radio'
            name='Multidisciplinary Streaming'
            id='multidisciplinaryStreaming'
          />
          <label htmlFor='multidisciplinaryStreaming' className='px-3 text-sm'>
            Multidisciplinary Streaming
          </label>
        </div>
      </div>
      <div className='form w-full block my-2'>
        <label htmlFor='assessmentRubricGrade' className='w-full block text-sm'>
          Assessment Rubric Grade
        </label>
        <input
          type='text'
          name='assessmentRubricGrade'
          id='assessmentRubricGrade'
          className='w-full block border shadow-sm text-sm py-1 px-3 my-1'
          placeholder='Select assessmentRubricGrade'
        />
      </div>
      <div className='form w-full grid grid-cols-4 gap-2 my-2'>
        <div className='form w-full col-span-1'>
          <label htmlFor='terminology' className='w-full block text-sm'>
            Terminology
          </label>
          <input
            type='text'
            name='terminology'
            id='terminology'
            className='w-full block border shadow-sm text-sm py-1 px-3 my-1'
            placeholder='Abbreviation'
          />
        </div>
        <div className='form w-full col-span-3'>
          <label
            htmlFor='terminology'
            className='w-full block text-sm text-transparent'
          >
            Terminology
          </label>
          <input
            type='text'
            name='terminology title'
            id='terminology title'
            className='w-full block border shadow-sm text-sm py-1 px-3 my-1'
            placeholder='Select terminology title'
          />
        </div>
      </div>
      <div className='form w-full block my-2'>
        <label htmlFor='enrichmentTrack' className='w-full block text-sm'>
          Enrichment Track
        </label>
        <input
          type='text'
          name='enrichmentTrack'
          id='enrichmentTrack'
          className='w-full block border shadow-sm text-sm py-1 px-3 my-1'
          placeholder='Select enrichmentTrack'
        />
        <span className='text-xs opacity-50 font-italic'>
          Please input abbreviation in the left-hand side text field and
          terminology title in the right-hand side text field
        </span>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
        <div className='form w-full block my-2 p-3 border rounded'>
          <label htmlFor='Course Type' className='w-full block text-sm my-2'>
            Course Type
          </label>
          <CourseTypeTable></CourseTypeTable>
        </div>
        <div className='form w-full block my-2 p-3 border rounded'>
          <label htmlFor='Semester' className='w-full block text-sm my-2'>
            Semester
          </label>
          <SemesterTable></SemesterTable>
        </div>
      </div>

      {/* footer */}
      <div className='w-full block text-right my-3'>
        <button className='px-3 border text-sm py-1 mr-3 rounded bg-green-600 text-white'>
          Send Credit Allocation Schema
        </button>
        <button className='px-3 border text-sm py-1 rounded bg-gray-200'>
          Cancel
        </button>
      </div>
    </>
  );
};

export default View;

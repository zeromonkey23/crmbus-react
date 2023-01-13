import React from 'react';

import AvatarImage from '../../assets/images/avatar.png';

import { AccountType } from './Account.types';

const Account = (prop: AccountType) => {
  const { isToolbar } = prop;

  return (
    <>
      <div className='flex-col w-full text-left'>
        <div className='my-1 flex items-center'>
          <div className='w-20 inline-block float-left '>
            <img src={AvatarImage} alt='avatar' />
          </div>
          <div>
            <h2 className='text-blue-800 text-lg leading-6'>
              <b>Krisna Rusdiono</b>
            </h2>
            <p className='text-orange-800 text-sm mt-2'>ARC Staff</p>
          </div>
        </div>

        {isToolbar && (
          <>
            <button
              className='w-full rounded border block bg-white text-black mt-5 mb-3'
              onClick={() => alert('Bye')}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Account;

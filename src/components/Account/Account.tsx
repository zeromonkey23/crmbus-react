import React, { useState } from 'react';

import AvatarImage from '../../assets/images/avatar.png';
import { clearSession, getProfileData } from '../../helpers/AuthFunction';

import { AccountType } from './Account.types';

const Account = (prop: AccountType) => {
  const { isToolbar } = prop;
  const { photo, userName, defaultRole } = getProfileData();
  const _defaultRole = defaultRole ? JSON.parse(defaultRole) : null;

  const logout = () => {
    clearSession();
  };

  return (
    <>
      <div className='flex-col w-full text-left'>
        <div className='my-1 flex items-center'>
          <div className='w-16 inline-block float-left rounded-full overflow-hidden mr-3 shrink-0'>
            <img src={photo} alt='avatar' />
          </div>
          <div>
            <h2 className='text-blue-800 text-lg leading-5 whitespace-pre-wrap'>
              <b>{userName}</b>
            </h2>
            <p className='text-orange-800 text-sm mt-2'>
              {_defaultRole && _defaultRole.position}
            </p>
          </div>
        </div>

        {isToolbar && (
          <>
            <button
              className='w-full rounded border block bg-white text-black mt-6 mb-3 text-sm hover:bg-gray-100 py-1'
              onClick={() => logout()}
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

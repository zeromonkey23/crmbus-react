import React, { useState } from 'react';

import AvatarImage from '../../assets/images/avatar.png';
import Account from '../Account/Account';
import NotificationModal from '../NotificationModal/NotificationModal';

const Toolbar = () => {
  const [expand, setExpand] = useState(false);
  const [activeNotification, setActiveNotification] = useState(false);

  return (
    <>
      <nav className='text-center bg-blue-400 text-white p-4 flex justify-between'>
        <div onClick={() => setExpand(!expand)} className='cursor-pointer'>
          {expand ? (
            <span className='material-icons'>menu_open</span>
          ) : (
            <span className='material-icons'>menu</span>
          )}
        </div>
        <span>
          <b>Curriculum Management System</b>
        </span>
        <div className='flex items-center cursor-pointer'>
          <div className='relative'>
            <div className='mx-1 peer'>
              {!activeNotification ? (
                <span className='material-icons'>notifications</span>
              ) : (
                <span className='material-icons'>notifications_active</span>
              )}
            </div>

            {/* notif container */}
            <div className='hidden p-3 absolute w-72 h-52 border right-0 text-black bg-white d-block rounded shadow-sm peer-hover:grid hover:grid'>
              <NotificationModal />
            </div>
          </div>
          <div id='account' className='relative'>
            <div className='mx-1 ml-2 peer'>
              <img
                src={AvatarImage}
                alt='avatar'
                className='rounded-full w-8 opacity-75'
              />
            </div>

            {/* account information container */}
            <div className='hidden p-3 absolute w-72 h-36 border right-0  bg-white d-block rounded shadow-sm peer-hover:flex hover:flex'>
              <Account isToolbar={true} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Toolbar;

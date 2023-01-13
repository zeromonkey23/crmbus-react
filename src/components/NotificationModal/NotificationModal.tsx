import React from 'react';

const NotificationModal = () => {
  return (
    <>
      <div className='grid gap-4 grid-flow-row grid-rows-5 text-sm h-44 overflow-auto'>
        <div className='grid grid-flow-col grid-cols-4 px-2'>
          <span className='col-span-3 my-2 text-left'>Notification</span>
          <button
            className='block border my-2 rounded'
            onClick={() => alert('Go to notif list')}
          >
            View All
          </button>
        </div>
        <div className='row-span-4  h-full'>
          <span className='material-icons p-5'>info</span>
          <p>No new unread notification</p>
        </div>
      </div>
    </>
  );
};

export default NotificationModal;

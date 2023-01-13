import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../assets/images/Logo-binus.png';
import { MENULIST } from '../../data/menu';
import Account from '../Account/Account';

const Sidenav = () => {
  const [menuList, setMenuList] = useState(MENULIST);
  return (
    <>
      <div className='w-full overflow-auto h-full'>
        <img src={logo} alt='binus-logo' className='block w-full' />

        <div className='p-3'>
          <Account />
        </div>

        <div className='w-full p-3 '>
          <select name='role' id='role' className='w-full rounded p-1 border'>
            <option value='dean'>Dean</option>
            <option value='ARC'>ARC</option>
          </select>
        </div>

        <ul>
          {menuList &&
            menuList.map((menu) => {
              return (
                <div key={menu.title}>
                  <Link to={menu.link}>
                    <li className='px-4 py-2 grid grid-cols-6 gap-1 my-0 border border-gray-50 hover:bg-gray-100'>
                      <span className='material-icons'>{menu.iconName}</span>
                      <span className='text-sm col-span-5'>{menu.title}</span>
                    </li>
                  </Link>
                  <ul>
                    {menu.child &&
                      menu.child.map((child) => {
                        return (
                          <div key={child.title}>
                            <Link to={child.link}>
                              <li className='grid grid-cols-6 gap-1 px-4 py-2 hover:bg-gray-100'>
                                <span className='material-icons'>
                                  {child.iconName}
                                </span>
                                <span className='text-sm col-span-5'>
                                  {child.title}
                                </span>
                              </li>
                            </Link>
                          </div>
                        );
                      })}
                  </ul>
                </div>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Sidenav;

import React from 'react'
import Backdrop from './Backdrop'
import NavigationItems from './NavigationItems/NavigationItems'
import { Link } from 'react-router-dom'
import { FaShareSquare } from 'react-icons/fa'
import defaultAvatar from '../../assets/images/default.png'

function SideDrawer({ isSideDrawerOpen, closeSideDrawer }) {
  return (
    <>
      <Backdrop show={isSideDrawerOpen} close={closeSideDrawer} />
      <div className={`bg-yellow-500 transform  transition-all duration-300 ${isSideDrawerOpen ? 'translate-x-0' : '-translate-x-full'} z-20 w-2/3 h-full fixed left-0 top-0 flex flex-col justify-between p-4 text-md text-white`}>
        <div className='flex items-center gap-2'>
          <img src={defaultAvatar} alt='avatar' className='w-10 h-10 rounded-full' />
          <p>Cele cele</p>
        </div>

        <NavigationItems />

        <Link to='/' className='flex items-center gap-4'><FaShareSquare /> Sign out</Link>
      </div>
    </>
  )
}

export default SideDrawer

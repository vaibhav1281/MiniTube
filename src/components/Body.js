import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div  className='dark:text-white flex'>
      <div className='hidden md:block'>
        <SideBar/>
      </div>
      <Outlet/>
    </div>
  )
}

export default Body
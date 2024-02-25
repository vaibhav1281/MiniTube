import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'

const Body = () => {
  return (
    <div  className='dark:text-white flex'>
      <div className='hidden md:block'>
        <SideBar/>
      </div>
      <MainContainer/>
    </div>
  )
}

export default Body
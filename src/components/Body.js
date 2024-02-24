import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'

const Body = () => {
  return (
    <div  className='dark:text-white flex'>
      <SideBar/>
      <MainContainer/>
    </div>
  )
}

export default Body
import React from 'react'
import Sidebar from '../../components/Side bar/Sidebar'
import Nav from '../../components/Top nav/Nav'

const Profile = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex w-full flex-col ">
        <Nav />
      </div>
    </div>
  )
}

export default Profile
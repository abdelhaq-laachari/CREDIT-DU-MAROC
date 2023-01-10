import React from 'react'
import Datatable from '../../components/datatable/Datatable'
import Sidebar from '../../components/Side bar/Sidebar'
import Nav from '../../components/Top nav/Nav'

const Transaction = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex w-full flex-col ">
        <Nav />
      </div>
      <Datatable />
    </div>
  )
}

export default Transaction
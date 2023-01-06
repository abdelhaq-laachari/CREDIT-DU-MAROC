import React from 'react'
import Navbar from '../components/NavBar/NavBar'
import '../styles/Services.css'
import Map from '../assets/img/map.jpg'

const Services = () => {
  return (
    <>
    <Navbar /> 
    <div className='flex w-full justify-center'>
      <div className='flex flex-col w-11/12 h-[85vh] justify-center space-y-5 items-center text-center text-[#333333] font-circular'>
        <img className='first' src={Map} alt="" />
        <h1 className='text-2xl font-semibold'>Services</h1>
        <span className='text-6xl font-bold'>Experience the convenience of banking at your fingertips</span>
        <span className='text-2xl font-semibold'>Make your money work for you</span>
      </div>
    </div>
    </>
  )
}

export default Services
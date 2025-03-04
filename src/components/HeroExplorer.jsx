import React from 'react'
import MyPdf from '../assets/pdf.svg'
import { Link } from 'react-router-dom'
const HeroExplorer = () => {
  return (
    <div className='relative mt-16 flex justify-between w-full px-18'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-5xl text-gray-800 tracking-tighter'>Keep Your Simple Tasks Simple</h1>
        <div className='normal text-gray-600 flex flex-col text-xl pl-4'>
          <p>✅ Drag & Drop</p>
          <p>✅ Secure and Private Conversion</p>
          <p>✅ No Watermarks, No Limits</p>
          <p>✅ Works on All Devices</p>
          <p>✅ Free Forever!</p>
        </div>
        <Link to="/alltools" className='rounded-md bg-indigo-600 px-3 py-2 text-xl normal font-bold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-center'>
          Explore All PDF Tools
        </Link>
      </div>
      <div>
        <img src={MyPdf}></img>
      </div>
    </div>
  )
}

export default HeroExplorer

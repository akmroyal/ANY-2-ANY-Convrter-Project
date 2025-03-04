import React from 'react'
import tools from '../Data/ToolsDetails.js'
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
const AllTools = () => {
  return (
    <div className='flex flex-col items-center mt-10 gap-28'>
      <div className='flex flex-col items-center gap-10 text-gray-700'>
        <h1 className='text-5xl'>All Tools from the </h1>
        <p className='text-2xl'>Make use of our collection of PDF tools to process digital documents and streamline your workflow seamlessly.</p>
      </div>
      <div className='bg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6'>
        {tools.map((tool, index) => (
          <Link
            key={index}
            to={`/tool/${tool.title.toLowerCase().replace(/\s/g, "-")}`}
            className={` flex justify-between p-4 bg-box shadow-lg rounded-xl cursor-pointer h-[20vh] text-gray-700`}>
            <img src={tool.icon} alt="icon" className="w-[3vw] h-[3vw]" />
            <div className="flex flex-col justify-around p-1">
              <h3 className="font-normal text-3xl">{tool.title}</h3>
              <p className="text-md sub-heading">{tool.description}</p>
            </div>
            <div className="text-4xl lg:pl-10 sm:pl-8">{'>'}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AllTools;

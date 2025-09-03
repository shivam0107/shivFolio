import React from 'react'
import { FaGithub } from 'react-icons/fa6';
import { MdLiveTv } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';

const Overview = ({data}) => {
    console.log("data live in overview" , data.Live);
    const navigate = useNavigate();

  return (
    <div className="w-[100%] mx-auto bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md p-8 mb-6 hover:shadow-lg transition-all duration-300">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
        <span className="bg-blue-100 p-2 rounded-lg">
          📋
        </span>
        {data.title}
      </h2>

      <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm mb-6">
        <p className="text-gray-700">{data.desc}</p>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <span className="text-blue-600">🛠️</span>
          Skills & Technologies
        </h3>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, index) => (
            <span 
              key={index} 
              className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-lg text-sm font-medium border border-blue-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <span className="text-blue-600">✅</span>
          Key Features
        </h3>
        <div className="flex flex-col gap-3">
          {data.list.map((task, index) => (
            <div 
              key={index} 
              className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:border-blue-200 transition-all duration-200"
            >
              <div className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span className="text-gray-700">{task}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {data.img && data.img.length > 0 && (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8'>
          {
            data.img.map((img, index) => (
              <div 
                key={index} 
                className='bg-white p-2 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100'
              >
                <img 
                  src={img} 
                  alt={data.title} 
                  className="w-full h-[180px] object-cover rounded-lg hover:opacity-90 transition-opacity duration-300" 
                />
              </div>
            ))
          }
        </div>
      )}

      <div className='flex gap-4'>
        <Link 
          to={data.Live} 
          target='_blank' 
          className='flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200'
        >
          <MdLiveTv className="text-xl" />
          Live Demo
        </Link>
        <Link 
          to={data.GitHubLink} 
          target='_blank' 
          className='flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg hover:from-gray-800 hover:to-gray-900 transition-all duration-200'
        >
          <FaGithub className="text-xl" />
          Source Code
        </Link>
      </div>
    </div>
  )
}

export default Overview
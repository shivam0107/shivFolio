import React from 'react'
import { FaGithub } from 'react-icons/fa6';
import { MdLiveTv } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
const Overview = ({data}) => {
    console.log("data live in overview" , data.Live);

    const navigate = useNavigate();
  return (
    <div className="w-[100%]  mx-auto bg-white rounded-lg shadow-lg p-10 mb-4">
    <h2 className="text-2xl text-black font-bold mb-4">{data.title}</h2>
    <p className="text-gray-700 mb-4">{data.desc}</p>
    <div className="mb-4">
      <h3 className="font-bold text-black">Skills:</h3>
      <ul className="list-disc list-inside flex flex-wrap md:flex-row ">
        {data.skills.map((skill, index) => (
          <li key={index} className="text-gray-700 p-1">{skill}</li>
        ))}
      </ul>
    </div>
    <div className="mb-4">
      <h3 className="font-bold text-black">Tasks:</h3>
      <ul className="list-disc list-inside">
        {data.list.map((task, index) => (
          <li key={index} className="text-gray-700">{task}</li>
        ))}
      </ul>
    </div>
    <div className='flex'>
        {
            data.img.map((img , index) => (
                <div className=''>
                <img src={img} alt={data.title} className="w-[300px] mb-4" />
                </div>
            ))
        }
   </div>
   <div className='mt-5 flex gap-7'>
        <Link to={data.Live} target='_blank' className='p-2 border-[1px] border-black rounded-lg transition-none duration-200 hover:scale-95 bg-bluegray-300 text-blue-200 font-semibold'>
            <p  >Live Link</p>
        </Link>
        <Link to={data.GitHubLink} target='_blank' className='p-2 border-[1px] border-black rounded-lg transition-none duration-200 hover:scale-95 bg-bluegray-300 text-blue-200 font-semibold'>
            <p >GitHub Link</p>
        </Link>
   </div>
  </div>
  )
}

export default Overview
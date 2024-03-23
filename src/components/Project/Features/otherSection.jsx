import React from 'react'

const OtherSection = ({data}) => {
    console.log("data in othe Section" , data);
  return (
    <div className="max-fullmx-auto bg-white rounded-lg shadow-lg p-10 mb-4">
    <h2 className="text-2xl font-bold mb-4 text-black">{data.title}</h2>
    <p className="text-gray-700 mb-4">Future Scope:</p>

    <div className='flex flex-col gap-2'>
        {
            data.Scope.map((data , index) => {
                return  <div className='p-2 '>⭐ {" "}{data}</div>
            })
        }
    </div>
    <div className="mb-4">
      <h3 className="font-bold">Skills:</h3>
      <ul className="list-disc list-inside flex">
        {data.skills.map((skill, index) => (
          <li key={index} className="text-gray-700 p-1">{skill}</li>
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
  </div>
  )
}

export default OtherSection
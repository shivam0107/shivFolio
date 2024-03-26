import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';

function ContactModal() {
  const [showModal, setShowModal] = useState(false);
  const naigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowModal(true);
    }, 5000);

    return () => clearTimeout(timeoutId); // Clean up the timeout on component unmount
  }, []);

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex justify-center items-center text-white bg-black bg-opacity-50">
          <div className="absolute z-[1000] flex gap-5 justify-center items-center  cursor-pointer text-white left-0 top-[20%] p-2 border-r-2 bg-gray-800">
           <h1 onClick={() => naigate('/contact')}  className='text-2xl font-bold'> Contact Us</h1>
          <IoClose onClick={() => setShowModal(!showModal)} size={30} className='font-bold '/>

          </div>
        </div>
      )}
    </>
  );
}

export default ContactModal;

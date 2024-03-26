import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import CountryCode from "../Data/countrycode.json";
import Footer from "../components/Footer/Footer";
import img from '../assets/images.jpg'
import toast from "react-hot-toast";
import { getInTouch } from "../services/operations/contactAPI";
import SocialLinks from "../components/common/contact/SocialLinks";
const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    console.log("logging  Data", data);

    try {
        const res = await getInTouch(data);
    } catch (error) {
        console.log("error in contacting" , error);
        
    }
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [reset, isSubmitSuccessful]);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <>
      <div className="w-11/12 flex flex-col space-y-5 md:gap-20 md:flex-row md:justify-center md:items-center mx-auto  text-white mt-5 mb-10">

      <div className="">
        <h1 className="text-3xl font-bold ">Get in Touch with me</h1>
        <h2>write Your query will get back to you soon</h2>
        <img src={img} width={400} className=" hidden w-[300px]  md:block mb-5 rounded-lg mt-3"/>
        <SocialLinks/>
      </div>
        <div className="">
          <form onSubmit={handleSubmit(submitContactForm)} className="">
            <div className="flex flex-col gap-3">
              <div className="flex gap-5   ">
                {/* first name  */}
                <div className="flex flex-col gap-2  w-full ">
                  <label htmlFor="firstname">
                    first Name<sup className=" text-pink-400 ">*</sup>
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="bg-[#161D29] rounded-[0.5rem]  text-richblack-5 w-full p-[20px]"
                    placeholder="Enter first name"
                    {...register("firstname", { required: true })}
                  />
                  {errors.firstname && (
                    <span className="text-pink-100">
                      Please Enter Your Name
                    </span>
                  )}
                </div>
                {/* lastname */}
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="lastname">last Name</label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    className="bg-[#161D29] rounded-[0.5rem]  text-richblack-5 w-full p-[20px]"
                    placeholder="Enter last name"
                    {...register("lastname")}
                  />
                </div>
              </div>

              {/* email  */}
              <div className="flex flex-col gap-2">
                <lable htmlFor="email">
                  {" "}
                  Email address<sup className=" text-pink-400 ">*</sup>
                </lable>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-[#161D29] rounded-[0.5rem]  text-richblack-5 w-full p-[20px]"
                  placeholder="Enter your Email Address"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-pink-100">Please Enter email</span>
                )}
              </div>

              {/* phone no  */}
              <div className="flex flex-col gap-2">
                <label htmlFor="phonenumber">
                  Phone Number<sup className=" text-pink-400 ">*</sup>
                </label>
                <div className="flex flex-row gap-5">
                  {/* dropdown */}
                  <div className="w-[20%]">
                    <select
                      name="dropdown"
                      id="dropdown"
                      className="bg-[#161D29] rounded-[0.5rem]  text-richblack-5 w-full p-[20px]"
                      {...register("countrycode", { required: true })}
                    >
                      {CountryCode.map((element, index) => (
                        <option key={index} value={element.code}>
                          {element.code}-{element.country}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* phone no  */}
                  <div className="w-full">
                    <input
                      type="number"
                      id="phonenumber"
                      name="phonenumber"
                      placeholder="1234 4321"
                      className="bg-[#161D29] rounded-[0.5rem]  text-richblack-5 w-full p-[20px]"
                      {...register("phonenumber", {
                        required: {
                          value: true,
                          message: "please Enetr phone no",
                        },
                        maxLength: {
                          value: 10,
                          message: "Invalid Phone Number",
                        },
                        minLength: {
                          value: 10,
                          message: "Invalid Phone Number",
                        },
                      })}
                    />
                    {errors.phoneNo && (
                      <span className="text-pink-100">
                        {errors.phoneNo.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* message      */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message">
                  message<sup className=" text-pink-400 ">*</sup>
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="bg-[#161D29] rounded-[0.5rem]  text-richblack-5 w-full p-[20px]"
                  cols={30}
                  rows={7}
                  placeholder="Enter Your Message here"
                  {...register("message", { required: true })}
                />
                {errors.email && (
                  <span className="text-pink-100">Please Enter message</span>
                )}
              </div>

              {/* button  */}
              <button
                type="submit"
                className={`rounded-md bg-yellow-50 px-6 py-3 text-center cursor-pointer text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]`}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;

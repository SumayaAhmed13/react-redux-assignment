import React from 'react'
import { Link } from 'react-router-dom';
 const Footer = () => {
  return (
    <div className="w-full h-[441px] relative bg-black">
    <div className="p-[19.60px] left-[106px] top-[57px] absolute justify-start items-start gap-[19.60px] inline-flex">
        <div className="text-white text-[30.20px] font-bold font-poppins">WEB LOGO</div>
    </div>
    <div className="w-[328px] left-[116px] top-[155px] absolute text-white text-xl font-normal font-roboto">Some footer text about the  Agency. Just a little description to help people understand you better</div>
    <div className="left-[106px] top-[256px] absolute flex-col justify-start items-start gap-[27.94px] inline-flex">
        <div className="justify-start items-start gap-[15.31px] inline-flex">
            <div className="w-[40.82px] h-[40.82px] relative">
              <img src="/SocialIcon/Group 32.svg" alt="Logo" className="w-[40.82px] h-[40.82px] left-0 top-0 absolute bg-green-500 rounded-full text-white"/>
            </div>
            <div className="w-[40.82px] h-[40.82px] relative">
              <img src="/SocialIcon/Group 33.svg" alt="Logo" className="w-[40.82px] h-[40.82px] left-0 top-0 absolute bg-green-500 rounded-full text-white"/>
            </div>
            <div className="w-[40.82px] h-[40.82px] relative">
              <img src="/SocialIcon/Group 34.svg" alt="Logo" className="w-[40.82px] h-[40.82px] left-0 top-0 absolute bg-green-500 rounded-full text-white"/>
            </div>
            
           
        </div>
    </div>
    <div className="left-[681px] top-[95px] absolute text-white text-xl font-semibold font-poppins">Quick Links</div>
    <div className="left-[1066px] top-[93px] absolute text-white text-xl font-semibold font-poppins">Address</div>
    <div className="left-[681px] top-[141px] absolute flex-col justify-start items-start gap-[25px] inline-flex">
        <div className="text-white text-lg font-medium font-roboto hover:text-red-500"><Link to="/servicepage">Services</Link></div>
        <div className="text-white text-lg font-medium font-roboto hover:text-red-500"><Link to="/">Portfolio</Link></div>
        <div className="text-white text-lg font-medium font-roboto hover:text-red-500"><Link to="/">About Us</Link></div>
        <div className="text-white text-lg font-medium font-roboto hover:text-red-500"><Link to="/">Contact Us</Link></div>
    </div>
    <div className="left-[1066px] top-[149px] absolute text-white text-xl font-medium font-roboto">Design Agency Head Office.<br/>Airport Road<br/>United Arab Emirate</div>
    <div className="left-[116px] top-[385px] absolute text-white text-xl font-medium font-roboto">Copyright Design Agency 2023</div>
</div>
  )
}
export default Footer

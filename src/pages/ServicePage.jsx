import React from 'react'
import Layout from '../component/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import data from '/public/Database/service.json';
 const ServicePage = () => {
  return (
  <Layout>
  <div className="w-[1440px] h-[1994px] relative">
  <div className="w-[1440px] h-[370px] left-0 top-0 absolute">
       <div className="w-[347px] h-24 left-[100px] top-[80px] absolute">
            <div className="left-0 top-0 absolute text-gray-900 text-[40px] font-semibold  font-poppins leading-[51px]">Our Services</div>
            <div className="w-full h-[25px]  top-[71px] absolute  items-center gap-[10px] inline-flex">
                <div className="text-gray-900 text-base font-semibold  font-poppins"><Link to="/">Home</Link></div>
                <div className="text-gray-900 text-base font-black  font-poppins"><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></div>
                <div className="text-green-500 text-base font-semibold  font-poppins">Our Services</div>
            </div>
        </div>
    </div>
    <div className="w-full h-[1785px] left-0 top-[200px] absolute bg-white">
        <div className="left-[105px] top-[67px] absolute flex-col justify-start items-start gap-10 inline-flex">
            <div className="flex-col justify-start items-start gap-[15px] flex">
                <div className="text-green-500 text-xl font-medium  uppercase font-poppins">Our All Services</div>
                <div className="w-[495px] text-black text-3xl font-semibold  font-poppins">We Provide BestWeb design services</div>
            </div>
        </div>
        <div >
        <div className="grid grid-cols-2 w-98 pt-60 pl-24 gap-24 rounded shadow bg-white">
               {
                data.map((item,i)=>{
                  return(
                   <div key={i}className=" rounded shadow left-[100px] top-[252px] " >
                   <div className=' pl-5 font-poppins uppercase text-black text-[26px] pt-5 font-bold '>{item.title}</div>
                   <div className=' pl-5 pt-5  text-gray-400 font-semibold text-[15px] font-poppins'>{item.description}</div>
                   <img src={item.img} className='pt-12' />
                   </div>
                   
                  )
                })
               }
         
        </div>
        </div>
   </div>
 </div>

  </Layout>
  
  )
}
export default ServicePage

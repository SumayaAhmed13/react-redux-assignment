import React from 'react'
import Layout from '../component/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import data from '/public/Database/team.json';
import { Link } from 'react-router-dom';
 const Team = () => {
  return (
    <Layout>
 <div className="w-full h-[1000px] relative">
  <div className="w-[1440px] h-[370px] left-0 top-0 absolute">
       <div className="w-[247px] h-24 left-[100px] top-[80px] absolute">
            <div className="left-0 top-0 absolute text-gray-900 text-[40px] font-poppins  inline-flex">Team</div>
            <div className="w-[130px] h-[25px]  top-[71px] absolute justify-end items-center gap-[8px] inline-flex">
                <div className="text-gray-900 text-base font-semibold font-poppins leading-[25px]"><Link to="/">Home</Link></div>
                <div className="text-gray-900 text-base font-black font-poppins"><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></div>
                <div className="text-green-500 text-base font-semibold font-poppins">Team</div>
            </div>
        </div>
    </div>
    <div className="w-full h-[885px] left-0 top-[200px] absolute bg-white">
        <div className="left-[105px] top-[67px] absolute flex-col justify-start items-start gap-10 inline-flex">
            <div className="flex-col justify-start items-start gap-[15px] flex">
                <div className="text-green-500 text-xl font-medium font-poppins uppercase">Our Team Member</div>
                <div className="w-[495px] text-black text-3xl font-semibold font-poppins">Check our awesome team members</div>
            </div>
        </div>
        <div >
        <div className="grid grid-cols-3 w-full pt-60 pl-24 rounded bg-white gap-10 mr-8 shadow">
             
        {
                data.map((item,i)=>{
                  return(
                   <div key={i} className="rounded-md hover:shadow-lg  shadow-lg left-[100px] top-[152px] w-96" >
                   <img src={item.img} className=' pt-6  mb-5' />
                   <div className=' pl-5 font-poppins uppercase text-black text-[26px] pt-3 font-bold text-center'>{item.name}</div>
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
export default Team

import React from 'react'
import Layout from '../component/Layout';
import data from '/public/Database/project.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
 const ProjectPage = () => {
  return (
    <Layout>
      
   <div className="w-full h-[2200px] relative">
     <div className="w-[1440px] h-[370px] left-0 top-0 absolute">
       <div className="w-[347px] h-24 left-[100px] top-[80px] absolute">
            <div className="left-0 top-0 absolute text-gray-900 text-[40px] font-semibold  font-poppins leading-[51px]">All Project</div>
            <div className="w-full h-[25px]  top-[71px] absolute  items-center gap-[10px] inline-flex">
                <div className="text-gray-900 text-base font-semibold  font-poppins"><Link to="/">Home</Link></div>
                <div className="text-gray-900 text-base font-black  font-poppins"><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></div>
                <div className="text-green-500 text-base font-semibold  font-poppins">All Project</div>
            </div>
        </div>
    </div>
    <div className="w-full h-[1785px] left-0 top-[200px] absolute bg-white">
        <div className="left-[105px] top-[67px] absolute flex-col justify-start items-start gap-10 inline-flex">
            <div className="flex-col justify-start items-start gap-[15px] flex">
                <div className="text-green-500 text-xl font-medium  uppercase font-poppins">All Project</div>
                <div className="w-[495px] text-black text-3xl font-semibold  font-poppins">Better Agency/SEO Solution At Your Fingertips</div>
            </div>
        </div>
        <div >
        <div className="grid grid-cols-2 w-98 pt-60 pl-24 rounded shadow bg-white gap-14 pr-10">
        {
           data.map((data,i)=>{
             return(
             <div className="w-full rounded-lg shadow-md" key={i}>
            <img className="w-full h-[472px]" src={data.img} alt="logo" />
            <div className="p-4">
              <p className="text-xl font-semibold text-black uppercase font-poppins">{data.title}</p>
                
        
            </div>
        </div>
        )})
    }
         
        </div>
        </div>
   </div>
 </div>
  </Layout>

  )
}
export default ProjectPage

import React from 'react'
import Layout from '../component/Layout';
import data from '/public/Data/project.json';
 const ProjectPage = () => {
  return (
    <Layout>
      
    <div className="w-[495px] h-[1000px] relative bg-white">
    <div className="left-[105px] top-[67px] absolute flex-col justify-start items-start gap-10 inline-flex">
        <div className="flex-col justify-start items-start gap-[15px] flex">
            <div className="text-green-500 text-xl font-medium font-poppins uppercase">All Project</div>
            <div className="w-[495px] text-black text-3xl font-semibold font-poppins">Better Agency/SEO Solution At Your Fingertips</div>
        </div>
    </div>
    <div className="w-full h-[310px] left-[30px] top-[200px] absolute justify-center items-center inline-flex">
    <div className='flex flex-nowrap space-x-5 mt-10'>
    {
     data.map((data,i)=>{
         return(
        <div className="rounded overflow-hidden shadow-lg w-[395px] ml-10" key={i}>
            <img className="" src={data.img} alt="logo"/>
            <div className="px-6 py-4">
              <p className="text-gray-700 text-base">{data.title}</p>
                
        
            </div>
        </div>
        )})
    }
    </div> 
   
</div>
</div>
  </Layout>

  )
}
export default ProjectPage

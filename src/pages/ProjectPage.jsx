import React from 'react'
import Layout from '../component/Layout';
import data from '/public/Data/project.json';
 const ProjectPage = () => {
  return (
    <Layout>
      
    <div className="w-[495px] h-[1600px] relative bg-white">
      
    <div className="left-[105px] top-[67px] absolute flex-col justify-start items-start gap-10 inline-flex">
        <div className="flex-col justify-start items-start gap-[15px] flex">
            <div className="text-green-500 text-xl font-medium font-poppins uppercase">All Project</div>
            <div className="w-[495px] text-black text-3xl font-semibold font-poppins">Better Agency/SEO Solution At Your Fingertips</div>
        </div>
    </div>

    <div className="grid grid-cols-2 w-[1200px] pt-60 gap-10 pl-40">
    {
     data.map((data,i)=>{
         return(
        <div className="w-full rounded-lg shadow-md" key={i}>
            <img className="w-[544px] h-[372px]" src={data.img} alt="logo" />
            <div className="p-4">
              <p className="text-xl font-semibold text-black uppercase font-poppins">{data.title}</p>
                
        
            </div>
        </div>
        )})
    }
    </div> 
   

</div>
  </Layout>

  )
}
export default ProjectPage

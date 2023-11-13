import React from 'react'
import data from '/public/Data/work.json';
const WorkList = () => {


  return (
    <div className="w-full h-[421px] px-[105px] pt-[67px] pb-16 bg-white mb-20">
    <div className="self-stretch flex-col justify-start items-start gap-10 inline-flex">
        <div className="flex-col justify-start items-start gap-[15px] flex">
            <div className="text-green-500 text-xl font-medium uppercase font-poppins">Work List</div>
            <div className="w-[495px] text-black text-3xl font-semibold font-poppins mb-6">We provide the Perfect Solution to your business growth</div>
        </div>
    </div>
    
  
    <div className='flex flex-nowrap justify-between space-x-40'>
    {
            data.map((data,i)=>{
                return(
                    <div className="shadow-md  rounded-md overflow-hidden transition m-[10px] max-w-sm hover:shadow-lg bg-slate-100 transform hover:scale-110 duration-500 " key={i}>
                     <img className="mb-3 mt-6 shadow-lg rounded-[20px] w-20 h-20 text-center ml-32" src={data.img} alt="Bonnie image"/>
                     <h2 className="mb-1 text-gray-900 dark:text-white font-poppins font-semibold text-center">{data.title}</h2>
                     <h3 className=" text-gray-500 dark:text-gray-400 font-medium ml-3 text-center">{data.description}</h3>
                     <button type="button" className="text-gray-900 focus:outline-none  px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 focus:ring-green-400 hover:rounded-full hover:bg-green-500 hover:text-white font-semibold text-lg ml-28">Learn More</button>
                    </div>

                )
            }
           )
        }
    </div>
    
</div>
  )
}
export default WorkList

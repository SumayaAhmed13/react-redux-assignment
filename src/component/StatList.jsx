import React from 'react';
import data from '/public/Data/counter.json';
 const StatList = () => {
  return (
    <div className='w-full pb-16 bg-white mb-20 h-40 px-[105px]'>
    <div className='flex flex-nowrap justify-between space-x-24'>
    {
            data.map((data,i)=>{
                return(
                    <div className="rounded-md m-[10px] max-w-sm hover:shadow-lg w-96 mb-12 shadow-lg bg-white" key={i}>
                     <img className="mb-3 mt-6 shadow-lg rounded-[20px] w-20 h-20 text-center ml-20" src={data.img} alt="Bonnie image"/>
                     <h2 className="mb-1 text-gray-900 dark:text-white font-poppins font-semibold text-center">{data.amount}</h2>
                     <h3 className=" text-gray-500 dark:text-gray-400 font-medium  text-center mb-8">{data.title}</h3>
                  
                    </div>

                )
            }
           )
        }
    </div>
    </div>
  )
}
export default StatList

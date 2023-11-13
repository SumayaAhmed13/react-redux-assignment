import React from 'react'
import data from '/public/Data/featured.json';
 const Featured = () => {
  return (
    <div className="w-full h-[572px] relative bg-green-50">
    <div className="left-[113px] top-[62px] absolute text-green-500 text-xl font-medium  uppercase font-poppins">Featured Project</div>
    <div className="w-[495px] left-[113px] top-[116px] absolute text-black text-3xl font-semibold font-poppins">We provide the Perfect Solution to your business growth</div>
    <div className="w-full h-[310px] left-[30px] top-[200px] absolute justify-center items-center inline-flex">
    <div className='flex flex-nowrap space-x-5 mt-10'>
    {
     data.map((data,i)=>{
         return(
        <div className="rounded overflow-hidden shadow-lg w-80" key={i}>
            <img className="w-80" src={data.img} alt="logo"/>
            <div className="px-6 py-4">
              <p className="text-gray-700 text-base">{data.title}</p>
                <p className="font-bold text-xl mb-2">{data.description}</p>
        
            </div>
        </div>
        )})
    }
    </div> 
    </div>
</div>
  )
}
export default Featured

import React from 'react'

 const HeroList = () => {
  return (
    <div className="w-full h-[750px] relative bg-gradient-to-b from-emerald-100 to-emerald-100">
    <div className="h-[120px] w-full px-[105px] left-0 top-[583px] absolute bg-stone-50 justify-start items-center inline-flex">
        <div className="w-[1300px] h-[30px]">
            <div className=' flex items-center space-x-36 justify-items-center'>
            <img src="/public/Hero/Google.JPG" className='w-44 mb-80'/>
            <img src="/public/Hero/Trello.JPG" className='w-44 mb-80' />
            <img src="/public/Hero/monday.JPG" className='w-44 mb-80'/>
            <img src="/public/Hero/Notion.JPG"className='w-44 mb-80' />
            <img src="/public/Hero/slack.JPG" className='w-44 mb-80'/>
            </div>
          
        </div>
    </div>
    <div className="left-[102px] top-[65px] absolute flex-col justify-start items-start gap-[50px] inline-flex">
        <div className="flex-col justify-start items-start gap-2.5 flex">
            <div className="w-[550px] text-black text-[50px] font-bold font-poppins leading-[65px]">Increase Your Customers Loyalty and Satisfaction</div>
            <div className="w-[472px] text-black text-xl font-medium font-roboto">We help businesses like yours earn more customers, standout from competitors,  make more money</div>
        </div>
        <div className="px-[30px] py-5 bg-green-500 rounded-2xl justify-center items-center gap-2.5 inline-flex">
            <button className='text-white text-xl font-medium font-poppins cursor-pointer'>Get Started</button>
       
        </div>
    </div>
    <div className="w-full h-[457px] left-[733px] top-[65px] absolute">
        <img className="w-[408px] h-[271px] left-0 top-0 absolute rounded-[10px]" src="/public/Hero/hero1.JPG" />
        <img className="w-[246px] h-[164px] left-0 top-[293px] absolute rounded-[10px]" src="/public/Hero/hero3.JPG"/>
        <img className="w-[345px] h-[164px] left-[261px] top-[293px] absolute rounded-[10px]" src="/public/Hero/hero4.JPG" />
        <img className="w-[180px] h-[271px] left-[426px] top-0 absolute rounded-[10px]" src="/public/Hero/hero2.JPG" />
    </div>
   </div>
  )
}
export default HeroList

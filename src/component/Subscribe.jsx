import React from 'react'

const Subscribe = () => {
  return (
    <div className="w-[1440px] h-[499px] px-[422px] pt-[91px] pb-[137px] bg-white justify-center items-center inline-flex">
    <div className="self-stretch flex-col justify-center items-center gap-10 inline-flex">
        <div className="flex-col justify-start items-center gap-[5px] flex">
            <div className="flex-col justify-start items-center gap-[22px] flex">
                <div className="text-green-500 text-xl font-medium  uppercase font-poppins">SUBSCRIBE</div>
                <div className="w-[495px] text-center text-black text-3xl font-semibold font-poppins capitalize">Subscribe to get the latest news about us</div>
            </div>
            <div className="text-center text-zinc-500 text-base font-medium capitalize font-roboto">Please drop your email below to get daily update about what we do</div>
        </div>
        <div className="h-[62px] flex-col justify-start items-end flex">
            <div className="w-[596px] px-4 py-5 rounded-[14px] border border-black justify-start items-center gap-2.5 inline-flex">
                <div className="text-zinc-500 text-base font-normal font-roboto">Enter Your Email Adress</div>
                <div className="w-[130.65px] px-[24.32px] py-[8.11px] bg-green-600 rounded-[14px] justify-center items-center gap-[8.11px] flex ml-60">
                    <button className="text-white text-base font-medium font-poppins ">Subscribe</button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
export default Subscribe

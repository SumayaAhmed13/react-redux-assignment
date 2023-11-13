import React from 'react'
import { NavLink } from 'react-router-dom'

 const Layout = (props) => {
  return (
  <div>
   <div className="w-full h-20 px-[100px] py-[5px] justify-between items-center inline-flex bg-green-300">
    <div className="p-2.5 justify-start items-start gap-2.5 flex">
        <div><span className="text-black text-xl font-bold font-poppins">Design</span><span className="text-orange-600 text-xl font-bold font-poppins">AGENCY</span></div>
    </div>
    <div className="justify-center items-center gap-[30px] flex">
        <div className="p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black text-base font-medium font-poppins">
            <NavLink to="/" style={({ isActive }) =>isActive? {color: '#008000',}:{ color: '#545e6f'}}>Home</NavLink>
            </div>
        </div>
        <div className="p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black text-base font-medium font-poppins">
            <NavLink to="/projectpage" style={({ isActive }) =>isActive? {color: '#008000'}:{ color: '#545e6f'}}>Project</NavLink></div>
        </div>
        <div className="p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black text-base font-medium font-poppins">
            <NavLink to="/servicepage" style={({ isActive }) =>isActive? {color: '#008000'}:{color: '#545e6f'}}>Service</NavLink>
            </div>
        </div>
        <div className="p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-black text-base font-medium font-poppins">
            <NavLink to="/team" style={({ isActive }) =>isActive? {color: '#008000'}:{ color: '#545e6f' }}>Team</NavLink></div>
        </div>
        <div className="p-2.5 justify-center items-center gap-2.5 flex">
          <div className="text-black text-base font-medium font-poppins">
          <NavLink to="/testimonial" style={({ isActive }) =>isActive? {color: '#008000'}:{ color: '#545e6f' }}>Testimonial</NavLink>

          </div>
        </div>
        <div className="h-11 p-2.5 rounded-[10px] border border-green-500 justify-center items-center gap-2.5 flex">
            <div className="text-black text-base font-medium font-poppins">Login</div>
        </div>
        <div className="h-11 p-2.5 bg-green-500 rounded-[10px] justify-center items-center gap-2.5 flex">
            <div className="text-white text-base font-medium font-poppins">Register</div>
        </div>
    </div>
</div>
    {props.children}
   </div>
  
   
  )
}
export default Layout

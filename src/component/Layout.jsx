import React from 'react'
import { NavLink } from 'react-router-dom'

 const Layout = (props) => {
  return (
  <div>
   <header className="shadow-sm shadow-slate-400 bg-green-200">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#">
          <img src="https://cdn.ostad.app/public/upload/2023-10-17T07-14-50.690Z-Logo-new.png" alt="Logo" className="cursor-pointer"/>
          </a>
        <div>
          <ul className="flex space-x-10 justify-center font-semibold ">
       <li>
        <NavLink to="/" style={({ isActive }) =>isActive? {color: '#008000',}:{ color: '#545e6f'}}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/projectpage" style={({ isActive }) =>isActive? {color: '#000'}:{ color: '#545e6f'}}>Project</NavLink>
      </li>
      <li>
        <NavLink to="/servicepage" style={({ isActive }) =>isActive? {color: '#000'}:{color: '#545e6f'}}>Service</NavLink>
      </li>
      <li>
        <NavLink to="/team" style={({ isActive }) =>isActive? {color: '#000'}:{ color: '#545e6f' }}>Team</NavLink>
      </li>
      <li>
        <NavLink to="/testimonial" style={({ isActive }) =>isActive? {color: '#000'}:{ color: '#545e6f' }}>Testimonial</NavLink>
      </li>
          </ul>
        </div>
        
        </div>
        
      </header>
    {props.children}
   </div>
  
   
  )
}
export default Layout

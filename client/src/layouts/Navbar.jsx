import { NavLink } from "react-router-dom";
import { LogIn, Menu, ShoppingCart, User } from 'lucide-react';
import { useState } from "react";

export default function Navbar() {

    const [close, setclose] = useState(false)
  return <>
      <nav className="flex justify-between items-center py-2 container mx-auto">

          <NavLink to='/'>
          <div className="md:text-3xl text-2xl font-bold text-red-400 ml-2">Pacific</div>
          </NavLink>

          <div className="justify-between items-center gap-4 hidden md:flex">
              <NavLink to='/'         className=' text-md font-normal hover:scale-105 transition-all duration-120 text-slate-700 hover:text-red-400 cursor-pointer'>Home</NavLink>
              <NavLink to='/about' className=' text-md font-normal hover:scale-105 transition-all duration-120 text-slate-700 hover:text-red-400 cursor-pointer'>About</NavLink>
              <NavLink to='/contact'    className=' text-md font-normal hover:scale-105 transition-all duration-120 text-slate-700 hover:text-red-400 cursor-pointer'>Contact</NavLink>
              <NavLink to='/account'     className=' text-md font-normal hover:scale-105 transition-all duration-120 text-slate-700 hover:text-red-400 cursor-pointer'>Myaccount</NavLink>
          </div>

          <div  className='flex  gap-1 items-center'>  

            <div className="flex gap-2">
              <p className="font-semibold text-red-400 mt-2">$75.00</p>
              <div className="hover:bg-red-400 hover:text-slate-50 rounded-full h-10 w-10 flex justify-center items-center">
                <ShoppingCart />
              </div>
            </div> 
            <NavLink to='/login'>
              <div className="hover:bg-red-400 hover:text-slate-50 rounded-full h-10 w-10 flex justify-center items-center">
                <User/>
              </div>
            </NavLink>
            <div onClick={() => setclose(!close)} className="md:hidden hover:bg-red-400 hover:text-slate-50 rounded-full h-10 w-10 flex justify-center items-center">
              <Menu />
            </div>

          </div>
      </nav> 

      {/* // mobile version */}
     {
      close &&  <div className="md:hidden flex flex-col gap-10 p-4 absolute top-14 left-5 bg-red-400 rounded-xl w-[90%] mx-auto text-center">
      <NavLink  onClick={() => setclose(!close)} to='/'         className=' text-xl  font-normal transition-all duration-120 text-white hover:text-red-800 cursor-pointer'>Home</NavLink>
      <NavLink  onClick={() => setclose(!close)} to='/about' className=' text-xl  font-normal transition-all duration-120 text-white hover:text-red-800 cursor-pointer'>About</NavLink>
      <NavLink  onClick={() => setclose(!close)} to='/contact'    className=' text-xl  font-normal transition-all duration-120 text-white hover:text-red-800 cursor-pointer'>Contact</NavLink>
      <NavLink  onClick={() => setclose(!close)} to='/account'     className=' text-xl  font-normal transition-all duration-120 text-white hover:text-red-800 cursor-pointer'>My Account</NavLink>
    </div>
     }
  </>
}

import React from 'react'
import logo from '../../assets/logo.png'
import basket from '../../assets/basket.png'
import { Link } from 'react-router-dom'

const Nax = () => {
  return (
   <div className='w-full mt-[2%] h-[10%]   flex items-center overflow-hidden '>
     <div className='w-[60%] h-[60%] gap-2 flex items-center ml-10' >
        <img className='w-[4%] border-[2px] border-white rounded-full py-4' src={logo} alt="" />
        <h1 className='text-white text-2xl' >Pop Rock Crystal</h1>
    </div>

       <div className='w-[33%] text-white flex gap-12 text-xl'>
       <Link>Home</Link>
        <Link>Shop</Link>
        <Link>About Us</Link>
        <Link>Help</Link>
       </div>

        <img className='w-[2%] h-[35%] ' src={basket} alt="" />
   </div>
  )
}

export default Nax

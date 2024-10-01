import React from 'react'
import crystal from '../../assets/crystal.png'

const Product = () => {
  return (
    
    <div className='w-[20%] h-[22vw] bg-white rounded-3xl flex flex-col items-center justify-center shadow-lg shadow-zinc-500/50' >

        <img className='w-[60%]' src={crystal} alt="" />

        <h1 className='text-zinc-500 text-xl ' >CRYSTAL AGATE PHONE GRIP <br /></h1>

        <span className='font-semibold text-center text-zinc-500 text-xl py-3' >18.99 $</span>

        <button className='py-3 px-12 text-xl border-2 border-[#6fbbf1] text-[#6fbbf1] hover:bg-[#6fbbf1] rounded-md hover:text-white' >Buy Now</button>
    </div>
        
  )
}

export default Product

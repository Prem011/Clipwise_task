import React from 'react'
import crystal from '../../assets/crystal.png'
import { Link } from 'react-router-dom'

const Content = () => {
  return (
    <div className='w-full h-[90%] flex text-white relative' >

        <div className='flex absolute items-center top-[90%] left-[47%] ' >
            <img className='w-[18%]' src="https://img.icons8.com/?size=100&id=74qqWWRUvD2n&format=png&color=000000" alt="" />
            <h1 className='text-black' >Scroll down</h1>
        </div>

     <div className='w-[61%] px-14 pt-[10%]' >

        <h1 className='text-4xl py-2' >Welcome to</h1>
        <h1 className='text-8xl font-semibold ' >Pop Rock Crystal Shop!</h1>
        <p className='text-xl my-10 text-black' >Here you will find unique phone accessories, crystals,<br /> jewelry and more. Free shipping inside the U.S. and our <br /> phone grips come with a limited warranty. Enjoy!</p>
        <div className='flex items-center gap-9 ' >
            <button className='bg-white px-9 py-5 text-2xl rounded-3xl text-black' >SHOP NOW</button>
            <Link className='text-2xl text-zinc-700' >about us</Link>
        </div>
     </div>
      
      <div className='w-[37%] relative ' >
        <p className='absolute bg-[#8a93e5] p-2 rounded-tr-lg rounded-br-lg text-xl top-[20%]' >New lot</p>
        <div className='w-[95%] h-[65%] mt-[14%] bg-white rounded-3xl flex flex-col items-center  ' >
            <img className='w-[90%]' src={crystal} alt="" />
            <h1 className='text-zinc-500 text-xl ' >CRYSTAL AGATE PHONE GRIP - <span className='font-semibold' >18.99 $</span></h1>
        </div>
      </div>

    </div>
  )
} 

export default Content

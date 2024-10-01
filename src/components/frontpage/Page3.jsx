import React from 'react'
import crystal from '../../assets/crystal.png'


const Page3 = () => {
  return (
    <div className='bgPage3 overflow-hidden  flex items-center relative' >

        <div className='left-0 w-[50%] h-full flex flex-col justify-center items-end '>
            <h1 className='text-[2vw] text-[#31546d] mb-[-3%]' >BEST PRICE</h1>

            <h1 className='text-[5vw] font-semibold text-[#31546d]' >Agate phone grip</h1>

            <div className='flex gap-4 my-3 items-center' >
                <h1 className='text-[#4ea6bc] text-2xl line-through'  >44.50$</h1>
                <h1 className='text-[#e45e3f] text-6xl' >19.50$</h1>
            </div>

            <p className='text-[#6d8797] ' >This Pop Rock Crystal grip tops can be swapped with <br /> other tops depending on your mood, outfit, nails, <br /> phone case, holidays, etc.! Just gently squeeze  the sides <br /> to remove and swap out with another color or design! </p>

            <button className='bg-[#75caed] px-9 py-4 rounded-2xl mt-7 text-white hover:bg-white hover:border-2 border-[#6fbbf1] hover:text-[#6fbbf1] text-2xl' >Buy Now</button>

        </div>

        <div className='w-[50%] h-full  flex justify-center ml-[8%]  items-center'>
          <div className='w-[80%] h-[65%]  rounded-full shadow-2xl flex justify-center items-center' >
            <div className='w-[75%] h-[75%] bg-[#fefefe] rounded-full shadow-2xl flex justify-center items-center' >
              <div className='w-[60%] h-[60%] bg-[#ffffff] shadow-2xl rounded-full flex justify-center items-center' >
                <img className='w-[70%]' src={crystal} alt="" />
              </div>

            </div>
          </div>


        </div>
      
    </div>
  )
}

export default Page3

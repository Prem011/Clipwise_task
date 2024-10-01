import React from 'react'
import Nax from './Nax'
import Content from './Content'

const Pageone = () => {
  return (
    <div className=' h-screen bg-[rgb(118,196,230)] overflow-hidden relative' >
      <div className='w-[8%] h-[48%] blur-2xl bg-red-400 absolute shadow-lg shadow-red-400 left-[18%] top-[-18%] rotate-12' />
      
      <Nax/>

      <Content/>

      
      
    </div>
  )
}

export default Pageone

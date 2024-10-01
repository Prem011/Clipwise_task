import React, { useState } from 'react'
import crystal from '../../assets/crystal.png'
import Product from './Product';


const Page2 = () => {
    const [filter, setFilter] = useState("All Products");
    const [sort, setSort] = useState("Best Selling");
  
    const handleFilterChange = (e) => {
      setFilter(e.target.value);
    };
  
    const handleSortChange = (e) => {
      setSort(e.target.value);
    };
    
  return (
    <div className='overflow-hidden h-screen relative' >
        <div className=' w-[6%] text-center p-2 rounded-2xl border-2 border-[#6fbbf1] text-[#6fbbf1] absolute top-[96%] left-[47%] hover:bg-[#6fbbf1] hover:text-white ' >View all</div>

        <h1 className='text-5xl text-center font-semibold my-3' >All Product</h1>

        <div className='flex px-4 my-3 ' >
                <div className="flex items-center space-x-2">
                <span className="text-gray-900 ">Filter:</span>
                    <select
                    value={filter}
                    onChange={handleFilterChange}
                    className="text-[#6fbbf1] font-semibold"
                    >
                    <option value="All Products">All Products</option>
                    <option value="New Arrivals">New Arrivals</option>
                    <option value="Top Rated">Top Rated</option>
                    </select>
                </div>

                <div className="flex items-center space-x-2">
                <span className="text-gray-900 ml-3">Sort:</span>
                    <select
                    value={sort}
                    onChange={handleSortChange}
                    className="text-[#6fbbf1] font-semibold"
                    >
                    <option value="Best Selling">Best Selling</option>
                    <option value="Price: Low to High">Price: Low to High</option>
                    <option value="Price: High to Low">Price: High to Low</option>
                    <option value="Customer Reviews">Customer Reviews</option>
                    </select>
                </div>


        </div>

        <div className='w-full  flex flex-col justify-center' >

            <div className='w-full h-full flex  gap-10 mt-[2%] ml-[6%] '>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
            
        
           <div className='w-full h-full flex  gap-10 mt-[2%] ml-[6%] ' >
                <Product/>
                <Product/>
                <Product/>
                <Product/>
           </div>

        </div>
       
       

      
    </div>
  )
}

export default Page2

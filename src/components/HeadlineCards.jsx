import React from 'react'

const HeadlineCards = () => {
  return (
    <div className=' max-w-[1640px] mx-auto p-4  py-12 grid  md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='overflow-hidden group rounded-xl relative'>
        {/* overaly */}
        <div className='absolute z-10 w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Sun's Out,  BOGO's Out</p>
            <p className=' px-2'>Through 8/26</p>
            <button className=' border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img className='group-hover:scale-105 transform translate duration-500 max-h-[160px] md:max-h-[200px]  w-full object-cover  rounded-xl' 
         src='https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' />

      </div> {/* end of card */}

      {/* Card */}
      <div className='overflow-hidden group rounded-xl relative'>
        {/* overaly */}
        <div className='absolute z-10 w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
            <p className=' px-2'>Added Daily</p>
            <button className=' border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img className='group-hover:scale-105 transform translate duration-500 max-h-[160px] md:max-h-[200px]  w-full object-cover  rounded-xl' 
         src='https://images.pexels.com/photos/4109128/pexels-photo-4109128.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='/' />

      </div> {/* end of card */}

      {/* Card */}
      <div className=' overflow-hidden group rounded-xl relative'>
        {/* overaly */}
        <div className=' absolute z-10  w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts Too</p>
            <p className=' px-2'>Tasty Treats</p>
            <button className=' border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img className=' group-hover:scale-105 transform translate duration-500  max-h-[160px] md:max-h-[200px]  w-full object-cover  rounded-xl' 
         src='https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' />
      </div> {/* end of card */}
      
    </div>
  )
}

export default HeadlineCards

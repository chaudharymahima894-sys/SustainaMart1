<<<<<<< HEAD
import React from 'react'
import { assets } from '../assets/assets'
=======
       import React from 'react'
>>>>>>> f05f3471c65141d7dc58a1c78ad16376254097c5

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base rgb(55,65,81)text-gray-700'>
<<<<<<< HEAD

      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'> Easy Exchange Policy </p>
        <p className='text-gray-400'> We offer hassle free exchange policy</p>
      </div>
      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'> 7 Days Return  Policy </p>
        <p className='text-gray-400'> We provide 7 days return policy</p>
      </div>
      <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Best customer support </p>
        <p className='text-gray-400'> We offer  24/7 customer support</p>
=======
      
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt=""/>
     <p className='font-semibold'> Easy Exchange Policy </p>
     <p className='text-gray-400'> We offer hassle free exchange policy</p>
      </div>
       <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt=""/>
     <p className='font-semibold'> 7 Days Return  Policy </p>
     <p className='text-gray-400'> We provide 7 days return policy</p>
      </div>
       <div> 
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt=""/>
     <p className='font-semibold'>Best customer support </p>
     <p className='text-gray-400'> We offer  24/7 customer support</p>
>>>>>>> f05f3471c65141d7dc58a1c78ad16376254097c5
      </div>

    </div>
  )
}

export default OurPolicy

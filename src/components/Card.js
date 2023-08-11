import React from 'react'
import {FaQuoteLeft , FaQuoteRight} from 'react-icons/fa';

function Card(props) {
    let review = props.review;
  return (
    <div className='flex flex-col md:relative '>
        <div className='md:absolute relative md:top-[-5rem] z-[10] mx-auto'>
            <img  className="aspect-square rounded-full w-[140px] h-[140px] z-[25]" src={review.image} alt=''/>
        </div>
        
        <div  className='text-center mt-7'>
            <p className='tracking-wider font-bold text-2xl capitalize'>{review.name}</p>
            <p className='text-green-500 uppercase text-sm'>{review.subject}</p>
        </div>
       
     
        <div className='text-green-600 mx-auto mt-5'>
           <FaQuoteLeft/> 
        </div>
        <div className='text-center mt-4 text-slate-500'>
            {review.text}
        </div>
        <div className='text-green-600 mx-auto mt-5'>
            <FaQuoteRight/>
        </div>
      
    </div>
  )
}

export default Card
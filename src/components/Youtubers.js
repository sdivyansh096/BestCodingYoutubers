import React, { useState } from 'react'
import Card from './Card';
import {FiChevronLeft , FiChevronRight} from "react-icons/fi"
function Youtubers(props) {
    let reviews = props.reviews;
    const[index,setIndex]=useState(0);
    function leftShiftHandler(){
      if(index-1 < 0){
        setIndex(reviews.length -1);
      }
      else{
        setIndex(index-1);
      }
    }
    function rightShiftHandler(){
      if( index+1 >= reviews.length){
        setIndex(0);
      }
      else{
        setIndex(index+1);
      }
    }
  
    function surpriseHandler(){
      let randomeNumber = Math.floor(Math.random() * reviews.length);
      setIndex(randomeNumber);
    }
  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>
        <Card review={reviews[index]}/>
        <div className='flex text-3xl mt-10 gap-3 text-green-600 font-bold mx-auto'>
            <button onClick={leftShiftHandler}
             className='cursor-pointer hover:text-green-400'>
                <FiChevronLeft/>
            </button>
            <button onClick={rightShiftHandler}
            className='cursor-pointer hover:text-green-400'>
                <FiChevronRight/>
            </button>
        </div>
        <div onClick={surpriseHandler} className='mt-6' >
            <button className='bg-green-600 hover:bg-green-400 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg '>
                Random Creator
            </button>
        </div>
    </div>
  )
}

export default Youtubers
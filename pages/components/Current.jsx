import React from 'react'
 import { getCurrentDate } from '../../utils/currentDate';
 import {HiLocationMarker} from "react-icons/hi";


const Current = ({data}) => {
    const currentDate = getCurrentDate();
    const weatherIcon = data.current ? data.current.condition.icon : null ;
  return (
    <div className='flex flex-col mb-8 md:mb-0 items-start gap-2 w-1/2'>
        <div className='flex items-center'>
            <div >
                <h1 className='text-3xl text-white'>Today</h1>
                <p className='text-white'>{currentDate}</p>
                {weatherIcon && (
                    <div>  <img src={weatherIcon} alt="Weather Icon" className='img-fluid w-[50px] object-cover'/> </div>
                )}
               
            </div>
        </div>
        <div >
        <p className='text-5xl text-white'>{data.current.temp_c}°c </p>
        <span className='text-white font-bold'>{data.current.condition.text}</span>
        </div>
        <div >
            <div className='flex items-center text-black bg-white px-2 py-2 rounded-xl'>
                <HiLocationMarker /> {data.location.name}, {data.location.country}
            </div>
        </div>
    </div>
  )
}

export default Current
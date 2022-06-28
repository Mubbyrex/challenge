import { useState } from 'react';
import { FaStar } from 'react-icons/fa'
import { FaAngleRight } from 'react-icons/fa'
import { AiOutlineHeart} from 'react-icons/ai'
import { TiArrowForwardOutline} from 'react-icons/ti'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import './App.css';
import data from './data'

function App() {
  const [page,setPage]=useState(data)
 
  return (
    <div className="App max-h-screen pl-4 lg:pl-0">

      {/* Heading */}
      <section className='mb-8' >
        <h1 className='text-4xl font-semibold mt-4'>
      {page.heading}
      </h1>
      <h2 className='text-gray-500 font-semibold flex items-center' >
      {page.subHeading}
      <AiOutlineQuestionCircle className='ml-2'/>
      </h2>
      </section>

      {/* Body */}
      <section className='flex'>

        {/* write up */}
        <div className='w-1/2 pr-6' >
        <p className='font-semibold text-grey-700 mb-2 leading-relaxed'>
          {page.paragraph}
        </p>
        <div className='mt-5'>
          {/* Author */}
          <span className='flex flex items-center  mb-2'>
            <img src= {page.author.image} alt="" srcset="" className='w-10 h-10 rounded-full object-cover'  />
          <p className='ml-2 text-purple-600 font-bold'>
          {page.author.name}</p>
          </span>
          <div className='flex items-center mb-2'>
          <FaStar color='gold' />
          <FaStar color='gold' />
          <FaStar color='gold' />
          <FaStar color='gold' />
             <p className='ml-2 text-sm text-gray-700'> 467 reviews for this teacher </p>
          </div>
          <div className='flex items-center mb-2'>
          <FaStar color='gold' />
          <FaStar color='gold' />
          <FaStar color='gold' />
          <FaStar color='gold' />
             <p className='ml-2 text-sm text-gray-700'> 5 reviews for this class </p>
          </div>

          <p className='font-semibold mb-8'>Completed by 21 learners </p>
        </div>
      {/* buttons */}
      <div className='flex items-center space-x-2'>
        <a href='#' className='bg-purple-600 text-white rounded-full px-4 py-2 flex items-center' >See Class Schedule<FaAngleRight/></a>
        <a href='#' className='text-purple-600 px-4 py-2 font-semibold flex items-center'><AiOutlineHeart className='mr-1' /> Save </a>
        <a href='#' className='text-purple-600 px-4 py-2 font-semibold flex items-center'><TiArrowForwardOutline/> Share </a>
        
      </div>
      
        </div>

        {/* images */}
        <div className=' w-1/2 grid md:grid-cols-2 md:gap-1 gap-1 grid-cols-1' >
          <div className=' row-span-2'> <img className='md:h-full h-auto ' src={data.paintings[0]} alt="" /></div>
          <div className=''><img src={data.paintings[1]} alt="" srcset="" /></div>
          <div className=''><img  src={data.paintings[2]} alt="" srcset="" /></div>
         
        </div>

      </section>
     

  
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import data from './data'

function App() {
  const [page,setPage]=useState(data)
 
  return (
    <div className="App ">

      {/* Heading */}
      <section  >
        <h1 className='text-4xl font-semibold '>
      {page.heading}
      </h1>
      <h2 >
      {page.subHeading}</h2>
      </section>

      {/* Body */}
      <section className='flex'>

        {/* write up */}
        <div >
        <p className='font-semibold text-grey-700'>
          {page.paragraph}
        </p>
        <div>
          {/* Author */}
          <span className='flex flex-col'>
          {page.author.image}
          <p> rating </p>
          {page.author.name}
          </span>
          completd by 21 learners
        </div>
      {/* buttons */}
      <div className=''>
        <a href='#'>See Class Schedule </a>
        <a href='#'>Save </a>
        <a href='#'>Share </a>
      </div>
      
        </div>

        {/* images */}
        <div className='flex flex-col flex-wrap ' >
          <img src={data.paintings[0]} alt="" />
         
            <img src={data.paintings[1]} alt="" srcset="" />
            <img src={data.paintings[2]} alt="" srcset="" />
         
          
        </div>

      </section>
     

  
    </div>
  );
}

export default App;

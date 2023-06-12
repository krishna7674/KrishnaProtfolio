import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]' >

      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Krishna Singh</h1>
        <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0]' >I'm a Front End Developer.</h2>

        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I am specialized in building and creating the user interface (UI) and user experience (UX) components of a website or web application.  utilizing HTML, CSS, and JavaScript to build the visual elements and interactivity that
          users interact with directly. I am familer with front-end frameworks with React which enable me to develop responsive and dynamic user interfaces.
        </p>
        <div >
          <button className=' rounded-md text-white group group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-pink-600'>View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />

            </span>
          </button>
        </div>

      </div>

    </div>
  )
}

export default Home

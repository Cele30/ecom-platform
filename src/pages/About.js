import React from 'react'

function About() {
  return (
    <div className='container mx-auto px-4'>
      <div className='py-20 lg:py-24'>
        <span className='text-sm sm:text-base md:text-lg uppercase block text-center mb-3'>Our story</span>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center'>Get to knows us</h1>
        <p className='text-base text-center mt-6 lg:mt-10 mb-12 w-3/4 mx-auto'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>

      <div className='w-full my-16 sm:my-20 lg:my-24 bg-yellow-600'>
        <div className='w-5/6 sm:w-3/4 md:w-5/6 mx-auto flex flex-col md:flex-row  justify-between py-16 md:py-20 text-center sm:text-left'>
          <div className='md:w-1/2'>
            <div className='px4'>
              <h3 className='font-medium text-white text-3xl'>Our mission</h3>
              <p className='text-white text-base pt-6 md:pt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>

          <div className='md:w-1/2 pt-12 md:pt-0'>
            <div className='px-4'>
              <h3 className='font-medium text-white text-3xl'>Our Vision</h3>
              <p className='text-white text-base pt-6 md:pt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

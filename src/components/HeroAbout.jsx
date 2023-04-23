import React from 'react'
import ProfileImg from '../assets/profile.jpg'

const HeroAbout = () => {
  return (
    <div>
      <img className='rounded-full w-[200px] mx-auto' src={ProfileImg} alt='' />
      <div className='mt-10'>
        <p className='text-center'>
          Hi there! My name is{' '}
          <span className='text-orange-500'>Josh Grossman</span> and my
          job/passion is helping organizations to build secure software!
        </p>
        <p className='mt-10'>
          I generally go by my real name but in some places I use my handles
          <span className='text-orange-500'> “tghosth”</span> or{' '}
          <span className='text-orange-500'> “AppSec Ghost”</span>, hence my
          avatar.
        </p>
        <p className='mt-5'>
          If you are looking for help building or getting higher value from your
          Application Security Programme, your best option is to contact me on
          my work address{' '}
          <a
            className='underline decoration-dotted hover:text-orange-500'
            href='mailto:josh@bouncesecurity.com.'
          >
            josh@bouncesecurity.com.
          </a>{' '}
          For more information, see the{' '}
          <a
            className='underline decoration-dotted hover:text-orange-500'
            href='https://www.bouncesecurity.com/'
          >
            Bounce Security website
          </a>
          .
        </p>
      </div>
    </div>
  )
}

export default HeroAbout

import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='w-full h-[4rem] tracking-wide flex gap-6 text-lg font-semibold justify-center items-center bg-orange-500'>
      <Link to='/' className='underline-with-animation'>
        About Course
      </Link>
      <Link to='/about-trainer' className='underline-with-animation'>
        About Trainer
      </Link>
      <Link to='/where-to-attend' className='underline-with-animation'>
        Where to Attend
      </Link>
    </div>
  )
}

export default Nav

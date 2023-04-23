import React from 'react'
import HeroAbout from '../components/HeroAbout'

const About_Trainer = () => {
  return (
    <>
      <div className='bg-[url(assets/bg1.jpg)] fixed top-0 w-full bg-fixed bg-no-repeat h-screen opacity-5 -z-20'></div>
      <div className='w-3/5 mx-auto py-10'>
        <HeroAbout />
      </div>
    </>
  )
}

export default About_Trainer
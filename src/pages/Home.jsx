import React from 'react'
import HeroHome from '../components/HeroHome'

const Home = () => {
  return (
    <>
      <div className='bg-[url(assets/bg1.jpg)] fixed w-full top-0 bg-cover bg-no-repeat h-screen opacity-5 -z-20'></div>
      <div className='w-4/5 mx-auto py-10'>
        <HeroHome />
      </div>
    </>
  )
}

export default Home

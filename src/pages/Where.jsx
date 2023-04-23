import React from 'react'
import Place from '../components/Place'

const Where = () => {
  return (
    <>
      <div className='bg-[url(assets/placebg.jpg)] fixed top-0 w-full bg-cover bg-no-repeat h-screen opacity-50 -z-20'></div>
      <div className='w-4/5 mx-auto py-10'>
        <Place />
      </div>
    </>
  )
}

export default Where

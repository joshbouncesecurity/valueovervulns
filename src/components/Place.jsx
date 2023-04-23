import React from 'react'
import Banner from '../assets/banner.jpg'

const Place = () => {
  return (
    <div>
      <p className='text-center font-semibold text-lg'>
        The easiest way to attend this course right now is to sign-up for the
        public, in-person, two day session which I am running at Black Hat USA
        2023. For more information and registration see{' '}
        <a
          href='https://appsecg.host/bhreg'
          target='_blank'
          className='text-orange-500'
        >
          here
        </a>{' '}
        <br />
        (get the early bird rate before it expires!).
      </p>
      <div className='mt-20 flex flex-col gap-4 justify-center items-center'>
        <p className='uppercase font-bold text-2xl text-orange-500'>
          black hat usa 2023
        </p>
        <img src={Banner} alt='' />
      </div>
      <div className='mt-10 flex flex-col gap-4 text-lg'>
        <p>
          You can sign-up now for the full two day version of the course which
          will be delivered <span className='text-orange-500'>in-person</span>{' '}
          at Black Hat USA on August 7th and 8th 2023 in Las Vegas. The specific
          details of the content to be covered in this course and registration
          information can be found on the{' '}
          <a
            href='https://www.blackhat.com/us-23/training/schedule/#building--a-high-value-appsec-scanning-programme-sca-sast-dast-and-more-30622'
            target='_blank'
            className='text-orange-500 underline decoration-dotted underline-offset-4'
          >
            conference website here
          </a>
          . There is a <span className='text-orange-500'>big discount</span> for
          signing up before 26th May!
        </p>
        <p>
          Black Hat USA is without a doubt the biggest event in the
          cybersecurity conference calendar and I am really excited to be
          training there and attend the conference!
        </p>
      </div>
    </div>
  )
}

export default Place

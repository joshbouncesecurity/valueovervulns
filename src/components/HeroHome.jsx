import React from 'react'

const comments = [
  {
    id: 1,
    comment: 'On target good advice on taking the next steps in SCA and SAST.',
  },
  {
    id: 2,
    comment:
      'Group exercises were awesome – everybody were involved, compensated each other’s knowledge gaps and shared experience and approaches.',
  },
  {
    id: 3,
    comment:
      'Good high level overview of the space and a primer on what to reasonably expect when one implements a program in their business.',
  },
  {
    id: 4,
    comment:
      'There were a few aspects of SCA and SAST that I haven’t considered before and that Josh brought up that were quite helpful. Josh is also a master of balance on how much time he spends in each topic and answering questions, which meant that the training felt very fluid.',
  },
  {
    id: 5,
    comment: 'Very good, josh is higly (sic) skilled in the topic.',
  },
]

const av = [
  {
    id: 1,
    title: 'Elevator pitch for the course',
    content:
      'In this short video, I give a quick explanation of the course and the ideas around it.',
    link: 'https://www.youtube.com/watch?v=_fzC-xmtwHc',
    len: 2,
  },
  {
    id: 2,
    title: 'Discussion of the background to the course',
    content:
      'In this interview with the Application Security Podcast, I talk through the background to the course including where the idea came from and the key takeaways and ideas I want people to get from the course.',
    link: 'https://www.youtube.com/watch?v=LAcH1kFP4-M',
    len: 40,
  },
  {
    id: 3,
    title: 'Sample 1 of the course material – SCA Deep Dive ',
    content:
      'This is an example of some of the course content albeit pushed together in a less interactive way. The course itself has more discussion and exercises interspersed. This particular session was a deep-dive on Software Composition Analysis (SCA).',
    link: 'https://www.youtube.com/watch?v=2SxHfhvhey8',
    len: 55,
  },
  {
    id: 4,
    title: 'Sample 2 of the course material – Quick-fire tips',
    content:
      'This was a talk I did at DevSecCon24 which was designed to be a few quick examples of efficiency tips for SCA and SAST. In the full training course there are far more suggestions and there is much more time to explain, discuss and practice them.',
    link: 'https://www.youtube.com/watch?v=5JOuRZoyc6o',
    len: 40,
  },
]

const HeroHome = () => {
  return (
    <div className='flex flex-col gap-10'>
      <p className='text-justify'>
        I am delivering training courses on how to build effective processes
        around application security scanning tools as part of my work for Bounce
        Security. The course's official name is “Building a High-Value AppSec
        Scanning Programme” and it's unofficial, more fun but less descriptive
        name is “Tune your Toolbox for Velocity and Value”. This post will serve
        as a way of getting more information about the course.
      </p>
      <p className='underline underline-offset-8 mt-10 text-3xl text-center text-orange-500'>
        About the course
      </p>
      <p>
        You bought the application security tools, you have the findings, but
        now what? Many organisations find themselves drowning in “possible
        vulnerabilities”, struggling to streamline their processes and not sure
        how to measure their progress. If you are involved in using SAST, DAST
        or SCA tools in your organisation, these may be familiar feelings to you
        and this course comes to try and address these issues
      </p>
      <p>
        This is a topic I have had significant experience with over the last
        several years providing application security consulting and “on the
        ground” assistance to various organisations. This has exposed me to a
        variety of these tools and several ways of working with them, seeing
        what works and what does not in different contexts. Being a consultant
        means I have no vendor allegiance or commitment and allows me to discuss
        useful war stories (both successful and less successful) without
        disclosing sensitive client/employer information.
      </p>
      <p>
        From seeing these organisations and discussing in various forums, this
        problem certainly seems to resonate and training like this would fill a
        gap that urgently needs to be addressed. Companies are being told that
        they need to improve their application security posture and that more
        tools are the key to doing this efficiently. However, it is becoming
        clear that without effective processes and strategies for working with
        these tools, they quickly become a burden and a blocker.
      </p>
      <div className='text-lg font-semibold text-orange-500 tracking-wide'>
        In this course you will learn how to address these problems and more (in
        a vendor-neutral way), with topics including:
        <ul className='list-disc font-normal pl-10 py-5 leading-8'>
          <li>
            <span className='text-white'>What to expect from these tools?</span>
          </li>
          <li>
            <span className='text-white'>
              Customising and optimising these tools effectively
            </span>
          </li>
          <li>
            <span className='text-white'>
              Building tool processes which fit your business
            </span>
          </li>
          <li>
            <span className='text-white'>
              Automating workflows using CI/CD without slowing it down
            </span>
          </li>
          <li>
            <span className='text-white'>
              Showing the value and improvements you are making
            </span>
          </li>
          <li>
            <span className='text-white'>
              Faster and easier triage through smart filtering
            </span>
          </li>
          <li>
            <span className='text-white'>
              How to focus on fixing what matters and cut down noise
            </span>
          </li>
          <li>
            <span className='text-white'>
              Techniques for various alternative forms of remediation
            </span>
          </li>
          <li>
            <span className='text-white'>
              Building similar processes for penetration testing activities
            </span>
          </li>
          <li>
            <span className='text-white'>
              Comparison of the different tool types covered
            </span>
          </li>
        </ul>
      </div>
      <p className='underline underline-offset-8 text-center text-3xl text-orange-500'>
        Feedbacks
      </p>
      <p>
        I ran a 1 day version of the course focussing on SCA and SAST virtually
        at OWASP Global AppSec EU 2022 and I have now run the 2 day in-person
        version of the course (which includes SCA, SAST, DAST and pen testing)
        twice at OWASP Global AppSec San Francisco 2022 and Dublin 2023.
      </p>
      <p>Both sessions went great with very positive feedback.</p>
      {comments.map((e) => {
        return (
          <div
            key={e.id}
            className='w-4/5 mx-auto h-fit bg-black py-2 px-4 bg-opacity-50 rounded-md border'
          >
            <p>"{e.comment}"</p>
          </div>
        )
      })}
      <p className='mt-10 text-center underline underline-offset-8 text-xl text-orange-500'>
        Audio/Visual information about the course
      </p>
      {av.map((e) => {
        return (
          <div key={e.id}>
            <p className='text-orange-500'>
              {e.title}
              <span className='text-white'> ~{e.len} minutes </span>
              <a
                href={e.link}
                className='underline cursor-pointer hover:text-white px-5'
              >
                Video
              </a>
            </p>
            <p>{e.content}</p>
          </div>
        )
      })}
    </div>
  )
}

export default HeroHome

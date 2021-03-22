import React from 'react'

export default function aboutme(data, firstName, jobTitle, employer) {
  return (
    <section className='[ AboutMe ] bg-pastel-blue'>
      <div className='container mx-auto p-5 text-dc-grey'>
        <div className='[ AboutMe__Title ][ AboutMe__Text ] font-roboto font-extrabold text-7xl text-left p-10'>
          About Me
        </div>
      </div>
    </section>
  )
}

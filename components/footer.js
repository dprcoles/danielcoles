import React from 'react'
import {
  FaEnvelopeOpen,
  FaSpotify,
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa'

export default function footer({ data }) {
  return (
    <footer className='[ Footer ]'>
      <div className='container mx-auto p-5 text-dc-grey'>
        <div className='grid grid-flow-row grid-cols-6 grid-rows-1 gap-6'>
          <div className='self-center text-left col-span-5'>
            <div className='[ Footer__Text ] font-mono text-lg font-semibold'>
              Designed and developed by{' '}
              <a
                className='[ Footer__Text ][ Footer__Link ] text-yellow-500 hover:text-yellow-300'
                href={data.developedBy.link}
                target='_blank'
              >
                {data.developedBy.name}
              </a>
            </div>
            <div className='[ Footer__Text ] font-mono text-lg font-semibold'>
              Built in{' '}
              <a
                className='[ Footer__Text ][ Footer__Link ] text-pink-500 hover:text-pink-300'
                href={data.builtIn.link}
                target='_blank'
              >
                {data.builtIn.name}
              </a>
              . Hosted on{' '}
              <a
                className='[ Footer__Text ][ Footer__Link ] text-green-500 hover:text-green-300'
                href={data.hostedOn.link}
                target='_blank'
              >
                {data.hostedOn.name}
              </a>
            </div>
            <div className='[ Footer__Text ] font-mono text-lg font-semibold'>
              Inspired by{' '}
              <a
                className='[ Footer__Text ][ Footer__Link ] text-indigo-500 hover:text-indigo-300'
                href={data.inspiredBy.link}
                target='_blank'
              >
                {data.inspiredBy.name}
              </a>
            </div>
          </div>
          <div className='grid grid-flow-row grid-cols-5 grid-rows-1'>
            <div className='[ Socials ][ Mail ] self-center justify-self-center'>
              <a href={data.socials.mail}>
                <FaEnvelopeOpen
                  className='hover:text-red-400'
                  title='Get in touch by Email'
                />
              </a>
            </div>
            <div className='[ Socials ][ Spotify ] self-center justify-self-center'>
              <a href={data.socials.spotify} target='_blank'>
                <FaSpotify
                  className='hover:text-green-500'
                  title='Follow me on Spotify'
                />
              </a>
            </div>
            <div className='[ Socials ][ GitHub ] self-center justify-self-center'>
              <a href={data.socials.github} target='_blank'>
                <FaGithub
                  className='hover:text-gray-900'
                  title='Check out my GitHub'
                />
              </a>
            </div>
            <div className='[ Socials ][ LinkedIn ] self-center justify-self-center'>
              <a href={data.socials.linkedin} target='_blank'>
                <FaLinkedinIn
                  className='hover:text-blue-800'
                  title='Follow me on LinkedIn'
                />
              </a>
            </div>
            <div className='[ Socials ][ Twitter ] self-center justify-self-center'>
              <a href={data.socials.twitter} target='_blank'>
                <FaTwitter
                  className='hover:text-blue-500'
                  title='Follow me on Twitter'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

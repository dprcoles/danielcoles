import {
  FaEnvelopeOpen,
  FaSpotify,
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa'
import { footerData } from './footerData'

export default function footer() {
  return (
    <footer className='[ Footer ]'>
      <div className='container mx-auto p-5 text-dc-grey'>
        <div className='grid grid-flow-row grid-cols-6 grid-rows-1 gap-6'>
          <div className='self-center text-left col-span-5'>
            <div className='[ Footer__Text ] font-mono text-lg font-semibold'>
              Designed and developed by{' '}
              <a
                className='[ Footer__Text ][ Footer__Link ] text-yellow-500 hover:text-yellow-300'
                href={footerData.developedBy.link}
                target='_blank'
                rel='noreferrer'
              >
                {footerData.developedBy.name}
              </a>
            </div>
            <div className='[ Footer__Text ] font-mono text-lg font-semibold'>
              Built in{' '}
              <a
                className='[ Footer__Text ][ Footer__Link ] text-pink-500 hover:text-pink-300'
                href={footerData.builtIn.link}
                target='_blank'
                rel='noreferrer'
              >
                {footerData.builtIn.name}
              </a>
              . Hosted on{' '}
              <a
                className='[ Footer__Text ][ Footer__Link ] text-green-500 hover:text-green-300'
                href={footerData.hostedOn.link}
                target='_blank'
                rel='noreferrer'
              >
                {footerData.hostedOn.name}
              </a>
            </div>
            <div className='[ Footer__Text ] font-mono text-lg font-semibold'>
              Inspired by{' '}
              <a
                className='[ Footer__Text ][ Footer__Link ] text-indigo-500 hover:text-indigo-300'
                href={footerData.inspiredBy.link}
                target='_blank'
                rel='noreferrer'
              >
                {footerData.inspiredBy.name}
              </a>
            </div>
          </div>
          <div className='grid grid-flow-row grid-cols-5 grid-rows-1'>
            <div className='[ Socials ][ Mail ] self-center justify-self-center'>
              <a href={footerData.socials.mail} rel='noreferrer'>
                <FaEnvelopeOpen
                  className='hover:text-red-400'
                  title='Get in touch by Email'
                />
              </a>
            </div>
            <div className='[ Socials ][ Spotify ] self-center justify-self-center'>
              <a
                href={footerData.socials.spotify}
                target='_blank'
                rel='noreferrer'
              >
                <FaSpotify
                  className='hover:text-green-500'
                  title='Follow me on Spotify'
                />
              </a>
            </div>
            <div className='[ Socials ][ GitHub ] self-center justify-self-center'>
              <a
                href={footerData.socials.github}
                target='_blank'
                rel='noreferrer'
              >
                <FaGithub
                  className='hover:text-gray-900'
                  title='Check out my GitHub'
                />
              </a>
            </div>
            <div className='[ Socials ][ LinkedIn ] self-center justify-self-center'>
              <a
                href={footerData.socials.linkedin}
                target='_blank'
                rel='noreferrer'
              >
                <FaLinkedinIn
                  className='hover:text-blue-800'
                  title='Follow me on LinkedIn'
                />
              </a>
            </div>
            <div className='[ Socials ][ Twitter ] self-center justify-self-center'>
              <a
                href={footerData.socials.twitter}
                target='_blank'
                rel='noreferrer'
              >
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

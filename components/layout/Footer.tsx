import React from "react"
import { FaEnvelopeOpen, FaGithub, FaLinkedinIn, FaSpotify, FaTwitter } from "react-icons/fa"

const Footer: React.FC = () => {
  return (
    <div className="[ Footer ] max-w-4xl mx-auto mt-16">
      <div className="border-t-2 border-gray-200 dark:border-gray-700">
        <div className="container p-2">
          <div className="flex justify-between space-x-4 item-center">
            <div>
              Built with{" "}
              <a
                className="font-bold hover:text-rose-300 dark:hover:text-violet-500"
                href="https://nextjs.org/"
                target="_blank"
                rel="noreferrer"
              >
                Next.js
              </a>{" "}
              and{" "}
              <a
                className="font-bold hover:text-rose-300 dark:hover:text-violet-500"
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer"
              >
                Tailwind
              </a>
              . Hosted on{" "}
              <a
                className="font-bold hover:text-rose-300 dark:hover:text-violet-500"
                href="https://vercel.com/"
                target="_blank"
                rel="noreferrer"
              >
                ▲ Vercel
              </a>
            </div>
            <div className="ml-auto flex space-x-4">
              <a href="mailto:me@danielcoles.co.uk" rel="noreferrer">
                <div className="p-2 hover:text-red-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                  <FaEnvelopeOpen title="Get in touch by Email" />
                </div>
              </a>
              <a href="https://open.spotify.com/user/icolesyy" target="_blank" rel="noreferrer">
                <div className="p-2 hover:text-green-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                  <FaSpotify title="Follow me on Spotify" />
                </div>
              </a>
              <a href="https://github.com/dcolesDEV" target="_blank" rel="noreferrer">
                <div className="p-2 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                  <FaGithub title="Check out my GitHub" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/danielcoles/" target="_blank" rel="noreferrer">
                <div className="p-2 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                  <FaLinkedinIn title="Follow me on LinkedIn" />
                </div>
              </a>
              <a href="https://twitter.com/_danielcoles" target="_blank" rel="noreferrer">
                <div className="p-2 hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                  <FaTwitter title="Follow me on Twitter" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

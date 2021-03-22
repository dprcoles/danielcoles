import React from 'react'
import gsap, { CustomEase, CustomWiggle } from 'gsap'

export default function minime() {
  //Reference: https://www.cassie.codes/posts/making-a-lil-me-part-2/

  gsap.config({
    nullTargetWarn: false,
  })
  ;(function () {
    if (typeof window !== 'undefined') {
      const safeToAnimate = window.matchMedia(
        '(prefers-reduced-motion: no-preference)'
      ).matches
      if (!safeToAnimate) return

      const dom = {
        face: document.querySelector('.face'),
        eye: document.querySelectorAll('.eye'),
        innerFace: document.querySelector('.inner-face'),
        hairFront: document.querySelector('.hair-front'),
        hairBack: document.querySelector('.hair-back'),
        ear: document.querySelectorAll('.ear'),
        eyebrowLeft: document.querySelector('.eyebrow-left'),
        eyebrowRight: document.querySelector('.eyebrow-right'),
        screenLog: document.querySelector('.screen-log'),
      }

      let xPosition
      let yPosition

      let storedXPosition
      let storedYPosition

      let mapWidth
      let mapHeight

      function setMaps() {
        mapWidth = gsap.utils.mapRange(0, innerWidth, -50, 50)
        mapHeight = gsap.utils.mapRange(0, innerHeight, -50, 50)
      }

      window.addEventListener('resize', setMaps)
      setMaps()

      function moveSVG() {
        if (storedXPosition === xPosition && storedYPosition === yPosition)
          return

        let x = xPosition
        let y = yPosition

        if (xPosition && yPosition) {
          dom.screenLog.innerHTML = `
          <p> x: ${Math.round(x)}</p>
          <p> y: ${Math.round(y)} </p>`
        }

        gsap.to(dom.face, {
          yPercent: y / 30,
          xPercent: x / 30,
        })
        gsap.to(dom.eye, {
          yPercent: y / 3,
          xPercent: x / 2,
        })
        gsap.to(dom.innerFace, {
          yPercent: y / 6,
          xPercent: x / 6,
        })
        gsap.to(dom.hairFront, {
          yPercent: y / 15,
          xPercent: x / 22,
        })
        gsap.to(dom.hairBack, {
          yPercent: (y / 20) * -1,
          xPercent: (x / 20) * -1,
        })
        gsap.to(dom.ear, {
          yPercent: (y / 1.5) * -1,
          xPercent: (x / 10) * -1,
        })
        gsap.to([dom.eyebrowLeft, dom.eyebrowRight], {
          yPercent: y * 2.5,
        })

        storedXPosition = xPosition
        storedYPosition = yPosition
      }

      gsap.ticker.add(moveSVG)

      function updateMouseCoords(event) {
        xPosition = mapWidth(event.clientX)
        yPosition = mapHeight(event.clientY)
      }
      window.addEventListener('mousemove', updateMouseCoords)
    }
  })()

  return (
    <div>
      <svg
        width='100%'
        height='100%'
        viewBox='0 0 250 250'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <clipPath id='background-clip'>
          <path
            className='background'
            d='M199 128.05C199 170.852 152.306 173 108.24 173C64.1739 173 10 170.852 10 128.05C10 85.2479 64.1739 18 108.24 18C152.306 18 199 85.2479 199 128.05Z'
            fill='#FF0000'
          />
        </clipPath>
        <g clipPath='url(#background-clip)' className='miniMe'>
          <path
            className='bg background-splash'
            d='M199 134.14C199 171.143 152.306 173 108.24 173C64.1739 173 10 171.143 10 134.14C10 97.1369 64.1739 39 108.24 39C152.306 39 199 97.1369 199 134.14Z'
            fill='#404040'
          />
          <g className='me'>
            <path
              className='hair-back'
              d='M76.4947 50.9834C74.9198 61.9138 77.479 74.9695 78.9555 80.1311H139.49C140.802 72.8442 143.033 57.1773 141.458 52.8052C139.883 48.433 137.521 47.9472 136.537 48.2508C117.179 44.6074 78.0696 40.0531 76.4947 50.9834Z'
              fill='#B5AA9A'
            />
            <g className='ear-left ear'>
              <path
                id='Vector'
                d='M67 81.1861C67.0193 82.6635 67.2551 84.1209 67.6935 85.4735C68.132 86.8262 68.7645 88.047 69.5541 89.065C70.3437 90.083 71.2747 90.8778 72.2929 91.4031C73.3111 91.9284 74.3962 92.1738 75.485 92.125C77.685 92.18 79.8124 91.057 81.4062 88.9993C83 86.9416 83.9319 84.1149 84 81.1318C83.9861 79.6462 83.7532 78.1795 83.3152 76.8178C82.8772 75.4561 82.2429 74.2269 81.4495 73.2026C80.6561 72.1783 79.7197 71.3796 78.6954 70.8534C77.6711 70.3272 76.5796 70.0841 75.485 70.1386C73.2834 70.0947 71.1578 71.2299 69.5694 73.2981C67.9809 75.3663 67.0577 78.2005 67 81.1861Z'
                fill='#EDE3D1'
              />
              <path
                className='Vector_2'
                d='M71.54 83.6111C72.9316 83.5777 74.322 83.7154 75.68 84.0211C76.75 84.3311 77.62 85.0211 78.68 85.3311C78.7537 85.3485 78.8308 85.3441 78.902 85.3184C78.9732 85.2927 79.0354 85.2468 79.081 85.1864C79.1266 85.126 79.1536 85.0536 79.1588 84.9781C79.1639 84.9025 79.147 84.8271 79.11 84.7611C77.96 82.3811 73.62 82.9011 71.53 83.0911C71.461 83.0911 71.3949 83.1185 71.3462 83.1672C71.2974 83.216 71.27 83.2821 71.27 83.3511C71.27 83.42 71.2974 83.4862 71.3462 83.5349C71.3949 83.5837 71.461 83.6111 71.53 83.6111H71.54Z'
                fill='#B5AA9A'
              />
            </g>
            <g className='ear-right ear'>
              <path
                id='Vector_3'
                d='M151 81.1589C150.982 82.6281 150.749 84.0779 150.315 85.4251C149.881 86.7724 149.254 87.9906 148.471 89.0098C147.688 90.029 146.764 90.8292 145.751 91.3644C144.738 91.8996 143.658 92.1593 142.571 92.1286C140.355 92.1873 138.213 91.0623 136.608 88.9981C135.003 86.9339 134.066 84.0972 134 81.1045C134.02 79.63 134.255 78.1754 134.693 76.8244C135.13 75.4735 135.761 74.2529 136.549 73.2332C137.338 72.2134 138.268 71.4146 139.285 70.8828C140.303 70.3511 141.389 70.0968 142.48 70.1348C144.686 70.0942 146.816 71.2272 148.41 73.2895C150.004 75.3519 150.934 78.1782 151 81.1589Z'
                fill='#EDE3D1'
              />
              <path
                id='Vector_4'
                d='M146.6 83.1311C144.5 82.9411 140.17 82.4111 139.01 84.8011C138.972 84.868 138.954 84.9446 138.96 85.0215C138.965 85.0983 138.993 85.1718 139.04 85.2328C139.087 85.2937 139.151 85.3394 139.224 85.364C139.297 85.3886 139.376 85.3911 139.45 85.3711C140.52 85.1111 141.37 84.3711 142.45 84.0611C143.812 83.7596 145.205 83.6219 146.6 83.6511C146.669 83.6511 146.735 83.6237 146.784 83.5749C146.833 83.5262 146.86 83.46 146.86 83.3911C146.86 83.3221 146.833 83.256 146.784 83.2072C146.735 83.1585 146.669 83.1311 146.6 83.1311Z'
                fill='#B5AA9A'
              />
            </g>
            <g className='body'>
              <path
                className='skin'
                d='M118.606 133.359V119.359C118.646 118.123 118.438 116.892 117.993 115.738C117.549 114.585 116.876 113.533 116.017 112.644C115.157 111.756 114.127 111.049 112.989 110.566C111.851 110.084 110.627 109.835 109.391 109.835C108.154 109.835 106.931 110.084 105.792 110.566C104.654 111.049 103.624 111.756 102.765 112.644C101.905 113.533 101.233 114.585 100.788 115.738C100.343 116.892 100.135 118.123 100.176 119.359V133.359C84.9057 136.199 75.4357 148.439 75.4357 160.689H143.346C143.346 148.449 133.846 136.199 118.606 133.359Z'
                fill='#EDE3D1'
              />
              <rect
                className='chest'
                x='100'
                y='141'
                width='19'
                height='32'
                fill='#262528'
              />
              <path
                className='shoulder-right'
                d='M118 133C148.5 133 148 152.502 148 173H118V133Z'
                fill='#262528'
              />
              <path
                className='shoulder-left'
                d='M100.001 133C69.5005 133 70.0005 152.502 70.0005 173H100.001V133Z'
                fill='#262528'
              />
              <g className='logo'>
                <path
                  d='M126.167 154.631C126.167 152.131 123.389 152.131 122 152.131C122.556 152.215 123.667 152.829 123.667 154.615C123.667 156.402 122.556 157.037 122 157.131C123.389 157.131 126.167 157.131 126.167 154.631Z'
                  fill='white'
                />
                <path
                  d='M126.167 154.631C126.167 152.131 128.944 152.131 130.333 152.131C129.5 152.215 127.833 152.829 127.833 154.615C127.833 156.402 129.5 157.037 130.333 157.131C128.944 157.131 126.167 157.131 126.167 154.631Z'
                  fill='white'
                />
              </g>
              <g className='hood'>
                <path
                  d='M96.552 126C90.4845 132.484 103.833 149.225 108.687 145.453C113.541 141.68 103.907 129.93 96.552 126Z'
                  fill='#262528'
                />
                <path
                  d='M121.448 126C127.516 132.484 114.167 149.225 109.313 145.453C104.459 141.68 114.093 129.93 121.448 126Z'
                  fill='#262528'
                />
              </g>
              <circle
                className='stringhole-left'
                cx='106'
                cy='140.131'
                r='1'
                fill='#2C2C2C'
                stroke='#505050'
              />
              <circle
                className='stringhole-right'
                cx='112'
                cy='140.131'
                r='1'
                fill='#2C2C2C'
                stroke='#505050'
              />
              <path
                className='string'
                d='M106 140.131V155.131M112 140.131V155.131'
                stroke='#2C2C2C'
              />
              <path
                className='neck'
                d='M100.166 112.559H118.576V126.869C118.576 126.869 108.076 132.409 100.166 126.869V112.559Z'
                fill='#EFCEB9'
              />
            </g>
            <g className='face'>
              <path
                className='head'
                d='M78.3356 92.8589C78.3356 107.262 87.5 109.631 103.5 118.939L106 119.631L109 120.131L112 119.631L114.5 118.939C132 109.131 139.876 107.262 139.876 92.8589V64.5289C139.876 50.1253 128.199 38.4489 113.796 38.4489H104.416C90.012 38.4489 78.3356 50.1253 78.3356 64.5289V92.8589Z'
                fill='#EDE3D1'
              />
              <g className='inner-face'>
                <path
                  className='eyebrow-right'
                  d='M124.887 69.9617C123.825 69.0291 122.558 68.3598 121.189 68.0079C119.776 67.7133 118.314 67.7347 116.91 68.0705'
                  stroke='#B5AA9A'
                  strokeWidth='1.04'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  className='eyebrow-left'
                  d='M101.489 68.7108C100.14 68.3336 98.725 68.2584 97.3438 68.4904C95.9332 68.7668 94.5936 69.3277 93.4069 70.139'
                  stroke='#B5AA9A'
                  strokeWidth='1.04'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  className='mouth'
                  d='M101.319 97.8694C101.319 97.8694 108.477 102.337 115.35 99.1587'
                  stroke='#B5AA9A'
                  strokeWidth='1.04'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <g className='eyes'>
                  <path
                    className='eye-left eye'
                    d='M93.8257 77.5689C93.7557 79.6489 95.0757 81.3689 96.7657 81.4189C98.4557 81.4689 99.8657 79.8289 99.9257 77.7489C99.9857 75.6689 98.6757 73.9489 96.9857 73.8989C95.2957 73.8489 93.8857 75.4889 93.8257 77.5689Z'
                    fill='#2B343B'
                  />
                  <path
                    className='eye-right eye'
                    d='M118.016 77.5689C117.946 79.6489 119.266 81.3689 120.956 81.4189C122.646 81.4689 124.056 79.8289 124.116 77.7489C124.176 75.6689 122.866 73.9489 121.176 73.8989C119.486 73.8489 118.076 75.4889 118.016 77.5689Z'
                    fill='#2B343B'
                  />
                </g>
                <path
                  className='nose'
                  d='M106.736 88.3289C106.736 88.3289 109.826 89.8789 112.516 88.3289'
                  stroke='#E0D5C1'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  className='blemish-left'
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M94.2457 91.3689C93.6363 91.2494 93.0879 90.9203 92.6957 90.4389C92.3446 90.0083 92.0942 89.5047 91.9627 88.9649C91.8312 88.4251 91.822 87.8627 91.9357 87.3189C92.096 86.7064 92.4461 86.1604 92.9357 85.7589C93.3326 85.4473 93.8327 85.2973 94.3357 85.3389C94.9961 85.4484 95.601 85.7756 96.054 86.2685C96.507 86.7613 96.7822 87.3916 96.8357 88.0589C96.8454 88.1286 96.8454 88.1993 96.8357 88.2689C96.9159 88.5654 96.953 88.8719 96.9457 89.1789C96.9794 89.7017 96.8166 90.2182 96.4891 90.6271C96.1617 91.036 95.6932 91.3077 95.1757 91.3889C94.8682 91.4529 94.5501 91.4461 94.2457 91.3689ZM93.6857 89.1989V89.1489C93.6857 89.1489 93.6457 89.1989 93.6857 89.1989Z'
                  fill='#F2D5C8'
                />
                <path
                  className='blemish-right'
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M123.276 91.3889C122.761 91.3101 122.294 91.0418 121.967 90.6367C121.639 90.2316 121.475 89.7189 121.506 89.1989C121.5 88.8926 121.534 88.5867 121.606 88.2889V88.0789C121.66 87.4102 121.936 86.7788 122.391 86.2857C122.846 85.7926 123.453 85.4663 124.116 85.3589C124.619 85.3173 125.119 85.4673 125.516 85.7789C126.005 86.1804 126.355 86.7264 126.516 87.3389C126.629 87.8827 126.62 88.4451 126.489 88.9849C126.357 89.5247 126.107 90.0283 125.756 90.4589C125.363 90.9403 124.815 91.2694 124.206 91.3889C123.9 91.4591 123.582 91.4591 123.276 91.3889ZM124.806 89.1889V89.2389C124.806 89.2889 124.856 89.1989 124.806 89.1989V89.1889Z'
                  fill='#F2D5C8'
                />
              </g>
              <path
                className='hair-front'
                d='M141.969 40.1311C144.5 43.1311 146 47.1311 141 52.1311C126.5 65.1311 99 44.6311 82 60.1311C69.0947 71.8977 74.3724 38.6146 79 33.6311C85.5 26.6311 97.5 23.6311 110.5 28.1311C128.084 34.2179 139.011 36.6259 141.969 40.1311Z'
                fill='url(#paint0_linear)'
              />
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            id='paint0_linear'
            x1='176.5'
            y1='42.6308'
            x2='16'
            y2='43.1308'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.0885417' stopColor='#FAF0C8' />
            <stop offset='0.307292' stopColor='#C2B599' />
            <stop offset='0.494792' stopColor='#998977' />
            <stop offset='0.671875' stopColor='#806F62' />
            <stop offset='0.833333' stopColor='#77655A' />
            <stop offset='1' stopColor='#77655A' />
          </linearGradient>
        </defs>
      </svg>
      <div className='screen-log'>transform: translate(0,0)</div>
    </div>
  )
}

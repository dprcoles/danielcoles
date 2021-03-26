import React from 'react'
import gsap from 'gsap'

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
        face: document.querySelector('.Face'),
        eye: document.querySelectorAll('.Eye'),
        innerFace: document.querySelector('.Face__Inner'),
        hairFront: document.querySelector('.Hair__Front'),
        hairBack: document.querySelector('.Hair__Back'),
        ear: document.querySelectorAll('.Ear'),
        eyebrowLeft: document.querySelector('.Eyebrow__Left'),
        eyebrowRight: document.querySelector('.Eyebrow__Right'),
        screenLog: document.querySelector('.ScreenLogger'),
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
          yPercent: (y / 10) * -1,
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
        viewBox='0 0 1289 1124'
        fill='none'
        className='p-2'
        xmlns='http://www.w3.org/2000/svg'
      >
        <clipPath id='BackgroundClip'>
          <path
            className='[ BackgroundClip ]'
            d='M1117.51 728.462C1117.51 971.958 855.298 984.178 607.838 984.178C360.378 984.178 56.1564 971.958 56.1564 728.462C56.1564 484.966 360.378 102.4 607.838 102.4C855.298 102.4 1117.51 484.966 1117.51 728.462Z'
          />
        </clipPath>
        <g id='MiniMe' clipPath='url(#BackgroundClip)'>
          <path
            className='[ BackgroundSplash ]'
            d='M1117.51 763.107C1117.51 973.613 855.298 984.177 607.838 984.177C360.378 984.177 56.1564 973.613 56.1564 763.107C56.1564 552.601 360.378 221.867 607.838 221.867C855.298 221.867 1117.51 552.601 1117.51 763.107Z'
            fill='#404040'
          />
          <path
            className='[ Hair__Back ]'
            d='M429.567 290.039C420.723 352.221 435.095 426.493 443.386 455.857H783.325C790.695 414.402 803.224 325.275 794.38 300.403C785.536 275.53 772.27 272.766 766.742 274.494C658.036 253.767 438.411 227.858 429.567 290.039Z'
            fill='#B5AA9A'
          />
          <g className='[ Me ]'>
            <g className='[ Ear ][ Right__Ear ]'>
              <path
                id='Vector'
                d='M376.248 461.858C376.357 470.263 377.681 478.554 380.143 486.249C382.605 493.944 386.157 500.89 390.591 506.681C395.025 512.472 400.254 516.993 405.972 519.982C411.689 522.971 417.783 524.367 423.897 524.089C436.252 524.402 448.198 518.013 457.149 506.307C466.099 494.601 471.332 478.52 471.715 461.55C471.636 453.098 470.329 444.754 467.869 437.008C465.409 429.261 461.847 422.269 457.392 416.441C452.936 410.614 447.678 406.07 441.926 403.077C436.174 400.083 430.044 398.701 423.897 399.01C411.534 398.761 399.597 405.219 390.677 416.985C381.757 428.75 376.572 444.874 376.248 461.858Z'
                fill='#EDE3D1'
              />
              <path
                id='Vector_2'
                d='M401.743 475.654C409.558 475.464 417.366 476.248 424.992 477.986C431.001 479.75 435.886 483.675 441.839 485.438C442.253 485.537 442.686 485.512 443.086 485.366C443.485 485.22 443.835 484.959 444.091 484.615C444.347 484.272 444.498 483.86 444.527 483.43C444.556 483.001 444.461 482.572 444.254 482.196C437.796 468.657 413.424 471.615 401.687 472.696C401.3 472.696 400.929 472.852 400.655 473.129C400.381 473.407 400.227 473.783 400.227 474.175C400.227 474.567 400.381 474.943 400.655 475.221C400.929 475.498 401.3 475.654 401.687 475.654H401.743Z'
                fill='#B5AA9A'
              />
            </g>
            <g className='[ Ear ][ Left__Ear ]'>
              <path
                id='Vector_3'
                d='M847.963 461.704C847.86 470.062 846.552 478.31 844.115 485.974C841.678 493.638 838.16 500.569 833.762 506.367C829.363 512.165 824.172 516.717 818.486 519.762C812.8 522.807 806.73 524.284 800.626 524.11C788.186 524.444 776.153 518.044 767.141 506.3C758.13 494.557 752.867 478.42 752.497 461.394C752.607 453.006 753.928 444.731 756.385 437.045C758.843 429.36 762.387 422.416 766.814 416.615C771.24 410.814 776.462 406.27 782.178 403.244C787.894 400.219 793.991 398.773 800.117 398.989C812.507 398.758 824.468 405.204 833.418 416.936C842.369 428.668 847.593 444.747 847.963 461.704Z'
                fill='#EDE3D1'
              />
              <path
                id='Vector_4'
                d='M823.253 472.924C811.46 471.843 787.144 468.828 780.63 482.424C780.416 482.804 780.317 483.241 780.347 483.678C780.377 484.115 780.534 484.533 780.798 484.88C781.063 485.226 781.422 485.486 781.832 485.626C782.242 485.766 782.683 485.78 783.101 485.666C789.11 484.187 793.883 479.978 799.948 478.214C807.597 476.499 815.421 475.716 823.253 475.882C823.64 475.882 824.011 475.726 824.285 475.449C824.559 475.171 824.713 474.795 824.713 474.403C824.713 474.01 824.559 473.634 824.285 473.357C824.011 473.079 823.64 472.924 823.253 472.924Z'
                fill='#B5AA9A'
              />
            </g>
            <g className='[ Body ]'>
              <path
                id='skin'
                d='M666.047 758.664V679.019C666.276 671.99 665.106 664.985 662.609 658.423C660.111 651.86 656.336 645.874 651.508 640.819C646.68 635.765 640.898 631.745 634.506 629C628.114 626.255 621.242 624.841 614.299 624.841C607.356 624.841 600.484 626.255 594.092 629C587.7 631.745 581.918 635.765 577.09 640.819C572.262 645.874 568.487 651.86 565.989 658.423C563.492 664.985 562.322 671.99 562.551 679.019V758.664C476.8 774.82 423.62 844.452 423.62 914.141H804.978C804.978 844.509 751.63 774.82 666.047 758.664Z'
                fill='#E8DDCB'
              />
              <rect
                id='chest'
                x='561.565'
                y='802.134'
                width='106.697'
                height='182.045'
                fill='#262528'
              />
              <path
                className='shoulder-right'
                d='M662.646 756.622C833.922 756.622 831.115 867.57 831.115 984.178H662.646V756.622Z'
                fill='#262528'
              />
              <path
                className='shoulder-left'
                d='M567.179 756.622C390.196 756.622 393.098 867.57 393.098 984.178H567.179V756.622Z'
                fill='#262528'
              />
              <g className='logo'>
                <path
                  d='M708.507 879.68C708.507 865.458 692.908 865.458 685.109 865.458C688.228 865.935 694.468 869.429 694.468 879.591C694.468 889.752 688.228 893.366 685.109 893.902C692.908 893.902 708.507 893.902 708.507 879.68Z'
                  fill='white'
                />
                <path
                  d='M708.507 879.68C708.507 865.458 724.106 865.458 731.905 865.458C727.226 865.935 717.866 869.429 717.866 879.591C717.866 889.752 727.226 893.366 731.905 893.902C724.106 893.902 708.507 893.902 708.507 879.68Z'
                  fill='white'
                />
              </g>
              <g className='hood'>
                <path
                  d='M542.201 716.801C508.128 753.689 583.089 848.927 610.348 827.465C637.607 806.002 583.502 739.157 542.201 716.801Z'
                  fill='#262528'
                />
                <path
                  d='M682.008 716.801C716.082 753.689 641.12 848.927 613.862 827.465C586.603 806.002 640.707 739.157 682.008 716.801Z'
                  fill='#262528'
                />
              </g>
              <ellipse
                className='stringhole-left'
                cx='595.258'
                cy='797.191'
                rx='5.61594'
                ry='5.68903'
                fill='#2C2C2C'
                stroke='#505050'
              />
              <ellipse
                className='stringhole-right'
                cx='628.952'
                cy='797.191'
                rx='5.61566'
                ry='5.68903'
                fill='#2C2C2C'
                stroke='#505050'
              />
              <path
                className='string'
                d='M595.258 797.191V882.525M628.952 797.191V882.525'
                stroke='#2C2C2C'
              />
              <path
                className='neck'
                d='M562.495 640.336H665.879V721.743C665.879 721.743 606.915 753.26 562.495 721.743V640.336Z'
                fill='#E8DDCB'
              />
            </g>
            <g className='[ Face__Full ]'>
              <path
                className='[ Face ]'
                d='M439.905 528.264C439.905 610.204 491.369 623.679 581.219 676.63L595.258 680.568L612.105 683.412L628.952 680.568L642.991 676.63C741.264 620.834 785.491 610.204 785.491 528.264V367.097C785.491 285.157 719.92 218.731 639.035 218.731H586.361C505.475 218.731 439.905 285.157 439.905 367.097L439.905 528.264Z'
                fill='#EDE3D1'
              />
              <g className='[ Face__Inner ]'>
                <path
                  className='[ Eyebrow__Right ]'
                  d='M701.318 398.004C695.354 392.699 688.241 388.891 680.554 386.889C672.617 385.213 664.412 385.335 656.526 387.245'
                  stroke='#B5AA9A'
                  strokeWidth='4'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  className='[ Eyebrow__Left ]'
                  d='M569.927 390.888C562.353 388.742 554.404 388.314 546.648 389.634C538.726 391.207 531.203 394.398 524.539 399.013'
                  stroke='#B5AA9A'
                  strokeWidth='4'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  className='[ Mouth ]'
                  d='M568.973 556.768C568.973 556.768 609.167 582.184 647.765 564.103'
                  stroke='#B5AA9A'
                  strokeWidth='4'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <g className='[ Eyes ]'>
                  <path
                    id='[ Eye__Left ][ Eye ]'
                    d='M526.892 441.281C526.498 453.114 533.911 462.899 543.401 463.183C552.892 463.468 560.81 454.138 561.147 442.305C561.484 430.473 554.127 420.688 544.637 420.403C535.147 420.119 527.229 429.449 526.892 441.281Z'
                    fill='#2B343B'
                  />
                  <path
                    id='[ Eye__Right ][ Eye ]'
                    d='M662.734 441.281C662.341 453.114 669.753 462.899 679.244 463.183C688.734 463.468 696.652 454.138 696.989 442.305C697.326 430.473 689.97 420.688 680.479 420.403C670.989 420.119 663.071 429.449 662.734 441.281Z'
                    fill='#2B343B'
                  />
                </g>
                <path
                  className='nose'
                  d='M599.389 502.494C599.389 502.494 616.742 511.311 631.848 502.494'
                  stroke='#E0D5C1'
                  strokeWidth='4'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  className='blemish-left'
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M529.25 519.788C525.828 519.107 522.748 517.236 520.546 514.497C518.574 512.047 517.168 509.182 516.43 506.111C515.691 503.04 515.639 499.841 516.278 496.747C517.178 493.263 519.144 490.156 521.893 487.873C524.122 486.1 526.931 485.246 529.755 485.483C533.464 486.106 536.861 487.967 539.405 490.771C541.949 493.575 543.494 497.161 543.794 500.957C543.849 501.354 543.849 501.756 543.794 502.152C544.245 503.838 544.453 505.582 544.412 507.329C544.601 510.303 543.687 513.241 541.848 515.567C540.009 517.893 537.378 519.439 534.472 519.901C532.745 520.265 530.959 520.226 529.25 519.788ZM526.105 507.443V507.158C526.105 507.158 525.88 507.443 526.105 507.443Z'
                  fill='#F2D5C8'
                />
                <path
                  className='blemish-right'
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M692.272 519.901C689.381 519.453 686.759 517.927 684.92 515.622C683.082 513.318 682.159 510.401 682.332 507.443C682.3 505.7 682.489 503.96 682.894 502.266V501.071C683.197 497.267 684.75 493.675 687.305 490.87C689.86 488.065 693.27 486.208 696.989 485.597C699.814 485.36 702.622 486.214 704.851 487.986C707.601 490.27 709.566 493.377 710.467 496.861C711.105 499.955 711.053 503.154 710.315 506.225C709.577 509.296 708.17 512.161 706.199 514.611C703.996 517.35 700.917 519.221 697.495 519.901C695.776 520.301 693.991 520.301 692.272 519.901ZM700.864 507.386V507.67C700.864 507.955 701.145 507.443 700.864 507.443V507.386Z'
                  fill='#F2D5C8'
                />
              </g>
              <path
                className='[ Hair__Front ]'
                d='M797.246 228.301C811.46 245.368 819.883 268.123 791.805 296.568C710.378 370.523 555.948 253.901 460.482 342.079C388.011 409.017 417.649 219.674 443.635 191.323C480.137 151.501 547.525 134.435 620.528 160.035C719.274 194.662 780.638 208.36 797.246 228.301Z'
                fill='url(#paint0_linear)'
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            id='filter0_d'
            x='372.248'
            y='147.911'
            width='479.714'
            height='844.268'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood flood-opacity='0' result='BackgroundImageFix' />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            />
            <feOffset dy='4' />
            <feGaussianBlur stdDeviation='2' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
            />
            <feBlend
              mode='normal'
              in2='BackgroundImageFix'
              result='effect1_dropShadow'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_dropShadow'
              result='shape'
            />
          </filter>
          <linearGradient
            id='paint0_linear'
            x1='991.161'
            y1='242.522'
            x2='89.8498'
            y2='245.293'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.0885417' stop-color='#FAF0C8' />
            <stop offset='0.307292' stop-color='#C2B599' />
            <stop offset='0.494792' stop-color='#998977' />
            <stop offset='0.671875' stop-color='#806F62' />
            <stop offset='0.833333' stop-color='#77655A' />
            <stop offset='1' stop-color='#77655A' />
          </linearGradient>
        </defs>
      </svg>
      <div className='ScreenLogger'>transform: translate(0,0)</div>
    </div>
  )
}

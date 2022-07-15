import React from 'react';

export const Description = () => {
  return (
    <div id='description'>
      <div className='flex flex-col items-start gap-y-4 text-lg'>
        <h3 className='text-2xl font-semibold'>About This Gig</h3>
        <span className='font-semibold  bg-[#ffecd1]'>
          A logo is a customer's first impression of your brand, and
          it should be unforgettable.
        </span>
        <p>
          Check out our portfolio:
          <span className='bg-[#ffecd1]'>ei8htz.tumblr.com</span>
        </p>
        <p>
          Ei8htz is a team of professional designers experienced in
          creating hand-crafted outstanding logo designs. We’ve helped
          thousands of small to big companies around the world making
          attractive logos that stand out from the crowd.
        </p>
        <p>
          We’ll help you create the best logo that can take your
          business to the next level. We guarantee outstanding service
          for your project.
        </p>
        <ul>
          <h4 className='font-semibold'>What makes us strong!</h4>
          <li>✔ Leading Fiverr logo design service</li>
          <li>✔ Affordable cost</li>
          <li>✔ Top-notch design and high quality work</li>
          <li>✔ Custom design - made from scratch</li>
          <li>✔ Commit to finish project until satisfaction</li>
        </ul>
        <p className='font-semibold  bg-[#ffecd1]'>
          For the same quality as shown in our portfolio please select
          PREMIUM package.
        </p>
        <p>
          <span className='font-semibold  bg-[#ffecd1]'>
            Our expertises:
          </span>
          Versatile | Freestyle | Modern | Minimalist | Geometric | 3d
          | Hand-drawn | Signature | Vintage | Lettering | Watercolor
        </p>
        <div>
          <span className='font-semibold'>Note:</span>
          <p>
            Mascot or illustration is not included in the basic
            package
          </p>
        </div>
        <ul>
          <h4>
            <span className='font-semibold'>Contact us</span> for a
            special offer:
          </h4>
          <li className='font-semibold'>
            <span>• $280 BRANDING PACKAGE:</span>
            logo design + favicon + stationery design + social media
            kit + style guides.
          </li>
          <li className='font-semibold'>
            <span>• $150 LOGO ANIMATION.</span>
          </li>
        </ul>
        <span className='font-semibold'>ORDER NOW!</span>
      </div>
      <div className='flex  mt-10 pt-10 border-t gap-x-20 text-lg'>
        <div className='flex flex-col'>
          <span className='text-[#95979d]'>Style</span>
          <span>Minimalist</span>
        </div>
        <div className='flex flex-col'>
          <span className='text-[#95979d]'>File format</span>
          <span className='w-[180px]'>
            AI JPG PDF PNG PSD EPS SVG
          </span>
        </div>
      </div>
    </div>
  );
};

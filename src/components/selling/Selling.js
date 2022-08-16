import React, { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Modal from "./../modal/Modal";



export default function Selling() {
  const [isOpen, setIsOpen] = useState(false);
  const video = {
    url:
      "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7",
  };
  return (
    <>
      <div className='selling lg:mb-24 sm:mb-20 mt-0 mb-12 bg-[#f1fdf7]'>
        <div className='selling-proposition lg:pt-24 lg:pb-24 sm:px-8 sm:py-12 pt-12 pb-12 container mx-auto lg:px-0 px-6'>
          <div className='selling-items flex flex-initial relative items-center flex-wrap flex-row mx-[-8px] lg:mx-[-16px]'>
            <div className='selling-texts lg:pr-[11%] lg:px-[16px] md:px-2 flex-[0_0_auto] lg:basis-[46.66667%] 
          lg:max-w-[46.66667%]  px-[6px] pb-12 xl:pb-0 lg:pb-0 basis-[100%] max-w-[100%]'>
              <h2 className='lg:pb-6 text-3xl leading-tight font-bold pb-5'>A whole world of freelance talent at your fingertips</h2>
              <ul>
                <li className='lg:pb-6 pb-5'>
                  <h6 className='flex items-start text-lg leading-snug font-bold pb-2'>
                    <AiOutlineCheckCircle className='w-6 h-6 fill-[#7A7D85] mr-2 min-w-6' />
                    The best for every budget
                  </h6>
                  <p className='text-lg leading-6'>
                    Find high-quality services at every price point. No hourly
                    rates, just project-based pricing.
                  </p>
                </li>
                <li className='lg:pb-6 pb-5'>
                  <h6 className='flex items-start text-lg leading-snug font-bold pb-2'>
                    <AiOutlineCheckCircle className='w-6 h-6 fill-[#7A7D85] mr-2 min-w-6' />
                    Quality work done quickly
                  </h6>
                  <p className='text-lg leading-6'>
                    Find the right freelancer to begin working on your project
                    within minutes.
                  </p>
                </li>
                <li className='lg:pb-6 pb-5'>
                  <h6 className='flex items-start text-lg leading-snug font-bold pb-2'>
                    <AiOutlineCheckCircle className='w-6 h-6 fill-[#7A7D85] mr-2 min-w-6' />
                    Protected payments, every time
                  </h6>
                  <p className='text-lg leading-6'>
                    Always know what you'll pay upfront. Your payment isn't
                    released until you approve the work.
                  </p>
                </li>
                <li className='lg:pb-6 pb-5'>
                  <h6 className='flex items-start text-lg leading-snug font-bold pb-2'>
                    <AiOutlineCheckCircle className='w-6 h-6 fill-[#7A7D85] mr-2 min-w-6' />
                    24/7 support
                  </h6>
                  <p className='text-lg leading-6'>
                    Questions? Our round-the-clock support team is available to
                    help anytime, anywhere.
                  </p>
                </li>
              </ul>
            </div>
            <div className='selling-video lg:px-4 md:px-[8px] px-[6px] lg:basis-[53.33333%] 
          lg:max-w-[53.33333%] basis-full max-w-[100%]'>
              <div className='video-modal flex items-center relative lg:justify-end' onClick={() => setIsOpen(true)}>
                <div className='picture-wrapper relative cursor-pointer'>
                  <picture className="flex after:content-[''] after:inline-block after:h-20 after:w-20 after:absolute 
                after:top-[50%] after:bg-selling-size after:left-[50%] after:bg-no-repeat
                after:bg-[url('https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/desktop-play-button.c1196d6.png')] 
                after:translate-x-[-50%] after:translate-y-[-50%]">
                    <source
                      media='(min-width: 1160px)'
                      srcSet='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_2.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 2x'
                    />
                    <source
                      media='(min-width: 900px)'
                      srcSet='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_2.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 2x'
                    />
                    <source
                      media='(min-width: 600px)'
                      srcSet='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_900,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_900,dpr_2.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 2x'
                    />
                    <source
                      media='(min-width: 361px)'
                      srcSet='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_2.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 2x'
                    />
                    <source
                      media='(max-width: 360px)'
                      srcSet='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 2x'
                    />
                    <img className='h-full w-full md:min-h-[472px] lg:min-h-fit'
                      src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png'
                      loading='auto'
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen} data={video.url} />}
    </>
  );
}

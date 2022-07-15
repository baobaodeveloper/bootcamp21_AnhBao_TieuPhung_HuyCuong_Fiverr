import { Tooltip } from 'antd';
import React from 'react';
import { BsFillQuestionCircleFill } from 'react-icons/bs';

export const AboutSellerContent = () => {
  return (
    <div className='border rounded-md text-lg p-8 text-#74767e font-normal'>
      <div className='flex flex-col gap-y-5 '>
        <div className='flex  items-center'>
          <div className='flex flex-1 flex-col gap-y-1'>
            <span>From</span>
            <span className='font-semibold'>Indonesia</span>
          </div>
          <div className='flex flex-1 flex-col gap-y-1'>
            <span>Member since</span>
            <span className='font-semibold'>Oct 2012</span>
          </div>
        </div>
        <div className='flex  items-center'>
          <div className='flex flex-1 flex-col gap-y-1'>
            <span>Avg. response time</span>
            <span className='font-semibold'>5 hours</span>
          </div>
          <div className='flex flex-1 flex-col gap-y-1'>
            <span>Last delivery</span>
            <span className='font-semibold'>about 6 minutes</span>
          </div>
        </div>
      </div>

      <div className='py-6 my-6 border-b border-t flex flex-col gap-y-4'>
        <p>
          Experienced, passionate graphic design team specializing in
          logos, icons, stationery, prints, and branding. Completing
          thousands of projects on Fiverr for a wide variety of
          clients, we ensure nothing but the utmost professionalism
          and quality graphics you can find. Satisfaction is
          guaranteed!
        </p>
        <p>We look forward to working with you 🙂</p>
      </div>

      <div className='flex flex-col gap-y-8'>
        <div className='flex item-center gap-x-3'>
          <h3 className='font-semibold leading-none'>
            Among my clients
          </h3>
          <div>
            <Tooltip
              placement='top'
              title={
                <p>
                  ei8htz listed these companies as important clients
                  theyve worked with.
                </p>
              }
            >
              <div>
                <BsFillQuestionCircleFill className='text-[#92949e]' />
              </div>
            </Tooltip>
          </div>

          <span className='text-sm text-white leading-none bg-[#FF62AD] py-1 px-3 rounded-[20px]'>
            NEW
          </span>
        </div>

        <div>
          <div className='flex items-center'>
            <div className='flex flex-1 gap-x-4 item-center'>
              <img
                className='w-[40px] h-[40px] object-cover'
                src='https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_clients_thumb/v1/attachments/company/logo/4066e462e9cf658830634a2ee7993242-1643199849/61a87d8c84d88e25cd784acd.png'
                alt='Amazon'
              />
              <div className='flex flex-col '>
                <span className='font-semibold text-[15px] leading-none'>
                  Amazone
                </span>
                <span className='text-[16px]'>Warehouse Stores</span>
              </div>
            </div>
            <div className='flex flex-1 gap-x-4 item-center'>
              <img
                className='w-[40px] h-[40px] object-cover '
                src='https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_clients_thumb/v1/attachments/company/logo/a6e4a6e4910ec2a4baa2a4fccedd1874-1643200222/61a87e99f3085f4291c4b980.png'
                alt='Airbnb'
              />
              <div className='flex flex-col '>
                <span className='font-semibold text-[15px] leading-none'>
                  Airbnb
                </span>
                <span className='text-[16px]'>
                  Internet Software & Services
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='flex items-center'>
            <div className='flex flex-1 gap-x-4 item-center'>
              <img
                className='w-[40px] h-[40px] object-cover '
                src='https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_clients_thumb/v1/attachments/company/logo/ac69450c9ac019e876911600dde7dc3e-1643199866/61a87d9284d88e25cd784b31.png'
                alt='Keller Williams'
              />
              <div className='flex flex-col '>
                <span className='font-semibold text-[15px] leading-none'>
                  Keller Williams
                </span>
                <span className='text-[16px]'>Real Estate</span>
              </div>
            </div>
            <div className='flex flex-1 gap-x-4 item-center'>
              <img
                className='w-[40px] h-[40px] object-cover '
                src='https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_clients_thumb/v1/attachments/company/logo/bb7a8a623461aa36ac0340c696ce5f15-1648198136/61b95bb9042f586d82e983a0.png'
                alt='Avondale University'
              />
              <div className='flex flex-col '>
                <span className='font-semibold text-[15px] leading-none'>
                  Avondale University
                </span>
                <span className='text-[16px]'>
                  Education Organization
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

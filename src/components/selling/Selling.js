import React, { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Modal from "./../modal/Modal";

import "./selling.scss";

export default function Selling() {
  const [isOpen, setIsOpen] = useState(false);
  const video = {
    url:
      "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7",
  };
  return (
    <>
      <div className='selling'>
        <div className='selling-proposition'>
          <div className='selling-items'>
            <div className='selling-texts'>
              <h2>A whole world of freelance talent at your fingertips</h2>
              <ul>
                <li>
                  <h6>
                    <AiOutlineCheckCircle className='w-6 h-6 fill-[#7A7D85] mr-2 min-w-6' />
                    The best for every budget
                  </h6>
                  <p>
                    Find high-quality services at every price point. No hourly
                    rates, just project-based pricing.
                  </p>
                </li>
                <li>
                  <h6>
                    <AiOutlineCheckCircle className='w-6 h-6 fill-[#7A7D85] mr-2 min-w-6' />
                    Quality work done quickly
                  </h6>
                  <p>
                    Find the right freelancer to begin working on your project
                    within minutes.
                  </p>
                </li>
                <li>
                  <h6>
                    <AiOutlineCheckCircle className='w-6 h-6 fill-[#7A7D85] mr-2 min-w-6' />
                    Protected payments, every time
                  </h6>
                  <p>
                    Always know what you'll pay upfront. Your payment isn't
                    released until you approve the work.
                  </p>
                </li>
                <li>
                  <h6>
                    <AiOutlineCheckCircle className='w-6 h-6 fill-[#7A7D85] mr-2 min-w-6' />
                    24/7 support
                  </h6>
                  <p>
                    Questions? Our round-the-clock support team is available to
                    help anytime, anywhere.
                  </p>
                </li>
              </ul>
            </div>
            <div className='selling-video'>
              <div className='video-modal' onClick={() => setIsOpen(true)}>
                <div className='picture-wrapper'>
                  <picture>
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
                    <img
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

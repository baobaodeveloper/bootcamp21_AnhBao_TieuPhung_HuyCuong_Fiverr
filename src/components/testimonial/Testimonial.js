import React, { useState } from "react";
import Slider from "react-slick";
import Modal from "./../modal/Modal";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./testimonial.scss";


export default function Testimonial() {
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState('');

  const openModal = (val) => {
    setUrl(val)
    setIsOpen(true);
  };

  const data = [
    {
      name: "Brighid Gannon (DNP, PMHNP-BC), Co-Founder",
      logo: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lavender-logo-x2.89c5e2e.png",
      quote:
        "We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world.",
      img1160:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg 2x",
      img900:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg 2x",
      img600:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_820,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_820,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg 2x",
      img361:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_480,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_480,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg 2x",
      img360:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg 2x",
      img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg",
      video:
        "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/rb8jtakrisiz0xtsffwi",
    },
    {
      name: "Kay Kim, Co-Founder",
      logo: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/rooted-logo-x2.321d79d.png",
      quote:
        "It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working.",
      img1160:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 2x",
      img900:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 2x",
      img600:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_820,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_820,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 2x",
      img361:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_480,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_480,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 2x",
      img360:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 2x",
      img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg",
      video:
        "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/yja2ld5fnolhsixj3xxw",
    },
  ];

  const listItem = data.map((item) => (
    <div key={item.name}>
      <div className='testimonial flex items-center lg:flex-row flex-col'>
        <div
          className='video-modal testimonial-modal lg:w-[40%] w-full min-h-[250px] flex relative items-center'
          onClick={(e) => openModal(item.video)}
        >
          <div className='picture-wrapper relative cursor-pointer'>
            <picture className="lg:flex after:content-[''] after:inline-block after:h-20 
              after:w-20 after:absolute after:top-[50%] after:bg-selling-size 
              after:left-[50%] after:bg-no-repeat
              after:bg-[url('https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/desktop-play-button.c1196d6.png')] 
              after:translate-x-[-50%] after:translate-y-[-50%]">
              <source media='(min-width: 1160px)' srcSet={item.img1160} />
              <source media='(min-width: 900px)' srcSet={item.img900} />
              <source media='(min-width: 600px)' srcSet={item.img600} />
              <source media='(min-width: 361px)' srcSet={item.img361} />
              <source media='(max-width: 360px)' srcSet={item.img360} />
              <img className='h-full w-full rounded md:min-h-[400px] lg:min-h-full' alt='Video teaser image' src={item.img} loading='lazy' />
            </picture>
          </div>
        </div>
        <div className='text-content lg:w-[60%] lg:max-w-[707px] lg:pr-12 lg:pl-16 pt-6 px-0 pb-0 w-full'>
          <h5 className='font-normal text-[#74767e] pb-4 sm:text-xl leading-snug'>
            {item.name}
            <span className='testimonial-logo xl:border-l border-[#c5c6c9] xl:ml-4 h-9 m-0 border-0'>
              <img className='xl:inline-block block xl:ml-3 ml-[-6px] h-8 align-middle' alt='Company logo' src={item.logo} loading='lazy' />
            </span>
          </h5>
          <blockquote className='font-domaine lg:text-3xl text-2xl leading-10 text-[#003912] pb-6 lg:pb-0'>
            <i className='font-medium'>"{item.quote}"</i>
          </blockquote>
        </div>
      </div>
    </div>
  ));

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className='testimonials-wrapper container lg:mb-24 sm:mb-20 mx-auto mb-12 lg:h-[315px] px-6 sm:px-8 md:px-8 lg:px-0'>
        <div className='slider-package'>
          <Slider {...settings}>{listItem}</Slider>
        </div>
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen} data={url} />}
    </>
  );
}

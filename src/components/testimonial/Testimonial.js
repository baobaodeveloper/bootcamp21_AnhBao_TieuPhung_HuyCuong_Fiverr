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
      <div className='testimonial'>
        <div
          className='video-modal testimonial-modal'
          onClick={(e) => openModal(item.video)}
        >
          <div className='picture-wrapper'>
            <picture>
              <source media='(min-width: 1160px)' srcSet={item.img1160} />
              <source media='(min-width: 900px)' srcSet={item.img900} />
              <source media='(min-width: 600px)' srcSet={item.img600} />
              <source media='(min-width: 361px)' srcSet={item.img361} />
              <source media='(max-width: 360px)' srcSet={item.img360} />
              <img alt='Video teaser image' src={item.img} loading='lazy' />
            </picture>
          </div>
        </div>
        <div className='text-content'>
          <h5>
            {item.name}
            <span className='testimonial-logo'>
              <img alt='Company logo' src={item.logo} loading='lazy' />
            </span>
          </h5>
          <blockquote className='font-domaine'>
            <i>"{item.quote}"</i>
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
      <div className='testimonials-wrapper'>
        <div className='slider-package'>
          <Slider {...settings}>{listItem}</Slider>
        </div>
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen} data={url} />}
    </>
  );
}

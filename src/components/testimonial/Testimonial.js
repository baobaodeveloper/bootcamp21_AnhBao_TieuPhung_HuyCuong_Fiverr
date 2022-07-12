import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./testimonial.scss";

export default function Testimonial() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div class='testimonials-wrapper'>
        <div class='slider-package'>
          <Slider {...settings}>
            <div>
              <div class='testimonial'>
                <div class='video-modal testimonial-modal'>
                  <div class='picture-wrapper'>
                    <picture>
                      <source
                        media='(min-width: 1160px)'
                        srcset='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 2x'
                      />
                      <source
                        media='(min-width: 900px)'
                        srcset='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 2x'
                      />
                      <source
                        media='(min-width: 600px)'
                        srcset='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_820,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_820,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 2x'
                      />
                      <source
                        media='(min-width: 361px)'
                        srcset='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_480,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_480,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 2x'
                      />
                      <source
                        media='(max-width: 360px)'
                        srcset='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 2x'
                      />
                      <img
                        alt='Video teaser image'
                        src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg'
                        loading='lazy'
                      />
                    </picture>
                  </div>
                </div>
                <div class='text-content'>
                  <h5>
                    Kay Kim, Co-Founder
                    <span class='testimonial-logo'>
                      <img
                        alt='Company logo'
                        src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/rooted-logo-x2.321d79d.png'
                        loading='lazy'
                      />
                    </span>
                  </h5>
                  <blockquote class='font-domaine'>
                    <i>
                      "It's extremely exciting that Fiverr has freelancers from
                      all over the world — it broadens the talent pool. One of
                      the best things about Fiverr is that while we're sleeping,
                      someone's working."
                    </i>
                  </blockquote>
                </div>
              </div>
            </div>
            
            <div>
              <div class='testimonial'>
                <div class='video-modal testimonial-modal'>
                  <div class='picture-wrapper'>
                    <picture>
                      <source
                        media='(min-width: 1160px)'
                        srcset='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg 2x'
                      />
                      <source
                        media='(min-width: 900px)'
                        srcset='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg 2x'
                      />
                      <source
                        media='(min-width: 600px)'
                        srcset='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_820,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_820,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg 2x'
                      />
                      <source
                        media='(min-width: 361px)'
                        srcset='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_480,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_480,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg 2x'
                      />
                      <source
                        media='(max-width: 360px)'
                        srcset='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg 2x'
                      />
                      <img
                        alt='Video teaser image'
                        src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg'
                        loading='lazy'
                      />
                    </picture>
                  </div>
                </div>
                <div class='text-content'>
                  <h5>
                    Brighid Gannon (DNP, PMHNP-BC), Co-Founder
                    <span class='testimonial-logo'>
                      <img
                        alt='Company logo'
                        src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lavender-logo-x2.89c5e2e.png'
                        loading='lazy'
                      />
                    </span>
                  </h5>
                  <blockquote class='font-domaine'>
                    <i>
                      "We used Fiverr for SEO, our logo, website, copy, animated
                      videos — literally everything. It was like working with a
                      human right next to you versus being across the world."
                    </i>
                  </blockquote>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

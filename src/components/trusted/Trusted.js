import React from "react";

export default function Trusted() {
  return (
    <div
      className="md:mb-20 lg:mb-24 bg-gray-50 mx-auto mt-0 mb-12 w-full"
      >
      <div
        className="py-0 flex justify-center items-center w-full 
      lg:px-0 md:max-w-[1400px] md:mx-auto"
      >
        <span className="sm:block pr-5 text-gray-400 font-semibold text-lg hidden">Trusted by:</span>
        <ul className="lg:h-24 h-16 px-6 py-0 flex justify-center items-center">
          <li className="lg:pr-16 md:pr-6 pr-4">
            <picture className="block min-w-[59px]">
              <source
                media="(max-width: 899px)"
                srcSet="
              https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook.543cf10.png   1x,
              https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.2eb3efa.png 2x
            "
              />
              <source
                media="(min-width: 900px)"
                srcSet="
              https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook.31d5f92.png   1x,
              https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png 2x
            "
              />
              <img className="block"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook.31d5f92.png"
                alt="facebook"
              />
            </picture>
          </li>
          <li className="lg:pr-16 md:pr-6 pr-4">
            <picture className="block min-w-[59px]">
              <source
                media="(max-width: 899px)"
                srcSet="
              https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.aaaa0ad.png   1x,
              https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.b5c24c4.png 2x
            "
              />
              <source
                media="(min-width: 900px)"
                srcSet="
              https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.517da09.png   1x,
              https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png 2x
            "
              />
              <img className="block"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.517da09.png"
                alt="Google"
              />
            </picture>
          </li>
          <li className="lg:pr-16 md:pr-6 pr-4">
            <picture className="block min-w-[59px]">
              <source
                media="(max-width: 899px)"
                srcSet="
              https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.3cb353a.png   1x,
              https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.02746a2.png 2x
            "
              />
              <source
                media="(min-width: 900px)"
                srcSet="
              https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.e3ad953.png   1x,
              https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png 2x
            "
              />
              <img className="block"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.e3ad953.png"
                alt="NETFLIX"
              />
            </picture>
          </li>
          <li className="lg:pr-16 md:pr-6 pr-4">
            <picture className="block min-w-[59px]">
              <source
                media="(max-width: 899px)"
                srcSet="
              https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg.128c0d9.png   1x,
              https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.259884d.png 2x
            "
              />
              <source
                media="(min-width: 900px)"
                srcSet="
              https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg.8b7310b.png   1x,
              https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png 2x
            "
              />
              <img className="block"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg.8b7310b.png"
                alt="P&amp;G"
              />
            </picture>
          </li>
          <li className="lg:pr-16 md:pr-6 pr-4">
            <picture className="block min-w-[59px]">
              <source
                media="(max-width: 899px)"
                srcSet="
              https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.9e4defc.png   1x,
              https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.e48e2b0.png 2x
            "
              />
              <source
                media="(min-width: 900px)"
                srcSet="
              https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.ec56157.png   1x,
              https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png 2x
            "
              />
              <img className="block"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.ec56157.png"
                alt="PayPal"
              />
            </picture>
          </li>
        </ul>
      </div>
    </div>
  );
}

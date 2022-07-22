import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BaseService } from "../../services/baseService";

import "./marketplace.scss";

let typeWorkService = new BaseService();

export default function Marketplace() {
  const [typeWork, setTypeWork] = useState([]);
  console.log(typeWork);
  useEffect(() => {
    typeWorkService
      .get("api/type-jobs")
      .then((res) => {
        console.log("typeWork", res.data);
        setTypeWork(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let typeWorkID = typeWork.map((item) => {
  
    return item._id;
  })

  console.log("typeWorkID", typeWorkID);
  return (
    <div className="marketplace">
      <h2>Explore the marketplace</h2>
      <ul>
        <li>
          <NavLink to={`/list_type/${typeWorkID[0]}`}>
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
              alt="Graphics &amp; Design"
              loading="lazy"
            />
            Graphics &amp; Design
          </NavLink>
        </li>
        <li>
          <a href="/categories/online-marketing?source=hplo_cat_sec&amp;pos=2">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
              alt="Digital Marketing"
              loading="lazy"
            />
            Digital Marketing
          </a>
        </li>
        <li>
          <a href="/categories/writing-translation?source=hplo_cat_sec&amp;pos=3">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
              alt="Writing &amp; Translation"
              loading="lazy"
            />
            Writing &amp; Translation
          </a>
        </li>
        <li>
          <a href="/categories/video-animation?source=hplo_cat_sec&amp;pos=4">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
              alt="Video &amp; Animation"
              loading="lazy"
            />
            Video &amp; Animation
          </a>
        </li>
        <li>
          <a href="/categories/music-audio?source=hplo_cat_sec&amp;pos=5">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
              alt="Music &amp; Audio"
              loading="lazy"
            />
            Music &amp; Audio
          </a>
        </li>
        <li>
          <a href="/categories/programming-tech?source=hplo_cat_sec&amp;pos=6">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
              alt="Programming &amp; Tech"
              loading="lazy"
            />
            Programming &amp; Tech
          </a>
        </li>
        <li>
          <a href="/categories/business?source=hplo_cat_sec&amp;pos=7">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
              alt="Business"
              loading="lazy"
            />
            Business
          </a>
        </li>
        <li>
          <a href="/categories/lifestyle?source=hplo_cat_sec&amp;pos=8">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
              alt="Lifestyle"
              loading="lazy"
            />
            Lifestyle
          </a>
        </li>
        <li>
          <a href="/categories/data?source=hplo_cat_sec&amp;pos=9">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
              alt="Data"
              loading="lazy"
            />
            Data
          </a>
        </li>
      </ul>
    </div>
  );
}

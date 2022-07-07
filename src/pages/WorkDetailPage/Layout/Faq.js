import { Collapse } from 'antd';
import React from 'react';
const { Panel } = Collapse;

export const Faq = () => {
  return (
    <div>
      <h3 className='text-2xl font-semibold p-3'>FAQ</h3>
      <div id='collapse' className=''>
        <Collapse expandIconPosition={'end'} bordered={false}>
          <Panel header='What do I need to get started?' key='1'>
            <p>
              You will need the following to get started: Brand name,
              Tagline (optional), Website (optional), Business
              description, Preferred logo style (optional), Color
              preference (optional), Notes/requirements, Own
              idea/suggestion might you have (optional)
            </p>
          </Panel>
          <Panel
            header='Can I purchase basic package first and upgrade later?'
            key='2'
          >
            <p>
              Yes you can purchase either basic or standard package
              and upgrade later. You can also purchase any of my gig
              extras later.
            </p>
          </Panel>
          <Panel
            header='Why do I need vector or source file?'
            key='3'
          >
            <p>
              The most important reason to have a source or vector
              file is so you have the ability to edit and manipulate
              your own logo. It provides a level of ownership to your
              own product that you wouldn’t otherwise have.
            </p>
          </Panel>
          <Panel header='What does social media kit include?' key='4'>
            <p>
              Profile picture and banner/cover design for your social
              medias e.g. Facebook, Twitter, etc.
            </p>
          </Panel>
          <Panel
            header='What does stationery design include?'
            key='5'
          >
            <p>
              Generally, it will include two-sided of business card,
              letterhead & envelope design. Feel free to message me
              first if you need any other designs.
            </p>
          </Panel>
          <Panel header='What services do you offer?' key='6'>
            <p>
              Logo, business card, stationery, icon (favicon/app
              icon), social media kit, banner, brochure, flyer,
              poster, packaging, landing page/website design, etc.
              Please contact me for pricing.
            </p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

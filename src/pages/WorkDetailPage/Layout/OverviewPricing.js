import { Tabs } from 'antd';
import { BiRevision } from 'react-icons/bi';
import { BsChevronDown } from 'react-icons/bs';
import { FiClock } from 'react-icons/fi';
import { GoCheck } from 'react-icons/go';
import { useSelector, useDispatch } from 'react-redux';

const onChange = (key) => {};
const { TabPane } = Tabs;

export const OverviewPricing = () => {
  const dispatch = useDispatch();
  const { workDetail } = useSelector(
    (state) => state.workDetailReducer
  );
  console.log(workDetail);
  return (
    <div className='xl:sticky xl:h-[600px] xl:min-h-[600px] xl:top-[100px] bg-white z-10'>
      <div
        id='pricing'
        className='border  border-slate-400 rounded-sm overflow-hidden w-full xl:w-[480px] '
      >
        <Tabs tabBarGutter={0} onChange={onChange} type='card'>
          <TabPane tab='Basic' key='1'>
            <div className='text-lg'>
              <div className=' flex justify-between items-center'>
                <span className='font-semibold text-xl'>
                  Silver Package 😊
                </span>
                <span className='text-[26px] font-semibold'>
                  US${workDetail?.price}
                </span>
              </div>

              <p className='mt-8 mb-4'>
                Convert Upto 10 Sections from PSD/Sketch/XD to HTML
                using Bootstrp3/4, Responsive Design, Html5,CSS3
              </p>
              <div className='flex justify-between'>
                <div className='flex items-center gap-x-3 font-bold'>
                  <FiClock className='text-xl' />
                  <span>3 Days Delivery</span>
                </div>
                <div className='flex items-center gap-x-3 font-bold'>
                  <BiRevision className='text-xl' />
                  <span>Unlimited Revisions</span>
                </div>
              </div>

              <ul className='flex flex-col gap-y-1 mt-5'>
                <li className='flex items-center gap-x-3 text-xl'>
                  <span className='text-slate-400 text-2xl'>
                    <GoCheck />
                  </span>
                  <span className='text-slate-400 font-medium'>
                    1 page
                  </span>
                </li>

                <li className='flex items-center gap-x-3 text-xl'>
                  <span className='text-green-500 text-2xl'>
                    <GoCheck />
                  </span>
                  <span className='text-slate-400 font-medium'>
                    Design customization
                  </span>
                </li>

                <li className='flex items-center gap-x-3 text-xl'>
                  <span className='text-green-500 text-2xl'>
                    <GoCheck />
                  </span>
                  <span className='text-slate-400 font-medium'>
                    Content upload
                  </span>
                </li>

                <li className='flex items-center gap-x-3 text-xl'>
                  <span className='text-slate-400 text-2xl'>
                    <GoCheck />
                  </span>
                  <span className='text-slate-400 font-medium'>
                    Responsive design
                  </span>
                </li>

                <li className='flex items-center gap-x-3 text-xl'>
                  <span className='text-slate-400 text-2xl'>
                    <GoCheck />
                  </span>
                  <span className='text-slate-400 font-medium'>
                    Include source code
                  </span>
                </li>
              </ul>

              <button className='bg-green-500 text-white mt-4 font-semibold text-xl h-[50px] w-full rounded-lg cursor-pointer hover:bg-green-700 transition-all duration-200'>
                Continue(US${workDetail?.price})
              </button>
            </div>
          </TabPane>

          <TabPane tab='Standard' key='2'>
            <div className='text-lg'>
              <div className=' flex justify-between items-center'>
                <span className='font-semibold text-xl'>
                  Gold Package 😍
                </span>
                <span className='text-[26px] font-semibold'>
                  US${workDetail?.price * 2}
                </span>
              </div>

              <p className='mt-8 mb-4'>
                Convert Upto 7 Sections from PSD/Sketch/XD to HTML
                using Bootstrap3/4, Responsive Design, Html5,CSS3
              </p>
              <div className='flex justify-between'>
                <div className='flex items-center gap-x-3 font-bold'>
                  <FiClock className='text-xl' />
                  <span>4 Days Delivery</span>
                </div>
                <div className='flex items-center gap-x-3 font-bold'>
                  <BiRevision className='text-xl' />
                  <span>Unlimited Revisions </span>
                </div>
              </div>

              <ul className='flex flex-col gap-y-1 mt-5'>
                <li className='flex items-center gap-x-3 text-xl'>
                  <span className='text-green-500 text-2xl'>
                    <GoCheck />
                  </span>
                  <span className='text-slate-400 font-medium'>
                    1 page
                  </span>
                </li>

                <li className='flex items-center gap-x-3 text-xl'>
                  <span className='text-green-500 text-2xl'>
                    <GoCheck />
                  </span>
                  <span className='text-slate-400 font-medium'>
                    Design customization
                  </span>
                </li>

                <li className='flex items-center gap-x-3 text-xl'>
                  <span className='text-green-500 text-2xl'>
                    <GoCheck />
                  </span>
                  <span className='text-slate-400 font-medium'>
                    Content upload
                  </span>
                </li>

                <li className='flex items-center gap-x-3 text-xl'>
                  <span className='text-slate-400 text-2xl'>
                    <GoCheck />
                  </span>
                  <span className='text-slate-400 font-medium'>
                    Responsive design
                  </span>
                </li>

                <li className='flex items-center gap-x-3 text-xl'>
                  <span className='text-green-500 text-2xl'>
                    <GoCheck />
                  </span>
                  <span className='text-slate-400 font-medium'>
                    Include source code
                  </span>
                </li>
              </ul>

              <button className='bg-green-500 text-white mt-4 font-semibold text-xl h-[50px] w-full rounded-lg cursor-pointer hover:bg-green-700 transition-all duration-200'>
                Continue(US${workDetail?.price * 2})
              </button>
            </div>
          </TabPane>

          <TabPane tab='Premium' key='3'>
            <div className='text-lg'>
              <div className=' flex justify-between items-center'>
                <span className='font-semibold text-xl'>
                  VIP Package 😎
                </span>
                <span className='text-[26px] font-semibold'>
                  US${workDetail?.price * 3}
                </span>
              </div>

              <p className='mt-8 mb-4'>
                Convert Upto 10 Sections from PSD/Sketch/XD to HTML
                using Bootstrp3/4, Responsive Design, Html5,CSS3
              </p>
              <div className='flex justify-between'>
                <div className='flex items-center gap-x-3 font-bold'>
                  <FiClock className='text-xl' />
                  <span>6 Days Delivery</span>
                </div>
                <div className='flex items-center gap-x-3 font-bold'>
                  <BiRevision className='text-xl' />
                  <span>Unlimited Revisions</span>
                </div>
              </div>

              <ul className='flex flex-col gap-y-1 mt-5'>
                <li className='flex items-center gap-x-3 text-xl'>
                  <span className='text-green-500 text-2xl'>
                    <GoCheck />
                  </span>
                  <span className='text-slate-400 font-medium'>
                    1 page
                  </span>
                </li>

                <li className='flex items-center gap-x-3 text-xl'>
                  <span className='text-green-500 text-2xl'>
                    <GoCheck />
                  </span>
                  <span className='text-slate-400 font-medium'>
                    Design customization
                  </span>
                </li>

                <li className='flex items-center gap-x-3 text-xl'>
                  <span className='text-green-500 text-2xl'>
                    <GoCheck />
                  </span>
                  <span className='text-slate-400 font-medium'>
                    Content upload
                  </span>
                </li>

                <li className='flex items-center gap-x-3 text-xl'>
                  <span className='text-green-500 text-2xl'>
                    <GoCheck />
                  </span>
                  <span className='text-slate-400 font-medium'>
                    Responsive design
                  </span>
                </li>

                <li className='flex items-center gap-x-3 text-xl'>
                  <span className='text-green-500 text-2xl'>
                    <GoCheck />
                  </span>
                  <span className='text-slate-400 font-medium'>
                    Include source code
                  </span>
                </li>
              </ul>

              <button className='bg-green-500 text-white mt-4 font-semibold text-xl h-[50px] w-full rounded-lg cursor-pointer hover:bg-green-700 transition-all duration-200'>
                Continue(US${workDetail?.price * 3})
              </button>
            </div>
          </TabPane>
        </Tabs>
      </div>
      <div
        id='contact-seller'
        className='py-[25px] px-8 bg-slate-100 mt-3'
      >
        <button className='bg-transparent border-slate-700 text-slate-800 border font-semibold text-xl h-[50px] w-full rounded-lg cursor-pointer hover:bg-slate-600 hover:text-white late transition-all duration-200 flex items-center justify-center'>
          <span>Contact Seller</span>

          <BsChevronDown className='text-2xl ml-1 font-semibold' />
        </button>
      </div>
    </div>
  );
};

import { Tabs } from 'antd';
import { useState } from 'react';
import { BiRevision } from 'react-icons/bi';
import { BsChevronDown } from 'react-icons/bs';
import { FiClock } from 'react-icons/fi';
import { GoCheck } from 'react-icons/go';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SUCCESS } from '../../../constants/globalVariable';
import { bookingApi } from '../../../services/booking';
import { notificationAlert } from '../../../utils/notifycation';

const onChange = (key) => {};
const { TabPane } = Tabs;
export const OverviewPricing = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { workDetail } = useSelector(
    (state) => state.workDetailReducer
  );

  const handleBookingWork = async (id) => {
    try {
      setLoading(true);
      const res = await bookingApi.bookingWork(id);
      if (res.status === SUCCESS) {
        setTimeout(() => setLoading(false), 500);
        setTimeout(
          () => notificationAlert('success', 'Booking Work Success'),
          500
        );
        setTimeout(() => navigate('/user'), 1000);
      }
    } catch (error) {
      console.log('Failed fetch data', error);
      notificationAlert('error', 'Booking Work Fail');
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <div className='fixed inset-0 flex justify-center items-center bg-slate-400 bg-opacity-90 z-20'>
          <div role='status'>
            <svg
              className='inline mr-2 w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-pink-600'
              viewBox='0 0 100 101'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                fill='currentColor'
              />
              <path
                d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                fill='currentFill'
              />
            </svg>
            <span className='sr-only'>Loading...</span>
          </div>
        </div>
      )}

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

                <button
                  onClick={() => handleBookingWork(workDetail._id)}
                  className='bg-green-500 text-white mt-4 font-semibold text-xl h-[50px] w-full rounded-lg cursor-pointer hover:bg-green-700 transition-all duration-200'
                >
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

                <button
                  onClick={() => handleBookingWork(workDetail._id)}
                  className='bg-green-500 text-white mt-4 font-semibold text-xl h-[50px] w-full rounded-lg cursor-pointer hover:bg-green-700 transition-all duration-200'
                >
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

                <button
                  onClick={() => handleBookingWork(workDetail._id)}
                  className='bg-green-500 text-white mt-4 font-semibold text-xl h-[50px] w-full rounded-lg cursor-pointer hover:bg-green-700 transition-all duration-200'
                >
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
    </>
  );
};

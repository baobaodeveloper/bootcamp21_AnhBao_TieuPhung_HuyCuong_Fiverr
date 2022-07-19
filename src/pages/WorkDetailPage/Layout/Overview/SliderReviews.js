import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';
import { Rate } from 'antd';
import { useEffect } from 'react';
import { listWorkApi } from '../../../../services/listWork';
import { SUCCESS } from '../../../../constants/globalVariable';
import { workDetailActions } from '../../workDetailSlice';
import { useState } from 'react';

export default function SliderReviews() {
  const [comment, setComment] = useState('');
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const res = await listWorkApi.getComment(id);
        if (res.status === SUCCESS) {
          const { data } = res;
          dispatch(workDetailActions.getComment(data));
          setComment(data);
        }
      } catch (error) {
        console.log('Fetch comment fail', error);
      }
    };
    fetchComment();
  }, [id]);
  return (
    <div id='slider-review'>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={20}
        className='mySwiper'
      >
        {comment &&
          comment.map((item) => {
            return (
              <SwiperSlide key={item._id}>
                <div className='flex gap-x-5  py-4 px-8 rounded-md'>
                  <div className='w-8 flex justify-center items-center font-semibold h-8 shrink-0 rounded-full text-white text-xl bg-gray-500'>
                    {item.user.name[0]}
                  </div>
                  <div className='flex flex-col  gap-y-4'>
                    <div className='flex gap-x-3'>
                      <span className='text-lg font-semibold'>
                        {item.user.name}
                      </span>
                      <div className='flex items-center gap-x-1'>
                        <img
                          className='w-8 h-8 object-cover'
                          src='https://img.icons8.com/color/344/vietnam.png'
                          alt='UY'
                          loading='lazy'
                        />
                        <span className='text-[18px]'>VietNam</span>
                      </div>
                      <div className='flex items-center gap-x-1'>
                        <Rate
                          className='text-md leading-none'
                          allowHalf
                          defaultValue={4.5}
                        />
                        <span className='text-lg font-semibold text-[#ccb30e] leading-none'>
                          4.5
                        </span>
                      </div>
                    </div>
                    <p className='text-lg max-w-[600px] break-words'>
                      {item.content}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}

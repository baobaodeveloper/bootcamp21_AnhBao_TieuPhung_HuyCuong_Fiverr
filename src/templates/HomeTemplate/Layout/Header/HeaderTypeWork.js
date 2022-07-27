import { Dropdown, Menu, Space } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GET_SUBTYPE_JOB } from '../../../../constants/globalVariable';

export const HeaderTypeWork = () => {
  const navigate = useNavigate();
  const [slider, setSlider] = useState(9);
  const [group, setGroup] = useState(1);
  const dispatch = useDispatch();
  const typeJobs = useSelector(
    (state) => state.headerReducer.typeJob
  );

  useEffect(() => {
    function handleResize(e) {
      const resize = e.currentTarget.innerWidth;
      if (resize > 1300) {
        setSlider(9);
        setGroup(9);
      }
      if (resize < 1300) {
        setSlider(7);
        setGroup(7);
      }
      if (resize < 1200) {
        setSlider(5);
        setGroup(5);
      }
      if (resize < 768) {
        setSlider(4);
        setGroup(3);
      }
    }

    let setTime;
    let isThrottling = false;
    const throttle = (callback, wait, e) => {
      if (isThrottling) return;
      isThrottling = true;
      setTime = setTimeout(() => {
        callback(e);
        isThrottling = false;
      }, wait);
    };

    window.addEventListener('resize', (e) => {
      throttle(handleResize, 600, e);
    });
    return () => {
      window.removeEventListener('resize', throttle);
      clearTimeout(setTime);
    };
  });
  const handleListTypeWorkPage = (id) => {
    navigate(`/list_type/${id}`);
  };
  return (
    <div className='slider-type_work'>
      <Swiper
        modules={[Navigation]}
        navigation={true}
        slidesPerView={slider}
        spaceBetween={10}
        slidesPerGroup={group}
      >
        {typeJobs.length > 0 &&
          typeJobs.map((typeJob) => {
            const menu = (
              <Menu
                items={typeJob.subTypeJobs.map((item) => ({
                  key: item.key,
                  label: (
                    <div
                      onClick={() => {
                        dispatch({
                          type: GET_SUBTYPE_JOB,
                          payload: item.key,
                        });
                        navigate('/list_work');
                      }}
                      className='text-lg sm:text-md py-1'
                    >
                      {item.label}
                    </div>
                  ),
                }))}
              />
            );
            return (
              <SwiperSlide key={typeJob.id}>
                <Dropdown overlay={menu}>
                  <span
                    className='cursor-pointer'
                    onClick={() => {
                      handleListTypeWorkPage(typeJob.id);
                    }}
                  >
                    <Space>{typeJob.name}</Space>
                  </span>
                </Dropdown>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

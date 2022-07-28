import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { CardWork } from '../../ListWorkPage/Layout/ListWork/CardWork';
import { useEffect } from 'react';
import { useState } from 'react';
import { SUCCESS } from '../../../constants/globalVariable';
import { useParams } from 'react-router-dom';
import { listWorkApi } from '../../../services/listWorkService';

export const Recommandations = () => {
  const { id } = useParams();
  const [listWorkRecommandDouble, setListWorkRecommandDouble] =
    useState([]);
  const [listWorkRecommand, setListWorkRecommand] = useState([]);
  const { workDetail } = useSelector(
    (state) => state.workDetailReducer
  );

  useEffect(() => {
    const fetchWorkRecommand = async () => {
      try {
        if (!workDetail.subType) return;
        const res = await listWorkApi.getWorkRecommand(
          workDetail.subType._id
        );
        if (res.status === SUCCESS) {
          let { data } = res;
          setListWorkRecommand(data);

          let dataDivide = [];
          for (let i = 0; i < data.length; i++) {
            dataDivide.push(data.splice(0, 2));
          }
          setListWorkRecommandDouble(dataDivide);
        }
      } catch (error) {
        console.log('Failed fetch data', error);
      }
    };
    fetchWorkRecommand();
  }, [workDetail?.subType, id]);
  return (
    <div
      id='recommendations'
      className='border rounded-md py-8 bg-[#fafafa]'
    >
      <h3 className='text-2xl font-semibold px-8'>
        Recommended For You
      </h3>

      <div id='recommand-container' className='mt-8 '>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className='md:block hidden'
          spaceBetween={30}
        >
          {listWorkRecommandDouble.length > 0 &&
            listWorkRecommandDouble.map((item) => {
              return (
                <SwiperSlide key={item[0]._id}>
                  <div
                    id='recommand'
                    className='flex justify-between '
                  >
                    <CardWork work={item[0]} />
                    <CardWork work={item[1]} />
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>

        <Swiper
          navigation={true}
          modules={[Navigation]}
          className='md:hidden block'
          spaceBetween={30}
        >
          {listWorkRecommand.length > 0 &&
            listWorkRecommand.map((item) => {
              return (
                <SwiperSlide key={item._id}>
                  <div id='recommand'>
                    <CardWork work={item} />
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

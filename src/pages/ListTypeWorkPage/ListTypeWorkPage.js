import { Card } from 'antd';
import 'antd/dist/antd.min.css';
import { useEffect, useState } from 'react';
import { SiBuddy } from 'react-icons/si';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { GET_SUBTYPE_JOB } from '../../constants/globalVariable';
import './ListTypeWorkPage.scss';
import TabSubTypeWork from './TabSubTypeWork/TabSubTypeWork';
import { useDispatch } from 'react-redux';
const { Meta } = Card;

const imageAddress =
  'https://mona.software/wp-content/uploads/2021/07/tam-quan-trong-cua-data-analyst-la-gi.jpg';

export const ListTypeWorkPage = () => {
  const { typeJob } = useSelector((state) => state.headerReducer);
  const [IndexTypeWork, setIndexTypeWork] = useState(0);
  const { type } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const indexTypeJobParam = typeJob.findIndex(
      (item) => item.name === type
    );
    setIndexTypeWork(indexTypeJobParam);
  }, [type, typeJob]);
  return (
    <div className='list-type-work-page  my-10'>
      <div className='list-type-work-page-header container mx-auto'>
        <h1 className='font-bold text-4xl mb-3'>
          {typeJob[IndexTypeWork]?.name}
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Quas, nulla eum. Itaque et vel sequi.
        </p>
        <div className='text-blue-400 m-5'>
          <SiBuddy />
          <span>How Feverr Wokrs</span>
        </div>
      </div>
      <div className='list-type-work-page-body grid grid-cols-4 gap-4 m-10 container mx-auto'>
        <div className=''>
          <TabSubTypeWork
            IndexTypeWork={IndexTypeWork}
            setIndexTypeWork={setIndexTypeWork}
            typeJob={typeJob}
          />
        </div>
        <div className='col-start-2 col-end-5 grid grid-cols-3 gap-4'>
          {typeJob[IndexTypeWork]?.subTypeJobImg &&
            typeJob[IndexTypeWork].subTypeJobImg[0].map((item) => {
              return (
                <Card
                  onClick={() => {
                    dispatch({
                      type: GET_SUBTYPE_JOB,
                      payload: item._id,
                    });
                    navigate(`/list_work/${item.name}`);
                  }}
                  key={item._id}
                  className='w-full h-full'
                  cover={
                    <img
                      className='w-full h-full object-cover'
                      alt='example'
                      src={item.image || imageAddress}
                    />
                  }
                >
                  <Meta title={item.name} />
                </Card>
              );
            })}
        </div>
      </div>
      <div className='list-type-work-page-footer flex space-x-20 bg-gray-100 p-10'>
        <div className='list-type-work-page-footer-item'>
          <h1 className='text-xl'>
            Your <span className=' font-bold'>Terms</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Omnis, incidunt.
          </p>
        </div>
        <div className='list-type-work-page-footer-item'>
          <h1 className='text-xl'>
            Your <span className=' font-bold'>Timeline</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Omnis, incidunt.
          </p>
        </div>
        <div className='list-type-work-page-footer-item'>
          <h1 className='text-xl'>
            Your <span className='font-bold'>Safety</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Omnis, incidunt.
          </p>
        </div>
      </div>
    </div>
  );
};

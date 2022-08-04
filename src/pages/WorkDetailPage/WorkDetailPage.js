import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GET_DETAIL_JOB } from '../../constants/globalVariable';
import { AboutSeller } from './Layout/AboutSeller/AboutSeller';
import { Comment } from './Layout/Comments/Comment';
import { Description } from './Layout/Description';
import { Faq } from './Layout/Faq';
import { MenuWorkDetail } from './Layout/MenuWorkDetail';
import { Overview } from './Layout/Overview/Overview';
import { OverviewPricing } from './Layout/OverviewPricing';
import { Recommandations } from './Layout/Recommandations';

export const WorkDetailPage = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_DETAIL_JOB, payload: id });
  }, [id, dispatch]);
  return (
    <div>
      <MenuWorkDetail />

      <div className='flex justify-between xl:container mx-auto py-2 lg:py-8 px:3 lg:px-10 items-stretch'>
        <div className='xl:w-[60%] w-full  p-4 flex flex-col gap-y-10'>
          <Overview />
          <div className='w-full xl:hidden block'>
            <OverviewPricing />
          </div>
          <Description />
          <AboutSeller />
          <Recommandations />
          <Faq />
          <Comment />
        </div>
        <div className='xl:w-[35%]  hidden xl:flex justify-end'>
          <OverviewPricing />
        </div>
      </div>
    </div>
  );
};

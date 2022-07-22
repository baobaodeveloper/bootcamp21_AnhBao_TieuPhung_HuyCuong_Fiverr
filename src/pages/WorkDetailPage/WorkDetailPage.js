import { MenuWorkDetail } from './Layout/MenuWorkDetail';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AboutSeller } from './Layout/AboutSeller/AboutSeller';
import { Comment } from './Layout/Comments/Comment';
import { Description } from './Layout/Description';
import { Faq } from './Layout/Faq';
import { Overview } from './Layout/Overview/Overview';
import { OverviewPricing } from './Layout/OverviewPricing';
import { Recommandations } from './Layout/Recommandations';
import { useEffect } from 'react';
import { listWorkApi } from '../../services/listWork';
import { SUCCESS } from '../../constants/globalVariable';
import { workDetailActions } from './workDetailSlice';

export const WorkDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await listWorkApi.getWorkDetail(id);
        if (res.status === SUCCESS) {
          const { data } = res;
          dispatch(workDetailActions.getDetailWorks(data));
        }
      } catch (error) {
        console.log('Failed fetch data', error);
      }
    };
    fetchData();
  }, [id]);
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

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SUCCESS } from '../../constants/globalVariable';
import { listWorkApi } from '../../services/listWork';
import { ListWork } from './Layout/ListWork/ListWork';
import { LeftSort } from './Layout/Sort/LeftSort';
import { RightSort } from './Layout/Sort/RightSort';
import { SortByRelevance } from './Layout/Sort/SortByRelevance';
import { listWorkPageActions } from './listWorkPageSlice';

export const ListWorkPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await listWorkApi.getListWork();
        const { data } = res;
        if (res.status === SUCCESS) {
          dispatch(listWorkPageActions.getListWorkPage(data));
        }
      } catch (error) {
        console.log('Fail fetch data', error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className='container mx-auto pt-10 pb-5 px-5'>
      <h2 className='text-4xl font-semibold'>Results for 'html'</h2>
      <div className='block  gap-x-5 2xl:flex 2xl:justify-between'>
        <LeftSort />
        <RightSort />
      </div>
      <SortByRelevance />
      <ListWork />
    </div>
  );
};

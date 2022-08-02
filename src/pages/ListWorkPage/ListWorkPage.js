import { useParams } from 'react-router-dom';
import { ListWork } from './Layout/ListWork/ListWork';
import { LeftSort } from './Layout/Sort/LeftSort';
import { RightSort } from './Layout/Sort/RightSort';
import { SortByRelevance } from './Layout/Sort/SortByRelevance';

export const ListWorkPage = () => {
  const { typeJob } = useParams();
  return (
    <div className='container mx-auto pt-10 pb-5 px-5'>
      <h2 className='text-4xl font-semibold'>
        Results for '{typeJob}'
      </h2>
      <div className='block  gap-x-5 2xl:flex 2xl:justify-between'>
        <LeftSort />
        <RightSort />
      </div>
      <SortByRelevance />
      <ListWork />
    </div>
  );
};

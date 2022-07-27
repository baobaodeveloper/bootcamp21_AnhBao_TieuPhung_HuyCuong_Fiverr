import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SUCCESS } from '../../constants/globalVariable';
import { headerApi } from '../../services/headerTypeJobService';
import { HeaderTypeJobAction } from './headerSlice';
import { FooterTemplate } from './Layout/Footer/FooterTemplate';
import { HeaderTemplate } from './Layout/Header/HeaderTemplate';

const HomeTemplate = ({ children, position }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await headerApi.getHeaderAllTypeJob();
        const { data } = res;
        if (SUCCESS === res.status) {
          dispatch(HeaderTypeJobAction.getHeaderAllTypeJob(data));
        }
      } catch (error) {
        console.log('Failed to fetch data', error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <HeaderTemplate position={position} />
      {children}
      <FooterTemplate />
    </div>
  );
};

export default HomeTemplate;

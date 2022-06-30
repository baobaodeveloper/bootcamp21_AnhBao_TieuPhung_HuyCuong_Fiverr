import { FooterTemplate } from './Layout/Footer/FooterTemplate';
import { HeaderTemplate } from './Layout/Header/HeaderTemplate';

const HomeTemplate = ({ children }) => {
  return (
    <div className='bg-red-400 h-screen w-100%'>
      <HeaderTemplate />
      {children}
      <FooterTemplate />
    </div>
  );
};

export default HomeTemplate;

import { FooterTemplate } from './Layout/Footer/FooterTemplate';
import { HeaderTemplate } from './Layout/Header/HeaderTemplate';

const HomeTemplate = ({ children }) => {
  return (
    <div>
      <HeaderTemplate />
      {children}
      <FooterTemplate />
    </div>
  );
};

export default HomeTemplate;

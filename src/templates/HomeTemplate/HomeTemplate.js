import { FooterTemplate } from './Layout/Footer/FooterTemplate';
import { HeaderTemplate } from './Layout/Header/HeaderTemplate';

const HomeTemplate = ({ children, position }) => {
  return (
    <div>
      <HeaderTemplate position={position} />
      {children}
      <FooterTemplate />
    </div>
  );
};

export default HomeTemplate;

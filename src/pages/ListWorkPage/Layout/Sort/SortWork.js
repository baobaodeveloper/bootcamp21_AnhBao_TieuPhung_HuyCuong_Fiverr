import { Dropdown, Space } from 'antd';
import { useState } from 'react';
import { ButtonDefault } from '../../../../components/button/ButtonDefault';

export const SortWork = ({
  menu,
  title,
  handleVisibleChange,
  visible,
}) => {
  const [arrow, setArrow] = useState(true);

  return (
    <Dropdown
      overlayClassName='dropdown-work'
      overlayStyle={{ minWidth: '250px' }}
      onVisibleChange={handleVisibleChange}
      visible={visible}
      overlay={menu}
      trigger={['click']}
      placement='bottomLeft'
    >
      <span onClick={(e) => setArrow(!arrow)}>
        <Space>
          <ButtonDefault title={title} arrow={arrow}></ButtonDefault>
        </Space>
      </span>
    </Dropdown>
  );
};

import { Dropdown, Menu, message, Space } from 'antd';
import { useState } from 'react';
import { ButtonDefault } from '../../../components/button/ButtonDefault';

const CategorySort = () => {
  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  const [arrow, setArrow] = useState(true);
  const menu = (
    <Menu
      onClick={onClick}
      items={[
        {
          label: (
            <div className='flex justify-between'>
              <span className='text-lg font-semibold '>
                All Categories
              </span>
              <span>(28,097)</span>
            </div>
          ),
          key: '1',
        },
        {
          label: (
            <div className='flex justify-between'>
              <span className='text-lg font-semibold '>
                All Categories
              </span>
              <span>(28,097)</span>
            </div>
          ),
          key: '2',
        },
        {
          label: (
            <div className='flex justify-between'>
              <span className='text-lg font-semibold '>
                All Categories
              </span>
              <span>(28,097)</span>
            </div>
          ),
          key: '3',
        },
      ]}
    />
  );

  return (
    <Dropdown
      overlayClassName='dropdown-work'
      overlayStyle={{ minWidth: '250px' }}
      overlay={menu}
      trigger={['click']}
      placement='bottomLeft'
    >
      <span onClick={(e) => setArrow(!arrow)}>
        <Space>
          <ButtonDefault
            title='Category'
            arrow={arrow}
          ></ButtonDefault>
        </Space>
      </span>
    </Dropdown>
  );
};

export default CategorySort;

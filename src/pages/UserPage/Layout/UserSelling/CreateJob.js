import { Form, Input, InputNumber, Select, Switch } from 'antd';
import React, { useEffect, useState } from 'react';
import './index.scss';

/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

export const CreateJob = ({ setVisible }) => {
  const [imageUpload, setImageUpload] = useState(null);

  const onFinish = (values) => {
    console.log(values);
  };

  useEffect(() => {
    if (imageUpload === null) return;
    const fd = new FormData();
    // fd.append('image', imageUpload, imageUpload?.name);
    console.log(fd);
  }, [imageUpload]);

  return (
    <div id='create-job'>
      <Form onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          name='name'
          label='Name Job'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 4,
          }}
          name='price'
          label='Price'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <div className='flex flex-col gap-y-2 px-10'>
          <div className='flex items-center justify-between'>
            <Form.Item
              valuePropName=''
              name='proServices'
              label='ProServices'
            >
              <Switch />
            </Form.Item>
            <Form.Item
              valuePropName=''
              name='localSellers'
              label='LocalSellers'
            >
              <Switch />
            </Form.Item>
          </div>
          <div className='flex items-center justify-between'>
            <Form.Item
              valuePropName=''
              name='onlineSellers'
              label='OnlineSellers'
            >
              <Switch />
            </Form.Item>
            <Form.Item
              valuePropName=''
              name='deliveryTime'
              label='DeliveryTime'
            >
              <Switch />
            </Form.Item>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='flex-1'>
            <Form.Item
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              label='SELECT A CATEGORIES'
            >
              <Select>
                <Select.Option value='demo'>Demo</Select.Option>
                <Select.Option value='demo1'>Demo</Select.Option>
                <Select.Option value='demo2'>Demo</Select.Option>
                <Select.Option value='demo3'>Demo</Select.Option>
                <Select.Option value='demo4'>Demo</Select.Option>
                <Select.Option value='demo5'>Demo</Select.Option>
                <Select.Option value='demo6'>Demo</Select.Option>
                <Select.Option value='demo7'>Demo</Select.Option>
              </Select>
            </Form.Item>
          </div>
          <div className='flex-1'>
            <Form.Item
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              label='SELECT A SUBCATEGORIES'
            >
              <Select>
                <Select.Option value='demo'>Demo</Select.Option>
                <Select.Option value='demo1'>Demo</Select.Option>
                <Select.Option value='demo2'>Demo</Select.Option>
                <Select.Option value='demo3'>Demo</Select.Option>
                <Select.Option value='demo4'>Demo</Select.Option>
                <Select.Option value='demo5'>Demo</Select.Option>
                <Select.Option value='demo6'>Demo</Select.Option>
                <Select.Option value='demo7'>Demo</Select.Option>
              </Select>
            </Form.Item>
          </div>
        </div>

        <div>
          <div className='mt-5'>
            <input
              type='file'
              onChange={(e) => {
                console.log(e.target.files[0]);
                setImageUpload(e.target.files[0]);
              }}
            />
          </div>
        </div>

        <div className='flex justify-end item-center'>
          <button
            onClick={() => setVisible(false)}
            type='button'
            className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 '
          >
            Cancel
          </button>
          <button
            // onClick={() => setVisible(false)}
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 '
          >
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

import { Form, Input, InputNumber, Select, Switch } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_USER_JOB } from '../../../../constants/globalVariable';
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
  const dispatch = useDispatch();
  const { typeJob } = useSelector((state) => state.headerReducer);
  const [listSubJob, setListSubJob] = useState([]);

  const onFinish = (values) => {
    console.log(values);
    dispatch({
      type: CREATE_USER_JOB,
      payload: values,
    });
  };

  const handleChangeListSubJob = (job) => {
    const subJob = typeJob.find((item) => item.id === job);
    setListSubJob(subJob.subTypeJobs);
  };

  return (
    <div id='create-job'>
      <Form
        onFinish={onFinish}
        initialValues={{
          proServices: false,
          localSellers: false,
          onlineSellers: false,
          deliveryTime: false,
          type: '',
          subType: '',
          image: '',
        }}
        validateMessages={validateMessages}
      >
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
          <InputNumber min={1} />
        </Form.Item>
        <div className='flex flex-col gap-y-2 px-10'>
          <div className='flex items-center justify-between'>
            <Form.Item
              valuePropName='checked'
              name='proServices'
              label='ProServices'
            >
              <Switch checked={true} />
            </Form.Item>
            <Form.Item
              valuePropName='checked'
              name='localSellers'
              label='LocalSellers'
            >
              <Switch />
            </Form.Item>
          </div>
          <div className='flex items-center justify-between'>
            <Form.Item
              valuePropName='checked'
              name='onlineSellers'
              label='OnlineSellers'
            >
              <Switch />
            </Form.Item>
            <Form.Item
              valuePropName='checked'
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
              name='type'
              rules={[
                {
                  required: true,
                },
              ]}
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              label='SELECT A CATEGORIES'
            >
              <Select onChange={(job) => handleChangeListSubJob(job)}>
                {typeJob?.length > 0 &&
                  typeJob.map((job) => {
                    return (
                      <Select.Option key={job.id} value={job.id}>
                        {job.name}
                      </Select.Option>
                    );
                  })}
              </Select>
            </Form.Item>
          </div>
          <div className='flex-1'>
            <Form.Item
              rules={[
                {
                  required: true,
                },
              ]}
              name='subType'
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              label='SELECT A SUBCATEGORIES'
            >
              <Select>
                {listSubJob.length > 0 &&
                  listSubJob.map((job) => {
                    return (
                      <Select.Option key={job.key} value={job.key}>
                        {job.label}
                      </Select.Option>
                    );
                  })}
              </Select>
            </Form.Item>
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

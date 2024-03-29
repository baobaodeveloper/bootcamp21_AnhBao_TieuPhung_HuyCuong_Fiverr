import { Form, Input, InputNumber, Select, Switch } from 'antd';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CREATE_USER_JOB,
  UPDATE_JOB,
} from '../../../../constants/globalVariable';
import { userPageAction } from '../../userSlice';
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
  const { editJob } = useSelector((state) => state.userPageReducer);
  const { editMode } = useSelector((state) => state.userPageReducer);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { typeJob } = useSelector((state) => state.headerReducer);
  const [listSubJob, setListSubJob] = useState([]);
  const [valueField, setValueField] = useState(editJob);
  const onFinish = (values) => {
    if (editMode) {
      const idTypeJob = typeJob.filter(
        (typeJob) => typeJob.name === values.type
      )[0];
      const idSubTypeJob = idTypeJob.subTypeJobs.filter(
        (subTypeJob) => subTypeJob.label === values.subType
      )[0];
      let data = {
        ...values,
        type: idTypeJob.id,
        subType: idSubTypeJob.key,
      };
      console.log(data);
      dispatch({
        type: UPDATE_JOB,
        payload: {
          data: data,
          id: editJob.id,
        },
      });
      dispatch(userPageAction.editJob());
    } else {
      dispatch({
        type: CREATE_USER_JOB,
        payload: values,
      });
    }
    form.resetFields();
  };

  const handleChangeListSubJob = (job) => {
    const subJob = typeJob.find((item) => item.id === job);
    setListSubJob(subJob.subTypeJobs);
  };

  useEffect(() => {
    form.setFieldsValue(valueField);
  }, [valueField]);

  useEffect(() => {
    setValueField(editJob);
  }, [editJob]);
  return (
    <div id='create-job'>
      <Form
        form={form}
        // initialValues={valueField}
        validateMessages={validateMessages}
        onFinish={onFinish}
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
          {editMode ? (
            <button
              onClick={() => {
                setVisible(false);
              }}
              type='submit'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 '
            >
              Change Job
            </button>
          ) : (
            <button
              onClick={() => {
                setVisible(false);
              }}
              type='submit'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 '
            >
              Submit
            </button>
          )}
        </div>
      </Form>
    </div>
  );
};

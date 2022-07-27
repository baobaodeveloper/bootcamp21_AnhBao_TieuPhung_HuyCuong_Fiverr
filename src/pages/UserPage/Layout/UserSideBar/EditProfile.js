import { Modal } from 'antd';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import moment from 'moment';

export const EditProfile = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { user } = useSelector((state) => state.userPageReducer);

  return (
    <div id='modal-profile'>
      <div>
        <button
          className='text-lg py-2 px-8 bg-slate-600 rounded-md text-white font-semibold hover:scale-105 transition-all'
          onClick={() => setIsModalVisible(true)}
        >
          Edit Profile
        </button>
      </div>
      <Modal
        width={'600px'}
        title='Edit Profile'
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <div className='flex items-center justify-between'>
          <div className='flex-1 flex flex-col items-center'>
            <div className='w-[200px] relative  h-[200px] rounded-full bg-slate-300'>
              {user?.avatar ? (
                <img
                  className='w-full rounded-full h-full object-cover'
                  src={user?.avatar}
                  alt=''
                />
              ) : (
                <span className='w-full flex justify-center items-center rounded-full absolute z-10 bg-gray-400 h-full text-white text-3xl'>
                  {user?.name &&
                    user.name
                      .split(' ')
                      [user.name.split(' ').length - 1].toUpperCase()}
                </span>
              )}
            </div>
            <span className='text-2xl font-semibold mt-3'>
              {user?.name}
            </span>
          </div>
          <div className='flex-1'>
            <Formik
              initialValues={{
                name: user?.name,
                email: user?.email,
                phone: user?.phone,
                birthday: moment(user?.birthday)
                  .subtract(10, 'days')
                  .calendar(),
                gender: user?.name ? 'male' : 'female',
              }}
              validationSchema={Yup.object({
                name: Yup.string()
                  .matches(/^[a-z ,.'-]+$/i, 'Name is not valid')
                  .max(20, 'Name must be 20 characters or less')
                  .min(3, 'Name must be 3 characters or more')
                  .required('Required'),
                email: Yup.string()
                  .email('Email is not valid')
                  .required('Required'),
                phone: Yup.string()
                  .matches(
                    /^[0-9\-\+]{10}$/,
                    'Phone have to include number to 0 to 9 and must be equal 11 numbers'
                  )
                  .required('Required'),
                birthday: Yup.string()
                  .matches(
                    /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
                    'Birthday is not valid'
                  )
                  .required('Required'),
              })}
              onSubmit={(values) => console.log(values)}
            >
              <Form
                onChange={(e) => {}}
                className='flex flex-col gap-y-3'
              >
                <div>
                  <label
                    htmlFor='name'
                    className='block mb-2 text-sm font-medium text-gray-900 '
                  >
                    Your Name
                  </label>
                  <Field
                    type='text'
                    id='name'
                    name='name'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                    placeholder='Name'
                  />
                  <span className='text-red-500'>
                    <ErrorMessage name='name' />
                  </span>
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Your Email
                  </label>
                  <Field
                    name='email'
                    type='email'
                    id='email'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                    placeholder='Email'
                  />
                  <span className='text-red-500'>
                    <ErrorMessage name='email' />
                  </span>
                </div>

                <div>
                  <label
                    htmlFor='phone'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Phone number
                  </label>
                  <Field
                    name='phone'
                    type='number'
                    id='phone'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                    placeholder='123-45-678'
                  />
                  <span className='text-red-500'>
                    <ErrorMessage name='phone' />
                  </span>
                </div>

                <div>
                  <label
                    htmlFor='birthday'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Birth day
                  </label>
                  <Field
                    name='birthday'
                    type='string'
                    id='birthday'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                    placeholder='dd/mm/yy'
                  />
                  <span className='text-red-500'>
                    <ErrorMessage name='birthday' />
                  </span>
                </div>

                <div className='flex flex-col'>
                  <span className='block mb-2 text-sm font-medium text-gray-900 '>
                    Gender
                  </span>
                  <div className='flex items-center mr-4'>
                    <Field
                      id='male'
                      type='radio'
                      name='gender'
                      value='male'
                      className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                    />
                    <label
                      htmlFor='inline-radio'
                      className='ml-2 text-sm font-medium text-gray-900 '
                    >
                      male
                    </label>
                    <span className='text-red-500'>
                      <ErrorMessage name='gender' />
                    </span>
                  </div>
                  <div className='flex items-center mr-4'>
                    <Field
                      id='female'
                      type='radio'
                      name='gender'
                      value='female'
                      className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 '
                    />
                    <label
                      htmlFor='inline-2-radio'
                      className='ml-2 text-sm font-medium text-gray-900 '
                    >
                      female
                    </label>
                    <span className='text-red-500'>
                      <ErrorMessage name='gender' />
                    </span>
                  </div>
                </div>

                <div className='self-center mt-3'>
                  <button
                    onClick={() => setIsModalVisible(false)}
                    type='button'
                    className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 '
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      setIsModalVisible(false);
                    }}
                    type='submit'
                    className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 '
                  >
                    Edit Profile
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </Modal>
    </div>
  );
};

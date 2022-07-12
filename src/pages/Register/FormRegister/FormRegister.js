import React from 'react'
import { Form, Input } from 'antd';

import "./FormRegister.scss"


export default function FormRegister() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='form py-14 px-5 flex flex-col justify-around'>
      <h1 className='text-4xl'>Đăng Ký</h1>
      <Form
        layout='vertical'
        name="basic"

        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Tài khoản"
          name="username"
          rules={[
            {
              required: true,
              message: 'Tài khoản không được rỗng!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[
            {
              required: true,
              message: 'Mật khẩu không được rỗng!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Nhập lại mật khẩu"
          name="password"
          rules={[
            {
              required: true,
              message: 'Mật khẩu không được rỗng!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Họ tên"
          name="username"
          rules={[
            {
              required: true,
              message: 'Tài khoản không được rỗng!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="username"
          rules={[
            {
              required: true,
              message: 'Tài khoản không được rỗng!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Số điện thoại"
          name="username"
          rules={[
            {
              required: true,
              message: 'Tài khoản không được rỗng!',
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
      <div className='flex justify-between'>
        <button className='rounded-lg px-12 py-4 bg-white-500 border border-black hover:shadow-xl'>Đăng Ký</button>
        <button className='rounded-lg px-7 py-4 bg-white-500 border border-black hover:shadow-xl'>Đăng Nhập --&gt;</button>
      </div>
    </div>
  );
}

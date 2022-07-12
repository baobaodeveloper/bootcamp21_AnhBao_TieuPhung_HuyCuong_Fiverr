import React from 'react'
import { Form, Input, message } from 'antd';
import { BaseService } from '../../../services/baseService';
import { useNavigate } from 'react-router-dom';

import "./FormLogin.module.scss";


export default function FormLogin() {
  let history = useNavigate();

  const onFinish = (values) => {
    console.log('Success:', values);
    let userLogin = new BaseService();
    console.log("userLogin", userLogin);
    userLogin
      .post("api/auth/signin", values)
      .then((res) => {
        console.log(res);
        message.success(res.message);

        // push len redux

        // set local

        setTimeout(() => {
          history.push("/");
          //return();
        }, 2000)
      })
      .catch((err) => {
        console.log(err);
        message.error(err.response.data.message);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='form pt-14 px-5'>
      <h1 className='text-4xl mb-5'>Đăng Nhập</h1>
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
          name="email"
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
        <Form.Item>
          <div className='flex justify-between'>
            <button className='rounded-lg px-10 py-4 bg-white-500 border border-black hover:shadow-xl'>Đăng Nhập</button>
            <button className='rounded-lg px-9 py-4 bg-white-500 border border-black hover:shadow-xl'>Đăng Ký --&gt;</button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}

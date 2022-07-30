import React from 'react'
import { Form, Input, message } from 'antd';
import { BaseService } from '../../../services/baseService';
import { NavLink, useNavigate } from 'react-router-dom';
import { localStorageService } from '../../../services/localStorageService';

import { useDispatch } from 'react-redux';
import { setUserInfor } from '../../../redux/userSlice';

import "./FormLogin.scss";

export default function FormLogin() {
  let navigate = useNavigate();
  let dispatch = useDispatch()
  let userLogin = new BaseService();

  const onFinish = (values) => {
    console.log('Success:', values);
    userLogin
      .post("api/auth/signin", values)
      .then((res) => {
        console.log(res);
        message.success(res.data.message);

        // push len redux
        console.log("dispatch");
        dispatch(setUserInfor(res.data.user));

        localStorageService.setUserLocal(res.data);

        setTimeout(() => {
          navigate("/")
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
    <div className=''>
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
        <div>
          <Form.Item
            label="Email"
            name="email"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Email không được rỗng!',
              },
              {
                type: 'email',
                message: 'Email không hợp lệ',
              }
            ]}
          >
            <Input />
          </Form.Item>
        </div>

        <div>
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
        </div>

        <div>
          <Form.Item>
            <div className='flex justify-center space-x-10'>
              <button className='rounded-lg px-10 py-4 bg-white-500 border border-black hover:shadow-xl'>Đăng Nhập</button>
              <NavLink to="/register">
                <button className='rounded-lg px-9 py-4 bg-white-500 border border-black hover:shadow-xl'>Đăng Ký --&gt;</button>
              </NavLink>
            </div>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}

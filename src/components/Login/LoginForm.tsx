import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
 
const LoginForm: React.FC = () => 

(

  <> 


<div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-96 bg-white rounded-lg p-8 flex flex-col justify-between shadow-md">
        <h1 className="text-3xl text-center mb-6 text-gray-800 font-bold">Login</h1>
        <Form
          name="basic"
          
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
          
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input  placeholder="Username" className="rounded-md mb-4 border focus:outline-none focus:border-purple-500 px-3 py-2" />
          </Form.Item>

          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Password" className="rounded-md mb-4 border focus:outline-none focus:border-purple-500 px-3 py-2" />
          </Form.Item>

          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
           
          >
            <Checkbox className="text-gray-700">Remember me</Checkbox>
          </Form.Item>

          <Form.Item >
          <button
              type="submit"
              className="bg-gradient-to-r from-black to-gray-900 hover:from-gray-900 hover:to-black text-white font-bold py-2 px-4 rounded-md focus:outline-none transition-all duration-300 w-full"
            >
              Log In
            </button>
          </Form.Item>
        </Form>

  </div>

    </div>

  </>
);

export default LoginForm;
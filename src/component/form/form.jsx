import React, { useState } from 'react';
import { LockOutlined, UserOutlined, UserSwitchOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { InputFields } from '../form/input';
const FormPage = () => {
    const [formState, setFormState] = useState('Sign Up')
    const handleClick = () => {
        formState == 'Sign Up' ? setFormState('Sign In') : setFormState('Sign Up')
    }
    const onFinish = values => {
        console.log('Received values of form: ', values);
    };
    return (
        <>
            <p className="font-semibold text-lg captalize text-gray-600">Please {formState}</p>
            <Form
                name="login"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                style={{ margin: 0, padding: 0 }}
            >
                {
                    formState == 'Sign Up' &&
                    <>
                        <InputFields name={'firstName'} icon={<UserOutlined />} placeholder={'Firstname'} />
                        <InputFields name={'lastName'} icon={<UserSwitchOutlined />} placeholder={'LastName'} />
                    </>
                }

                <InputFields name={'email'} icon={<MailOutlined />} placeholder={'Email'} type={'email'} />

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input.Password prefix={<LockOutlined />} type="password" placeholder="Password" />
                </Form.Item>
                {
                    formState == 'Sign Up' &&
                    <Form.Item
                        name="confirm"
                        dependencies={['password']}
                        rules={[
                            {
                                required: true,
                                message: '',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error(''));
                                },
                            }),
                        ]}
                    >
                        <Input.Password prefix={<LockOutlined />} type="password" placeholder="Confirm Password" />
                    </Form.Item>
                }
                <Form.Item style={{ margin: 0, padding: 0 }}>
                    <Button block type="primary" htmlType="submit">
                        {formState}
                    </Button>
                </Form.Item>
                <p onClick={handleClick} className='mt-2 text-blue-500 cursor-pointer'>
                    {
                        formState == 'Sign Up' ?
                            'Sign In' :
                            'Sign Up'
                    }
                </p>
            </Form>
        </>
    );
};
export default FormPage;
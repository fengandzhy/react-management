import React from 'react';
import './login.less';
import logo from './images/logo.png';
import {
    Form,
    Input,
    Button
} from 'antd';

import {
    UserOutlined,
    LockOutlined,
} from '@ant-design/icons';
import './login.less';
import {reqLogin} from '../../api';

/**
 * 登录路由组件
 */
const Login = () => {
    /**
     * 在const [form] = Form.useForm();这行代码中，Form.useForm()返回一个包含单个form实例的数组。
     * 使用解构赋值的方式，我们直接从返回的数组中提取出第一个元素，并将其赋值给变量form。
     * 这样做的目的是为了简化代码和提高可读性。
     * */
    const [form] = Form.useForm();

    /**
     * Ant Design 从版本4.0开始引入了onFinish和onFinishFailed作为Form组件的属性。
     * onFinish用于表单验证成功并提交时的回调，而onFinishFailed用于表单验证失败时的回调处理。
     * */
    // 表单提交且验证通过后的处理函数
    const onFinish = async (values) => {
        const {username,password} = values;
        try {
            const response = await reqLogin(username, password);
            console.log(response);
        } catch (error) {
            // 处理错误
        }
        // reqLogin(username,password).then((response)=>{
        //     console.log(response);
        // }).catch((error) =>{
        //
        // });
    };

    // 表单提交且验证未通过后的处理函数
    const onFinishFailed = (errorInfo) => {
        console.log('失败:', errorInfo);
        // 在这里可以处理提交失败的逻辑
    };

    const validatePwd = async (rule, value) => {
        // console.log('validatePwd()', rule, value);
        if (!value) {
            return Promise.reject('密码必须输入');
        } else if (value.length < 4) {
            return Promise.reject('密码长度不能小于4位');
        } else if (value.length > 12) {
            return Promise.reject('密码长度不能大于12位');
        } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
            return Promise.reject('密码必须是英文、数字或下划线组成');
        }
        // 验证通过不需要返回任何东西
    };

    return (
        <div className='login'>
            <header className='login-header'>
                <img src={logo} alt="logo"/>
                <h1>React项目: 后台管理系统</h1>
            </header>
            <section className='login-content'>
                <h2>用户登录</h2>
                <Form
                    form={form}
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed} // 可选的，处理验证失败的情况
                >
                    <Form.Item
                        name="username"
                        rules={[
                            { required: true, whitespace: true, message: '用户名必须输入' },
                            { min: 4, message: '用户名至少4位' },
                            { max: 12, message: '用户名最多12位' },
                            { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成' },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="item-icon" />} placeholder="用户名" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            { validator: validatePwd, }
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="item-icon" />}
                            type="password"
                            placeholder="密码"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </section>
        </div>
    );
};

export default Login;

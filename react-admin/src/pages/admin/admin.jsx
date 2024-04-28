import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import memoryUtils from "../../utils/memoryUtils";

const Admin = () => {
    const user = memoryUtils.user; // 将用户状态获取移动到更早，以确保在任何逻辑处理前就已经定义
    const history = useHistory(); // 使用 useHistory Hook 来访问 history 实例

    // 使用 useEffect Hook 来处理副作用，如重定向
    useEffect(() => {
        if (!user || !user._id) {
            history.replace('/login'); // 如果没有用户信息，重定向到登录页面
        }
    }, [user, history]); // 依赖列表中包含 user 和 history，确保任何依赖改变都会重新运行效果

    // 渲染部分仅在有用户信息时进行
    return (
        <div>Hello, {user ? user.username : 'Guest'}</div> // 使用条件渲染以处理用户信息未加载的情况
    );
};

export default Admin;

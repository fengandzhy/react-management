import React, {Component} from 'react';
import memoryUtils from "../../utils/memoryUtils";

/**
 * 登录路由组件
 * */
export default class Admin extends Component {
    render(){
        const user = memoryUtils.user;
        return (<div>Hello, {user.username}</div>);
    }
}

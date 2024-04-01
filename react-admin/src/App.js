// 由于 Component 不是 react 的默认导出, 所以这里加大括号
import React, {Component} from 'react';
import {Button, message} from 'antd'

export default class App extends Component {
    handleClick = () =>{
        message.success('Success').then(r => {});
    }
    render(){
        return <Button type="primary" onClick={this.handleClick}>Primary</Button>
    }
}
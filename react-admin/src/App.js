// 由于 Component 不是 react 的默认导出, 所以这里加大括号
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './pages/login/login';
import Admin from './pages/admin/admin';

export default class App extends Component {

    // Switch 在这里只表示只需要匹配到某一个Route就行了，不需要在看其他的Route
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/' component={Admin}></Route>
                </Switch>
            </BrowserRouter>
        );
    }
}
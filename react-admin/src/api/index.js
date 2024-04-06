import ajax from './ajax'
// 登陆
export const reqLogin = (username, password) => ajax('/login', {username, password},'POST');

export const reqAddUser = (user) => ajax('/manage/user/add', user,'POST');
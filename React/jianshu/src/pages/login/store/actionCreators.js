import axios from 'axios';
import * as constants from './constants';

const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    login
})
export const login = (account, password) => {
    return (dispacth) => {
        axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
           const result = res.data.data
           if(result) {
            dispacth(changeLogin(result))
           }else {
               alert('登录失败')
           }
        })
    }
}

export const logout = () => ({
    type: constants.LOGOUT,
    login: false
})
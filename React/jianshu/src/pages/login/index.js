import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { actionCreators } from './store'
class Login extends Component {
    render() {
        const { loginState } = this.props

        if(!loginState) {
            return (
                <LoginWrapper>
                    <LoginBox>
                     <Input placeholder='账号' innerRef={(input) => {this.account = input}}/>
                     <Input placeholder='密码' type='password' innerRef={(input)=>{this.password = input}}/>
                     <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
                     </LoginBox>
                </LoginWrapper>
             )
        }else {
           return <Redirect to='/'/> 
        }
    }
}

const mapState = (state) => ({
    loginState: state.getIn(['login', 'login'])
})

const mapDispatch = (dispacth) => ({
    login(accountElem, passwordElem) {
        dispacth(actionCreators.login(accountElem.value, passwordElem.value))
        console.log(accountElem.value,passwordElem.value)
    }
    
})
export default connect(mapState, mapDispatch)(Login);
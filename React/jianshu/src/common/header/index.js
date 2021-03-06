import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    NavSearch,
    Addition,
    Button
} from './style.js'
import { Link } from 'react-router-dom';
class Header extends Component {

    getListArea(show) {
        const { list, mouseIn, page, totaPage, headerMouseEnter, headerMouseLeave, handleChangePage } = this.props
        const newList = list.toJS()
        const pageList = []

        for (let i = (page - 1) * 10; i < page * 10; i++) {
            if (newList[i] !== undefined) {
                pageList.push(
                    <a className='searchInfoItem' key={newList[i]}>{newList[i]}</a>
                )
            }
        }
        if (show || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={headerMouseEnter}
                    onMouseLeave={headerMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <span
                            className='searchInfoSwitch'
                            onClick={() => handleChangePage(page, totaPage, this.spinIcon)}
                        >
                            <i ref={(icon) => { this.spinIcon = icon }} className='iconfont spin'>&#xe857;</i>
                            换一批
                        </span>
                    </SearchInfoTitle>
                    <div>
                        {pageList}
                    </div>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }

    render() {
        return (
            <HeaderWrapper>
                <Link to='/'><Logo /></Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    {
                        this.props.login
                            ? <NavItem className='right' onClick={this.props.logout}>退出</NavItem>
                            : <Link to='login'><NavItem className='right'>登录</NavItem></Link>
                    }

                    <NavItem className='right'>
                        <i className='iconfont'>&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={400}
                            classNames="slide"
                        >
                            <NavSearch
                                className={this.props.focused ? 'focused' : ''}
                                onFocus={() => this.props.handleInputFocus(this.props.list)}
                                onBlur={this.props.handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i
                            className={this.props.focused ? 'focused iconfont zoom' : 'iconfont zoom'}
                        >&#xe6e4;</i>
                        {this.getListArea(this.props.focused)}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to='/write'>
                        <Button className='writting'><i className='iconfont'>&#xe608;</i> 写文章</Button>
                    </Link>
                    <Button className='rge'>注册</Button>
                </Addition>
            </HeaderWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused'),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totaPage: state.getIn(['header', 'totaPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        login: state.getIn(['login', 'login'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            (list.size === 0) && dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        },
        headerMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },
        headerMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page, totaPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
            if (originAngle) {
                originAngle = parseInt(originAngle, 10)
            } else {
                originAngle = 0
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
            if (page < totaPage) {
                dispatch(actionCreators.changePage(page + 1))
            } else if (page === totaPage) {
                dispatch(actionCreators.changePage(1))
            }
        },
        logout() {
            dispatch(loginActionCreators.logout())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
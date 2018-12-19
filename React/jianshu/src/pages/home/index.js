import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import { actionCreators } from './store';
class Home extends PureComponent {

    handleScrollTop() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img
                        alt=''
                        className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4581/317818d29d5cdca841e894dada8e9b540b06c608.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {
                    this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null
                }

            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changHomeData()
        this.bindEvents()
    }
    
    componentWillMount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispacth) => ({
    changHomeData() {
        dispacth(actionCreators.getHomeInfo())
    },
    changeScrollTopShow(e) {
        let top = document.documentElement.scrollTop;
        if (top > 400) {
            dispacth(actionCreators.toggleTopShow(true))
        } else {
            dispacth(actionCreators.toggleTopShow(false))
        }
    }
})
export default connect(mapState, mapDispatch)(Home);
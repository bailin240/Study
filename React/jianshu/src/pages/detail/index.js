import React, { Component } from 'react';
import { DetailWrapper, Header, Content } from './style';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionCreators } from './store'
import axios from 'axios';
class Detail extends Component {
    render() {
        const { title, content} = this.props
        return (
            <DetailWrapper>
                <Header>{ title }</Header>
                <Content dangerouslySetInnerHTML={{__html: content}}></Content>
            </DetailWrapper>
        )
    }
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id)
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})

const mapDispacth = (dispacth) => ({
    getDetail(id) {
        dispacth(actionCreators.getDetail(id))
    }
})

export default connect(mapState, mapDispacth)(withRouter(Detail));
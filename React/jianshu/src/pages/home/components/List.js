import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ListItme, ListInfo, LoadMore } from '../style'
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
    render() {
        const { getMoreList, page } = this.props;
        return (
            <div>
                {
                    this.props.articleList.map((item) => {
                        return (
                            <Link key={item.get('id')} to={'/detail/' + item.get('id')}>
                                <ListItme>
                                    <img className='pic' src={item.get('imgUrl')} alt='' />
                                    <ListInfo>
                                        <h3 className='title'>{item.get('title')}</h3>
                                        <p className='desc'>{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItme>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
            </div>
        )
    }
}
const mapState = (state) => ({
    articleList: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
})

const mapDispacth = (dispacth) => ({
    getMoreList(page) {
        dispacth(actionCreators.getMoreList(page))
    }
})
export default connect(mapState, mapDispacth)(List);
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.conetnt !== this.props.conetnt) {
            return true;
        }else {
            return false;
        }
    }
    render() {
        console.log('child render');

        const {content, test} = this.props;
        return (
            <div onClick={this.handleClick}>
               {test} - {content}
            </div>
        )
    }

    handleClick() {
        const {deleteItem,index} = this.props;
        deleteItem(index)
    }

}
/* 数据格式校验 */
TodoItem.propTypes = {
    test: PropTypes.string.isRequired, // 校验必传且为字符串
    optionalArrayOf: PropTypes.arrayOf(PropTypes.number, PropTypes.string), // 校验传值为数字或字符串
    conetnt: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}
/* 定义参数默认值 */
TodoItem.defaultProps = {
    test: 'hello world'
}
export default TodoItem;
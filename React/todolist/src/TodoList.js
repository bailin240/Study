import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';

class TodoList extends Component {

    constructor(props) {
        super(props);
        // 当组件的 state 或者 props 发生改变的时候，render 函数就会重新执行
        this.state = {
            inputValue: '',
            list: []
        };
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
        
    }
   
    componentDidMount() {
        axios.get('/api/todoList')
            .then(() => {alert('success')})
            .catch(() => {alert('error')})
    }
    render() {
        return (
            <Fragment>
                <div>
                    <input
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleBtnClick}>提交</button></div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <TodoItem
                    key={index}
                    content={item}
                    index={index}
                    deleteItem={this.handleItemDelete}
                />
            )
        })
    }
    handleInputChange(e) {
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }))
    }
    handleBtnClick(e) {
        this.setState((perState) => ({
            list: [...perState.list, perState.inputValue],
            inputValue: ''
        }))
    }
    handleItemDelete(index) {
        this.setState((perState) => {
            const list = [...perState.list]
            list.splice(index, 1)
            return {list}
        })
    }
}
export default TodoList;    
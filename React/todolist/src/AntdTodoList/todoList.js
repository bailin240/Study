import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from '../store'


class AntdTodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)  
        this.hadnleBtnClick = this.handleBtnClick.bind(this)      
        store.subscribe(this.handleStoreChange)
    }

    render() {
        return (
            <div style={{ margin: '20px' }}>
                <div>
                    <Input
                        value={this.state.inputValue}
                        placeholder="todo info" 
                        style={{ width: '300px', marginRight: '15px' }}
                        onChange={this.handleInputChange}
                     />
                    <Button 
                        type="primary"
                        onClick={this.handleBtnClick}
                    >提交</Button>
                </div>
                <List
                style={{marginTop:'10px', width: '300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        )
    }

    handleInputChange(e) {
        const action = {
            type: 'ipnut_value_change',
            value: e.target.value
        }
        store.dispatch(action);
    }

    handleStoreChange(e) {
       this.setState(store.getState())
    }

    handleBtnClick(e) {
        const action = {
            type:'add_list_item'
        }
        store.dispatch(action)
    }
    
}

export default AntdTodoList;
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from '../store';
import { getInputChangAction, getAddItemAction, getDeleteItemAction, getTodoList} from '../store/actionCreators'
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
                    renderItem={(item, index) => (<List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>)}
                />
            </div>
        )
    }

    componentDidMount() {
       const action = getTodoList()
       store.dispatch(action)
    }

    handleInputChange(e) {
        const action = getInputChangAction(e.target.value)
        store.dispatch(action);
    }

    handleStoreChange(e) {
       this.setState(store.getState())
    }

    handleBtnClick(e) {
        const action = getAddItemAction()
        store.dispatch(action)
    }

    handleItemDelete(index) {
        const action = getDeleteItemAction(index)
        store.dispatch(action)
    }
    
}

export default AntdTodoList;
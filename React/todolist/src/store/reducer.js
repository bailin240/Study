import { INPUT_VALUE_CHANGE, ADD_LIST_ITEM, DELETE_LIST_ITEM } from '../store/actionTypes';


const defaultState = {
    inputValue: '',
    list: []
};

// reducer 可以接受 state ，但绝不可以修改 state
export default (state = defaultState, action) => {
    if(action.type === INPUT_VALUE_CHANGE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type === ADD_LIST_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(state.inputValue)
        newState.inputValue = ''
        return newState
    }
    if(action.type === DELETE_LIST_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}
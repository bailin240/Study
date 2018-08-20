const defaultState = {
    inputValue: '123',
    list: [1,2]
};

// reducer 可以接受 state ，但绝不可以修改 state
export default (state = defaultState, action) => {
    if(action.type === 'ipnut_value_change') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === 'add_list_item') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(state.inputValue)
        newState.inputValue = ''
        return newState
    }
    return state;
}
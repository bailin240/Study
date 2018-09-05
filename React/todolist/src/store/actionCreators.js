import { INPUT_VALUE_CHANGE, ADD_LIST_ITEM, DELETE_LIST_ITEM,INIT_LIST_ACTION} from '../store/actionTypes';
// import axios from 'axios';
export const getInputChangAction = (value) => ({
    type: INPUT_VALUE_CHANGE,
    value
})

export const getAddItemAction = () => ({
    type: ADD_LIST_ITEM
})

export const getDeleteItemAction = (index) => ({
    type: DELETE_LIST_ITEM,
    index
})

export const initListAction = (data) =>({
 type: INIT_LIST_ACTION,
 data
})

export const getTodoList = () => {
    return (dispatch) => {
        // axios.get('/list.json').then((res) =>{
        //     const data = res.data
        //     const action = initListAction(data)
        //     dispatch(action)
        // })
    }
}
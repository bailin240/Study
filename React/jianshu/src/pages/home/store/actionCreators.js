import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';


const changHomeData = (result) =>({
    type: constants.CHANG_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})

const addHomeList = (list, nextPage) => ({
    type: constants.ADD_MORE_LIST,
    list: fromJS(list),
    nextPage
})

export const getHomeInfo = () => {
    return (dispacth) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data
            dispacth(changHomeData(result))
        })
    }
}

export const getMoreList = (page) => {
    return (dispacth) => {
        axios.get('/api/homeList.json?page='+ page).then((res) => {
            const result = res.data.data
            dispacth(addHomeList(result, page + 1))
        })
    }
}

export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_SCROLL_TOP,
    show
})
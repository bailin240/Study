import axios from 'axios';
import * as constants  from './constants';

const changeDetail = (title, content) =>({
    type: constants.CHANGE_DETAIL,
    title: title,
    content: content
})
export const getDetail = (id) => {
    return (dispacth) => {
        axios.get('/api/detail.json?id=' + id).then((res) =>{
            const result = res.data.data
            dispacth(changeDetail(result.title,result.content))
        }).catch(() => {
            alert('请求失败')
        })
    }
}
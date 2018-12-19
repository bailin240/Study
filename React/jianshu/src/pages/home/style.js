import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin:0 auto;
    overflow:hidden;
`
export const HomeLeft = styled.div`
    float:left;
    width: 625px;
    margin-left:15px;
    padding-top:30px;
    .banner-img{
        width: 625px;
        height:270px;
    }
`
export const HomeRight = styled.div`
    width: 280px;
    float:right;
`


/* Topic */
export const TopicWrapper = styled.div`
    overflow:hidden;
    padding: 20px 0 0 10px;
    margin-left:-18px;
    border-bottom:1px solid #dcdcdc;
`
export const TopicItem = styled.div`
    float: left;
    height:32px;
    line-height:32px;
    padding-right:10px;
    margin-left:18px;
    margin-bottom: 18px;
    background-color:#f7f7f;
    font-size:14px;
    border:1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic{
        display:block;
        float:left;
        margin-right:10px;
        width:32px;
        height:32px;s
    }
`
/** List */

export const ListItme = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    overflow:hidden;
    .pic{
        display:block;
        width:125px;
        height:100px;
        float:right;
        border-radius: 10px;
    }
`
export const ListInfo = styled.div`
    width:500px;
    float:left;
    .title{
        line-height: 27px;
        font-size:18px;
        font-weight: bold;
        color:#333;
    }
    .desc{
        line-height:24px;
        font-size:13px;
        color:#999;
    }
`

/** Recommend */
export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`

export const RecommendItem = styled.div`
    width:280px;
    height:50px;
    background:url(${(props) => props.imgUrl});
    background-size: contain;
`
/* LoadMore */
export const LoadMore = styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    margin: 30px 0;
    background-color: #a5a5a5;
    text-align:center;
    border-radius: 20px;
    color:#fff;
    cursor:pointer;
`;

/** BackTop */
export const BackTop = styled.div`
    position: fixed;
    right:100px;
    bottom:30px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    font-size:14px;
`;
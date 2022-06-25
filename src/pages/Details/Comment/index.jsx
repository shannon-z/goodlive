import React, { useEffect, useState } from 'react'
import CommentView from '../CommentView'
import LoadMore from '../../../components/LoadMore'
import api from '../../../api'
const Comment = () => {
    const [comments,setCommentData]=useState([])
    const [hasMore,setHasMore]=useState(false)
    
    function loadMoreHandle(){
        //加载更多的操作,重新调用一次
        api.comments({
            id: 0
        }).then(res => {
            if (res.data.status === 200) {
                setHasMore(res.data.comment.hasMore) 
                setCommentData(comments.concat(res.data.comment.data))
            }
        })
    }
    useEffect(() => {
        api.comments({
            id: 0
        }).then(res => {
            if (res.data.status === 200) {
                setHasMore(res.data.comment.hasMore) 
                setCommentData(res.data.comment.data)
            }
        })
    }, [])
    return (
        <div>
            {comments.length > 0 ? 
            <CommentView comments={comments}/> : 
            <div>
                等待数据加载
            </div>
            }
            {
                hasMore?<LoadMore onLoadMore={loadMoreHandle}/>:<div></div>
            }
        </div>
    )
}

export default Comment
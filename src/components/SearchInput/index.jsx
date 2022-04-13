import React, { useEffect, useRef, useState } from 'react'
import "./style.less"
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as searchAction from "../../redux/actions/search"
import { useParams } from 'react-router-dom'
const SearchInput = (props) => {
    const [keywords, setKeywords] = useState("")
    const dispatch = useDispatch();
    const reduxKeywords = useSelector(state => state.search)
    const params = useParams()
    // 检测地址栏中和输入框中的搜索关键字是否改变
    // 如果改变了则将关键字传输给redux，修改store中的值，之后使用setKeywords将新的值传输给搜索框
    useEffect(() => {
        if (params.keywords) {
            dispatch(searchAction.updateSearch(params.keywords))
        }
        else{
            dispatch(searchAction.updateSearch(""))
        }
        setKeywords(reduxKeywords.search)
    }, [reduxKeywords.search, params.keywords])
    function keyUpHandle(e) {
        if (keywords.length > 0) {
            if (e.keyCode === 13) {
                props.history.push("/search/" + keywords)
                dispatch(searchAction.updateSearch(keywords))
            }
        }
    }
    function changeHandle(e) {
        setKeywords(e.target.value)
    }
    return (
        <input
            className='search-input'
            type="text"
            onKeyUp={keyUpHandle}
            value={keywords}
            onChange={changeHandle} />
    )
}

export default withRouter(SearchInput)
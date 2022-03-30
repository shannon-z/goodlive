import React, { useState } from 'react'
import "./style.less"
import { withRouter } from 'react-router-dom'
const SearchInput = (props) => {
    const [keywords, setKeywords] = useState("")
    function keyUpHandle(e) {
        if (keywords.length > 0) {
            if (e.keyCode === 13) {
                props.history.push("/search/" + keywords)
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
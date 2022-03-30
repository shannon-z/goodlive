import React, { useEffect, useState } from 'react'
import SearchListView from '../SearchListView'
import search from '../../../api'
import api from '../../../api'
import LoadMore from '../../../components/LoadMore'
const SearchList = (props) => {
    const [searchData, setSearch] = useState([1])
    useEffect(() => {
        api.search({
            search: props.keywords
        }).then(res => {
            if (res.data.status === 200) {
                setSearch(res.data.result.data)
            }
        }).catch(error => {
            console.log(error)
        })
    }, [])
    return (
        <div>
            {
                searchData.length > 0 ?
                    <SearchListView searchData={searchData} /> :
                    <div>等待数据</div>
            }
            <LoadMore/>
        </div>
    )
}

export default SearchList
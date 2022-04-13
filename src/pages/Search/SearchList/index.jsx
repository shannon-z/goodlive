import React, { useEffect, useState } from 'react'
import SearchListView from '../SearchListView'
import search from '../../../api'
import api from '../../../api'
import LoadMore from '../../../components/LoadMore'
const SearchList = (props) => {
    const [searchData, setSearch] = useState([])
    const [hasMore, sethasMore] = useState(false)
    function loadMore(){
        getData()
    }
    useEffect(() => {
        getData()
        return ()=>{
            // 在组件卸载之前将网络请求都设置为原始的样子
            setSearch([]);
            sethasMore(false)
        }
    }, [props.keywords])
    function getData(){
        api.search({
            search: props.keywords
        }).then(res => {
            if (res.data.status === 200) {
                setSearch(searchData.concat(res.data.result.data))
                sethasMore(res.data.result.hasMore)
            }
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <div>
            {
                searchData.length > 0 ?
                    <SearchListView searchData={searchData} /> :
                    <div>等待数据</div>
            }
            {
                hasMore?
                <LoadMore onLoadMore={loadMore}/>:
                <div>已加载全部数据</div>
            }
        </div>
    )
}

export default SearchList
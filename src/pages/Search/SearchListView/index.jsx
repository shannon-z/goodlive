import React from 'react'
import Item from './Item'
import { nanoid } from 'nanoid';
const SearchListView = (props) => {
  return (
    <div>
      {
        props.searchData.map((ele,index)=>{
          return <Item data={ele} key={nanoid()} />
        })
      }
    </div>
  )
}

export default SearchListView
import React from 'react'
import { useParams } from 'react-router-dom'
import SearchHeader from './SearchHeader';
import SearchList from './SearchList';
const Search = () => {
  const params = useParams();
  return (
    <div>
      <SearchHeader />
      <SearchList keywords={params.keywords} />
      {/* {params.keywords} */}
    </div>
  )
}

export default Search
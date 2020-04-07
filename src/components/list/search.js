import React from 'react'

const Search = ({search, searchChange}) => {
    return (
        <div>
            <input type="text" value={search} onChange={searchChange} />
        </div>
    )
}

export default Search

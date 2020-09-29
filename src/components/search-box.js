import React from 'react'
import './search-box.css'

const SearchBox = ({placeholder,handleChange}) => (
    <>
      <input
      className='search' 
      placeholder={placeholder}
      type='search'
      onChange={handleChange} 
      />
    </>
)

export default SearchBox;
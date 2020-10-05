import React from 'react';

import './searchBox.css';

export const SearchBox = props => (
  <input
    className='searchbox'
    type='search'
    placeholder='search monsters'
    onChange={props.onSearchChange}
  />
);

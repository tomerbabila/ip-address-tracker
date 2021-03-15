import React from 'react';
import Results from './Results';
import Input from './Input';

function Search() {
  return (
    <div className='search-container'>
      <h1>IP Address Tracker</h1>
      <Input />
      <Results />
    </div>
  );
}

export default Search;

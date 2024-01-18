
import React, { useState } from 'react';

const SearchBar = ({ onSearch } : any ) => {
  const [keyword, setKeyword] = useState('');

  const handleSearch = () => {
    onSearch(keyword);
  };

  return (
    <div className='w-[80%] mx-auto flex flex-row flex-wrap'>
      <input
        type="text"
        value={keyword}
        className='rounded-lg border-black w-[80%]'
        onChange={(e:any) => setKeyword(e.target.value)}
        placeholder='Enter keyword...'
      />
      <button onClick={handleSearch} className='btn'>Search</button>
    </div>
  );
};

export default SearchBar;

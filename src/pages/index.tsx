
import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import SearchVolumeDisplay from '../components/SearchVolumeDisplay';
import { getAllSearchVolume, getSearchVolume, updateSearchVolume } from '../services/api';

const App = () => {
  const [keyword, setKeyword] = useState('');
  const [searchVolume, setSearchVolume] = useState(0);
  const [keywordVolumes, setKeywordVolumes] = useState([]);

  useEffect(() => {
    fetchAllKeywordVolumes();
  }, []); // Fetch all keyword volumes on component mount

  const fetchAllKeywordVolumes = async () => {
    try {
      const data = await getAllSearchVolume();
      if (Array.isArray(data as any)) {
        setKeywordVolumes(data);
      } else {
        console.error('Data received from the API is not an array:', data);
      }
    } catch (error) {
      console.error('Error fetching keyword volumes:', error);
    }
  };

  const handleSearch = async (searchKeyword:any) => {
    try {
      await updateSearchVolume(searchKeyword);
      const volume = await getSearchVolume(searchKeyword);
      setKeyword(searchKeyword);

      // Refetch all keyword volumes after updating the search volume
      fetchAllKeywordVolumes();
    } catch (error) {
      console.error('Error handling search:', error);
    }
  };



  return (
    <div className=' bg-gray-200 h-[100vh]'>
      <h1 className='text-center text-5xl text-blue-600 text-extrabold py-10'>Etsy Keyword Search</h1>
      <SearchBar onSearch={handleSearch} />
      <SearchVolumeDisplay keywordVolumes={keywordVolumes} />
    </div>
  );
};

export default App;

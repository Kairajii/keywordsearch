// src/components/SearchVolumeDisplay.js
import React from 'react';

const SearchVolumeDisplay = ({ keywordVolumes }:any) => {
  return (
    <div className='w-[80%] mx-auto'>
      <table className='flex flex-col border-2 border-black border-b-0 bg-slate-50'>
        <thead className='border-2 border-b-black rounded-t-lg px-4 py-5'>
          <tr className='flex justify-between items-center text-lg'>
            <th>Keyword</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {keywordVolumes.map(({ keyword, searchVolume }:any) => (
            <tr key={keyword} className='flex justify-between items-center border-2 border-b-black rounded-t-lg px-4 py-5 text-lg font-medium'>
              <td>{keyword}</td>
              <td className='mr-4'>{searchVolume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchVolumeDisplay;

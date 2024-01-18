// src/services/api.js
const apiUrl = 'https://keywordsearch-zb29.vercel.app';

const getSearchVolume = async (keyword:any) => {
  const response = await fetch(`${apiUrl}/searchVolume/${keyword}`);
  const data = await response.json();
  return data;
};

const updateSearchVolume = async (keyword:any) => {
  await fetch(`${apiUrl}/searchVolume/${keyword}`, {
    method: 'PUT',
  });
};

const getAllSearchVolume = async()=>{
   const response =  await fetch(`${apiUrl}/searchVolume/allKeywordVolumes`);
   const data = await response.json();
   console.log({data});
   return data;
}

export { getSearchVolume, updateSearchVolume, getAllSearchVolume };

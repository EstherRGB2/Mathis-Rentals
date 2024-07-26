//Home.jsx

import React, { useState } from 'react';
import '../App.css';
import AllEquipment from './AllEquipment';
import './equipment-module.css';
import SearchBar from './SearchBar';
import allImagesData from '../data/allImages.json';


function Home() {

  const [ searchQuery, setSearchQuery ] = useState('');

  const filterData = (query, data) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) => d.name.toLowerCase().includes(query.toLowerCase()));
    }
  };

  const filteredData = filterData(searchQuery, allImagesData);

  return (
    <>
      <SearchBar
        setSearchQuery={setSearchQuery}
        style={{
          display: 'flex',
          alignSelf: 'center',
          justifySelf: 'center',
          width: '100%',
        }}
      />
      <AllEquipment data={filteredData} />
    </>
  );
}

export default Home;

import React from 'react'
import { useState } from 'react';
export default function SearchAndFilter({RegionChangeCallback,searchCallback}) {
   const handleInput = (event)=>{searchCallback(event?.target?.value)};
   const handleRegionChange = (event)=>{setSelectedRegion(event.target.value);RegionChangeCallback(event.target.value);};
   const regionList = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
   const [selectedRegion, setSelectedRegion] = useState('');
  return (
    <div className="container d-flex justify-content-between">
      <div>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search for a country"
            aria-label="Search"
            onInput={handleInput}
          />
        </form>
      </div>
      <div className="dropdown">
        <select className="form-select"  value={selectedRegion} onChange ={handleRegionChange} aria-label="Default select example">
        <option value="">Filter By Region</option>
          {regionList.map((ele,index) => (
            <option key={index} value={ele}>{ele}</option>
          ))}
          </select>
      </div>
    </div>
  );
}

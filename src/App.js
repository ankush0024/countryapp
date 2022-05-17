import './App.css';
import CountryList from './components/CountryList';
import SearchAndFilter from './components/SearchAndFilter';
import { useEffect, useState } from 'react';
function App() {
  const [countryListData, setCountryListData] = useState([]);
  const [filteredcountryListData, setFilteredCountryListData] = useState([]);
  const fetchAllCountryDetails = async () => {
    const url = process.env.REACT_APP_COUNTRY_LIST_API_ENDPOINT ;
    const res = await fetch(url);
    const data = await res.json();
    setCountryListData([...data]);
    setFilteredCountryListData([...data]);
  }
  const searchCallback = (searchTerm) => {
    const tempData = [...countryListData];
    setFilteredCountryListData([
      ...tempData.filter((ele) => ele.name.common.toLowerCase().includes(searchTerm.toLowerCase())),
    ]);
  };

  useEffect(() => {
    fetchAllCountryDetails();
    return () => {
    }
  }, [])

  return (
    <div className="App">
      <SearchAndFilter searchCallback={searchCallback} />
      <CountryList countryListData={filteredcountryListData} />
    </div>
  );
}

export default App;

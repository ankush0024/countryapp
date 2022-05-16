import './App.css';
import CountryList from './components/CountryList';
import SearchAndFilter from './components/SearchAndFilter';
import { useEffect, useState } from 'react';
function App() {
  const [countryListData, setCountryListData] = useState([]);
  const fetchAllCountryDetails = async() =>{
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();
    setCountryListData([...data]);
     console.log(data);
  }
  useEffect(() => {
    fetchAllCountryDetails();
    return () => {
    }
  }, [])
  
  return (
    <div className="App">
      <SearchAndFilter/>
      <CountryList countryListData={countryListData}/>
    </div>
  );
}

export default App;

import React, { useEffect } from "react";

const Filter = ({
  searchInput,
  setSearchInput,
  setFiltered,
  setCountries,
  countries,
}) => {
  // Prevent page reload when submitting the form
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Search countries
  const searchCountries = (searchValue) => {
    setSearchInput(searchValue);

    if (searchInput) {
     
      const filteredCountries = countries.filter((country) =>
      
        Object.values(country)
        
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
    
      setFiltered(filteredCountries);
    } else {
      setFiltered(countries);
    }
  };

  return (
    <>
      <form className="form" id="form" onSubmit={handleSubmit}>
        <input className='input1'
          type="search"
          name="search"
          id="search"
          
          placeholder="   Search by country name"
          onChange={(e) => searchCountries(e.target.value)}
        />
      </form>
    </>
  );
};

export default Filter;

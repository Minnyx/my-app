import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";
import Wrapper from "./Wrapper";

const url = "https://restcountries.com/v3.1/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);


 

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(url);
      const countries = await response.json();
      setCountries(countries);
      setIsLoading(false);
    };

    fetchCountries();
  }, []);

  const DATOS_API= Array.from({length:60}, (value, index) => {
    return {id:index, title: `Item #${index}`}
  })

  const ITEMS_PER_PAGE = 5;

 

  const [datosFromApi, setDatosFromApi] = useState(DATOS_API);
  const [items, setItems] = useState([...DATOS_API].splice(0, ITEMS_PER_PAGE));
  const [currentPage, setCurrentPage] = useState(0);

  const nextHandler = () => {
    const totalElementos = datosFromApi.length;
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * ITEMS_PER_PAGE;
    if(firstIndex >= totalElementos) return;
    setItems([...datosFromApi].splice(firstIndex, ITEMS_PER_PAGE));
    setCurrentPage(nextPage);

    
  }

  const prevHandler = () => {

    const prevPage = currentPage - 1;
    if(prevPage < 0) return;
    
    const firstIndex = prevPage * ITEMS_PER_PAGE;
   
    setItems([...datosFromApi].splice(firstIndex, ITEMS_PER_PAGE));
    setCurrentPage(prevPage);
  }

  return (
    <>
    
      <div className="header">
        <div>
          <header>
            <h1>Country</h1>
          </header>
        </div>
        <Filter
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setFiltered={setFiltered}
          setCountries={setCountries}
          countries={countries}
          
        />
      </div>

      <Wrapper currentPage={currentPage} items={items} nextHandler={nextHandler} prevHandler={prevHandler}></Wrapper>

      <table >
        <tbody>
          <div>

            <tr id="cabecera-tabla">
            
                    <th>Flag</th>
                    <th>Name</th>
                    <th>Region</th>
                    <th>Population</th>
                    <th>Language</th>
                    <th> </th>
                    
                    
                  </tr>
           

            {isLoading ? (
              <h1 className="loading">Loading...</h1>
            ) : searchInput.length > 1 ? (
              <div className="countries">
                {filtered.map((country) => {
                  const { ccn3, name, population, region, languages } =
                    country;
                    
                  function getlenguaje() {
                    let claves = Object.keys(languages || {});
                    for (let i = 0; i < claves.length; i++) {
                      let clave = claves[i];
                      const uno = languages[clave];
                      return uno;
                    }
                  }
                  const dos = getlenguaje();

              

                  return (
                  
                    
                    <tr key={ccn3}>
                      
                      <td>
                        <img src={country.flags.png} alt={name} />
                      </td>
                      <td>{country.name.official}</td>
                      <td>{region}</td>
                      <td>{population}</td>

                      <td> {dos}</td>
                      
                      <td>
                        <Link to={`/countries/${country.name.official}`}>
                          <button className="boton1"> {">"} </button>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </div>
            ) : (
              <div className="countries">
                {countries.map((country) => {
                  const {
                    ccn3,
                    name,
                    flag,
                    population,
                    region,
                    capital,
                    languages,
                  } = country;

                 

                  function getlenguaje() {
                    let claves = Object.keys(languages || {});

                    for (let i = 0; i < claves.length; i++) {
                      let clave = claves[i];

                      const uno = languages[clave];

                      return uno;
                    }
                  }

                  const dos = getlenguaje();

                  return (
                    <tr key={ccn3}>
                     
                      <td>
                        <img src={country.flags.png} alt={name} />
                      </td>
                      <td>{country.name.official}</td>
                      <td>{region}</td>
                      <td>{population}</td>

                      <td> {dos}</td>
                     
                      <td>
                        <Link to={`/countries/${country.name.official}`}>
                          <button className="boton1"> {">"} </button>
                        </Link>
                      </td>
                      
                    </tr>
                  );
                })}
                
              </div>
            )}
          </div>
        </tbody>
      </table>
      
    </>
  );
};

export default Countries;

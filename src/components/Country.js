import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Country = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      );
      const country = await response.json();
      setCountry(country);
      console.log(name);
    };

    fetchCountryData();
  }, [name]);

  return (
    <>
      <div className="header">
        <div>
          <header>
            <h1>Country</h1>
          </header>
        </div>
      </div>
      <section>
        {country.map((c) => {
          const {
            ccn3,
            flag,
            name,
            population,
            region,
            languages,
            capital,
            subregion,
            latlng,
          } = c;

          const language = JSON.stringify(languages);

          return (
            <article key={ccn3}>
              <div>
                <div className="titulo-imagen">
                  <h2>{c.name.official}</h2>
                  <h5>({capital})</h5>
                  <br></br>
                  <img className="img-pais" src={c.flags.png} alt={name} />
                </div>

                <br></br>
                <div className="texto-pais">
                  <p>
                    The country belongs to{" "}
                    <span className="azul">{region}</span> region and{" "}
                    <span className="azul">{subregion}</span> sub-region.
                    Located at the{" "}
                    <span className="azul">{Math.trunc(latlng[0])}</span> ºN and{" "}
                    <span className="azul">{Math.trunc(latlng[1])}</span> ºW ,
                    this country has population of{" "}
                    <span className="azul">{population}</span> and it has gained
                    the independent, according to the CIA World Factbook.
                  </p>
                  {/*               
                    <h5>
                      Languages: <span>{language}</span>
                    </h5>*/}
                </div>
              </div>

              <div></div>
            </article>
          );
        })}
        <div className="boton-volver">
          <Link to={`/`}>
            <button className="boton2"> Back </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Country;

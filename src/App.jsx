import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Loader from './components/loader/Loader';

const App = () => {
  const [country, setCountry] = useState(0);
  const url = 'https://restcountries.com/v3.1/name/argentina';
  const traerDataDePais = async () => {
    try {
      const res = await axios.get(url);
      setCountry(res.data[0]);
      console.log(res.data[0]);
    } catch (error) {
      console.log('tienes un grave error');
    }
  };

  useEffect(() => {
    traerDataDePais();
  }, []);

  return (
    <div className="bg-neutral-800 h-full flex flex-col justify-center items-center p-10 text-white text-xl5">
      <h1 className="text-4xl">Countries Wiki</h1>
      {!country ? (
        <Loader />
      ) : (
        <article className="p-6 w-8/12 bg-yellow-400">
          <div>
            <img src={country.flags.svg} alt={country.flags.alt} />
          </div>
          <ul className="mt-5">
            <li className="text-4xl">{country.name.common}</li>
            <li>Poblacion: {country.population} Habitantes</li>
            <li>Continet: {country.continents}</li>
          </ul>
        </article>
      )}
    </div>
  );
};

export default App;

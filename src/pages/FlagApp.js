import React, { useState, useEffect } from "react";

const FlagApp = () => {
  const [ulkeler, setUlkeler] = useState([]);
  console.log(ulkeler);
  useEffect(() => {
    fetch("https://restcountries.com/v3/all")
      .then((res) => res.json())
      .then((data) => setUlkeler(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>ULKELER</h1>
      {ulkeler.map((ulke) => {
        const { name, capital, flags } = ulke;
        return (
          <div>
            <h2>{name.common}</h2>
            <img src={flags[0]} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default FlagApp;

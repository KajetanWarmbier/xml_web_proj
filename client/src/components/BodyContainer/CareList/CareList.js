import Axios from "axios";
import { useEffect, useState } from "react";

import Care from "./Care";

const CareList = () => {
  const [careList, setCareList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/szpital/opiekamedyczna")
      .then((response) => {
        setCareList(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <div className="min-w-full h-fit">
      <div className="min-w-max grid grid-cols-4 content-evenly justify-evenly justify-items-center h-[3rem] bg-gray-300 rounded-t-md text-gray-900 font-semibold">
        <div>ID</div>
        <div>IMIĘ</div>
        <div>NAZWISKO</div>
        <div>SPECJALIZACJA</div>
      </div>
      {careList.length > 0 ? careGenerator() : <h1>Loading</h1>}
    </div>
  );

  function careGenerator() {
    return careList.map((care) => {
      return (
        <Care
          id={care._attributes.id}
          imie={care.imie._text}
          nazwisko={care.nazwisko._text}
          specjalizacja={care.specjalizacja._text}
        />
      );
    });
  }
};

export default CareList;

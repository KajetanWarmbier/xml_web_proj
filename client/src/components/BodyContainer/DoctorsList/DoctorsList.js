import Axios from "axios";
import { useEffect, useState } from "react";

import Doctor from "./Doctor";

const DoctorsList = () => {
  const [doctorsList, setDoctorsList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/szpital/zespolmedyczny")
      .then((response) => {
        setDoctorsList(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <div className="min-w-full h-fit">
      <div className="min-w-max grid grid-cols-5 content-evenly justify-evenly justify-items-center h-[3rem] bg-gray-300 rounded-t-md text-gray-900 font-semibold">
        <div>ID</div>
        <div>IMIĘ</div>
        <div>NAZWISKO</div>
        <div>SPECJALIZACJA</div>
        <div>POKÓJ</div>
      </div>
      {doctorsList.length > 0 ? doctorGenerator() : <h1>Loading</h1>}
    </div>
  );

  function doctorGenerator() {
    return doctorsList.map((doctor) => {
      return (
        <Doctor
          id={doctor._attributes.id}
          imie={doctor.imie._text}
          nazwisko={doctor.nazwisko._text}
          specjalizacja={doctor.specjalizacja._text}
          pokoj={doctor.pokoj._text}
        />
      );
    });
  }
};

export default DoctorsList;

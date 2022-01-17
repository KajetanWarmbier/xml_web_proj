import Axios from "axios";
import { useEffect, useState } from "react";
import Patient from "./Patient";

const PatientsList = () => {
  const [patientsList, setPatientsList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/szpital/pacjenci")
      .then((response) => {
        setPatientsList(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <div className="min-w-full h-fit">
      <div className="min-w-max grid grid-cols-7 content-evenly justify-evenly justify-items-center h-[3rem] bg-gray-300 rounded-t-md text-gray-900 font-semibold">
        <div>IMIĘ</div>
        <div>NAZWISKO</div>
        <div>PESEL</div>
        <div>KONTAKT</div>
        <div>CHOROBA</div>
        <div>INFO.</div>
        <div>USUŃ</div>
      </div>
      {patientsList.length > 0 ? patientGenerator() : <h1>Loading</h1>}
    </div>
  );

  function patientGenerator() {
    return patientsList.map((patient) => {
      return <Patient patientData={patient} />;
    });
  }
};

export default PatientsList;

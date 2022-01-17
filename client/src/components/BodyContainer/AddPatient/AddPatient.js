// NEED TO BE CHANGE TO SMALLER COMPONENTS. DON'T JUDGE ME. IT'S 3 A.M. RN

import Axios from "axios";

const AddPatient = () => {
  const dane = {
    imie: "",
    nazwisko: "",
    dataUrodzenia: "",
    plec: "",
    pesel: "",
    kontakt: "",
    grupaKrwi: "",
    nazwaChoroby: "",
    symptomy: "",
    nazwaLeku: "",
    dawkowanie: "",
    nazwaBadania: "",
    lekarzWykonujacyBadania: "",
    dataBadania: "",
    nazwaZabiegu: "",
    lekarzWykonujacyZabieg: "",
    dataZabiegu: "",
    lekarzId: "",
    lekarzImie: "",
    lekarzNazwisko: "",
    lekarzSpecjalizacja: "",
    lekarzPokoj: "",
    pielegniarkaId: "",
    pielegniarkaImie: "",
    pielegniarkaNazwisko: "",
    pielegniarkaSpecjalizacja: "",
  };

  function sendData() {
    if (dane.grupaKrwi === "") {
      alert("Proszę wypełnić wszystkie dane.");
    } else {
      Axios.post("http://localhost:5000/szpital/pacjent", dane)
        .then((response) => {
          alert(`Pacjent ${dane.imie} ${dane.nazwisko} został dodany!`);
          console.log(response);
        })
        .catch((error) => {
          alert(`Dodawanie pacjenta nie powiodło się.`);
        });
    }
  }

  return (
    <div className="min-w-full min-h-full">
      <div className="justify-center align-middle items-center mt-[80px]">
        <div className="grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-8 align-center justify-items-center">
          {/* DANE PACJENTA */}
          <div className="grid grid-rows-8 justify-items-end gap-2">
            <p className="mr-12 font-bold text-2xl">Dane Pacjenta</p>
            <div>
              <label for="imiePacjenta">Imię: </label>
              <input
                className="rounded-md shadow-sm"
                type="text"
                name="imiePacjenta"
                onChange={(event) => {
                  dane.imie = event.target.value;
                }}
              ></input>
            </div>
            <div>
              <label for="nazwiskoPacjenta">Nazwisko: </label>
              <input
                className="rounded-md shadow-sm"
                type="text"
                name="nazwiskoPacjenta"
                onChange={(event) => {
                  dane.nazwisko = event.target.value;
                }}
              ></input>
            </div>
            <div>
              <label for="pesel">Pesel: </label>
              <input
                className="rounded-md shadow-sm"
                type="text"
                name="pesel"
                onChange={(event) => {
                  dane.pesel = event.target.value;
                }}
              ></input>
            </div>
            <div>
              <label for="plec">Płeć: </label>
              <input
                className="rounded-md shadow-sm"
                type="text"
                name="plec"
                onChange={(event) => {
                  dane.plec = event.target.value;
                }}
              ></input>
            </div>
            <div>
              <label for="kontakt">Kontakt: </label>
              <input
                className="rounded-md shadow-sm"
                type="text"
                name="kontakt"
                onChange={(event) => {
                  dane.kontakt = event.target.value;
                }}
              ></input>
            </div>
            <div>
              <label for="dataUro:">Data uro.: </label>
              <input
                className="rounded-md shadow-sm"
                type="text"
                name="dataUro"
                placeholder="xx-xx-xxxx"
                onChange={(event) => {
                  dane.dataUrodzenia = event.target.value;
                }}
              ></input>
            </div>
            <div>
              <label for="grupaKrwi">Grupa Krwi: </label>
              <input
                className="rounded-md shadow-sm"
                type="text"
                name="grupaKrwi"
                onChange={(event) => {
                  dane.grupaKrwi = event.target.value;
                }}
              ></input>
            </div>
          </div>
          {/* LEKARZ OPIEKUN */}
          <div className="grid grid-rows-6 justify-items-end">
            <p className="mr-12 font-bold text-2xl">Lekarz Opiekun</p>
            <div>
              <label for="imieLekarz">Imię: </label>
              <input
                className="rounded-md shadow-sm"
                type="text"
                name="imieLekarz"
                onChange={(event) => {
                  dane.lekarzImie = event.target.value;
                }}
              ></input>
            </div>
            <div>
              <label for="nazwiskoLekarz">Nazwisko: </label>
              <input
                className="rounded-md shadow-sm"
                type="text"
                name="nazwiskoLekarz"
                onChange={(event) => {
                  dane.lekarzNazwisko = event.target.value;
                }}
              ></input>
            </div>
            <div>
              <label for="specjalizacjaLekarz">Specjalizacja: </label>
              <input
                className="rounded-md shadow-sm"
                type="text"
                name="specjalizacjaLekarz"
                onChange={(event) => {
                  dane.lekarzSpecjalizacja = event.target.value;
                }}
              ></input>
            </div>
            <div>
              <label for="idLekarz">ID: </label>
              <input
                className="rounded-md shadow-sm"
                type="text"
                name="idLekarz"
                onChange={(event) => {
                  dane.lekarzId = event.target.value;
                }}
              ></input>
            </div>
            <div>
              <label for="pokojLekarz">Pokój: </label>
              <input
                className="rounded-md shadow-sm"
                type="text"
                name="pokojLekarz"
                onChange={(event) => {
                  dane.lekarzPokoj = event.target.value;
                }}
              ></input>
            </div>
          </div>
          {/* Opieka Medyczna */}
          <div className="grid grid-rows-6 justify-items-end">
            <p className="mr-12 font-bold text-2xl">Opieka Medyczna</p>
            <div>
              <label for="imiePielegniarka">Imię: </label>
              <input
                className="rounded-md shadow-sm"
                type="text"
                name="imiePielegniarka"
                onChange={(event) => {
                  dane.pielegniarkaImie = event.target.value;
                }}
              ></input>
            </div>
            <div>
              <label for="nazwiskoPielegniarka">Nazwisko: </label>
              <input
                className="rounded-md shadow-sm"
                type="text"
                name="nazwiskoPielegniarka"
                onChange={(event) => {
                  dane.pielegniarkaNazwisko = event.target.value;
                }}
              ></input>
            </div>
            <div>
              <label for="specjalizacjaPielegniarka">Specjalizacja: </label>
              <input
                className="rounded-md shadow-sm"
                type="text"
                name="specjalizacjaPielegniarka"
                onChange={(event) => {
                  dane.pielegniarkaSpecjalizacja = event.target.value;
                }}
              ></input>
            </div>
            <div>
              <label for="idPielegniarka">ID: </label>
              <input
                className="rounded-md shadow-sm"
                type="text"
                name="idPielegniarka"
                onChange={(event) => {
                  dane.pielegniarkaId = event.target.value;
                }}
              ></input>
            </div>
          </div>
          {/* Informacje Chorobowe */}
          <div className="grid grid-rows-6 justify-items-end">
            <p className="mr-2 font-bold text-2xl">Informacje Chorobowe</p>
            <div>
              <label for="choroba">Choroba: </label>
              <input
                className="rounded-md shadow-sm"
                type="text"
                name="choroba"
                onChange={(event) => {
                  dane.nazwaChoroby = event.target.value;
                }}
              ></input>
            </div>
            <div>
              <label for="symptomy">Symptomy: </label>
              <input
                className="rounded-md shadow-sm"
                type="text"
                name="symptomy"
                onChange={(event) => {
                  dane.symptomy = event.target.value;
                }}
              ></input>
            </div>
            <div>
              <label for="leki">Leki: </label>
              <input
                className="rounded-md shadow-sm"
                type="text"
                name="leki"
                onChange={(event) => {
                  dane.nazwaLeku = event.target.value;
                }}
              ></input>
            </div>
            <div>
              <label for="dawkowanie">Dawkowanie: </label>
              <input
                className="rounded-md shadow-sm"
                type="text"
                name="dawkowanie"
                onChange={(event) => {
                  dane.dawkowanie = event.target.value;
                }}
              ></input>
            </div>
          </div>
          {/* Informacje Dot. Zabiegu */}
          <div className="grid grid-rows-6 justify-items-end">
            <p className="mr-2 font-bold text-2xl">Informacje Dot. Zabiegu</p>
            <div>
              <label for="zabieg">Zabieg: </label>
              <input
                className="rounded-md shadow-sm"
                type="text"
                name="zabieg"
                onChange={(event) => {
                  dane.nazwaZabiegu = event.target.value;
                }}
              ></input>
            </div>
            <div>
              <label for="lekarzWykonujacyZabieg">Lekarz: </label>
              <input
                className="rounded-md shadow-sm"
                type="text"
                name="lekarzWykonujacyZabieg"
                onChange={(event) => {
                  dane.lekarzWykonujacyZabieg = event.target.value;
                }}
              ></input>
            </div>
            <div>
              <label for="dataZabieg">Data: </label>
              <input
                className="rounded-md shadow-sm"
                type="text"
                name="dataZabieg"
                placeholder="xx-xx-xxxx"
                onChange={(event) => {
                  dane.dataZabiegu = event.target.value;
                }}
              ></input>
            </div>
          </div>
          {/* Informacje Dot. Badania */}
          <div className="grid grid-rows-6 justify-items-end">
            <p className="mr-2 font-bold text-2xl">Informacje Dot. Badania</p>
            <div>
              <label for="badanie">Badanie: </label>
              <input
                className="rounded-md shadow-sm"
                type="text"
                name="zabieg"
                onChange={(event) => {
                  dane.nazwaBadania = event.target.value;
                }}
              ></input>
            </div>
            <div>
              <label for="lekarzWykonujacyBadanie">Lekarz: </label>
              <input
                className="rounded-md shadow-sm"
                type="text"
                name="lekarzWykonujacyBadanie"
                onChange={(event) => {
                  dane.lekarzWykonujacyBadania = event.target.value;
                }}
              ></input>
            </div>
            <div>
              <label for="dataBadania">Data: </label>
              <input
                className="rounded-md shadow-sm"
                type="text"
                name="dataBadania"
                placeholder="xx-xx-xxxx"
                onChange={(event) => {
                  dane.dataBadania = event.target.value;
                }}
              ></input>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={sendData}
        className="bg-blue-200 px-4 py-2 rounded-md text-3xl float-right mr-28 font-semibold hover:bg-blue-400"
      >
        Prześlij
      </button>
    </div>
  );
};

export default AddPatient;

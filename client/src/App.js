import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import HomeMain from "./components/BodyContainer/HomeMain/HomeMain";
import PatientsList from "./components/BodyContainer/PatientsList/PatientsList";
import AddPatient from "./components/BodyContainer/AddPatient/AddPatient";
import DoctorsList from "./components/BodyContainer/DoctorsList/DoctorsList";
import CareList from "./components/BodyContainer/CareList/CareList";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="flex m-[50px] min-w-max h-[80vh] min-h-fit bg-gray-100 rounded-md">
          <Routes>
            <Route exact path="/" element={<HomeMain />} />
            <Route exact path="/Patients" element={<PatientsList />} />
            <Route exact path="/AddPatient" element={<AddPatient />} />
            <Route exact path="/DoctorsList" element={<DoctorsList />} />
            <Route exact path="/CareList" element={<CareList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

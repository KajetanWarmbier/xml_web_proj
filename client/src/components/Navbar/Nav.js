import DropdownMenu from "../HeadlessComponents/DropdownMenu";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="bg-[#9ED1E1] min-w-max h-[65px]">
      <div className="grid grid-cols-2 h-full w-full">
        <div className="flex h-full ml-[50px] items-center align-middle">
          <Link to="/">
            <h1 className="font-semibold font-sans text-[32px] text-gray-50">
              Szpital Leczonko
            </h1>
          </Link>
          <Link to="/">
            <AiOutlinePlusSquare className="text-3xl mt-[6px] ml-2 text-white" />
          </Link>
        </div>
        <div className="flex h-full mr-[50px] items-center align-middle justify-end">
          <div className="grid grid-cols-2">
            <div className="mr-[20px]">
              <DropdownMenu
                name="Pacjenci"
                firstItem="Lista Pacjentów"
                secondItem="Dodaj Pacjenta"
                secondLook="add"
                firstItemLink="/Patients"
                secondItemLink="/AddPatient"
              />
            </div>
            <div>
              <DropdownMenu
                name="Personel"
                firstItem="Lista Lekarzy"
                secondItem="Lista Opieki"
                firstItemLink="/DoctorsList"
                secondItemLink="/CareList"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

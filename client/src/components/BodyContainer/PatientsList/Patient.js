import { AiOutlineDelete, AiOutlineInfoCircle } from "react-icons/ai";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Patient = (props) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <div className="min-w-max grid grid-cols-7 content-evenly justify-evenly justify-items-center h-[3rem] bg-gray-200 text-gray-700 font-normal">
        <div>{props.patientData.pacjentInfo.imie._text}</div>
        <div>{props.patientData.pacjentInfo.nazwisko._text}</div>
        <div>{props.patientData.pacjentInfo.pesel._text}</div>
        <div>{props.patientData.pacjentInfo.kontakt._text}</div>
        <div>
          {props.patientData.pacjentInfo.choroba.rozpoznanie.nazwaChoroby._text}
        </div>
        <div>
          <AiOutlineInfoCircle
            className="mt-1 text-xl hover:text-blue-500 hover:cursor-pointer"
            onClick={openModal}
          />
        </div>
        <div>
          <AiOutlineDelete className="mt-1 text-xl hover:text-red-600" />
        </div>
      </div>
      <hr className="bg-gray-300 h-[2px]"></hr>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="flex justify-center text-3xl font-medium leading-6 text-gray-900"
                >
                  {props.patientData.pacjentInfo.imie._text}{" "}
                  {props.patientData.pacjentInfo.nazwisko._text}
                </Dialog.Title>
                <div className="mt-5">
                  <div className="grid grid-cols-2 justify-content-center gap-4">
                    <div className="grid grid-rows-4 justify-items-end font-semibold text-black">
                      <h1>Płeć:</h1>
                      <h1>Grupa Krwi:</h1>
                      <h1>Leki:</h1>
                      <h1>Badania:</h1>
                      <h1>Lekarz Wykonujący:</h1>
                      <h1>Data Badania:</h1>
                    </div>
                    <div className="grid grid-rows-4 justify-items-start font-semibold">
                      <h1>{props.patientData.pacjentInfo.plec._text}</h1>
                      <h1>{props.patientData.pacjentInfo.grupaKrwi._text}</h1>
                      <h1>
                        {
                          props.patientData.pacjentInfo.choroba.sposobLeczenia
                            .leki.lek.nazwaLeku._text
                        }
                      </h1>
                      <h1>
                        {
                          props.patientData.pacjentInfo.choroba.sposobLeczenia
                            .badania.nazwaBadania._text
                        }
                      </h1>
                      <h1>
                        {
                          props.patientData.pacjentInfo.choroba.sposobLeczenia
                            .badania.lekarzWykonujacy._text
                        }
                      </h1>
                      <h1>
                        {
                          props.patientData.pacjentInfo.choroba.sposobLeczenia
                            .badania.dataBadania._text
                        }
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="float-right inline-flex justify-center px-3 py-3 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-600"
                    onClick={closeModal}
                  >
                    <AiOutlineClose />
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Patient;

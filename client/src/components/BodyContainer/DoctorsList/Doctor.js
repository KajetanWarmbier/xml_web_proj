const Doctor = (props) => {
  return (
    <div>
      <div className="min-w-max grid grid-cols-5 content-evenly justify-evenly justify-items-center h-[3rem] bg-gray-200 text-gray-700 font-normal">
        <div>{props.id}</div>
        <div>{props.imie}</div>
        <div>{props.nazwisko}</div>
        <div>{props.specjalizacja}</div>
        <div>{props.pokoj}</div>
      </div>
      <hr className="bg-gray-300 h-[2px]"></hr>
    </div>
  );
};

export default Doctor;

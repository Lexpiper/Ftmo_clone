import data from "../constants/data";

const Currency = () => {
  return (
    <div className="flex flex-col items-center flex-wrap justify-start w-full h-full bg-[#f4f4f4]  ">
      <div className="flex flex-row items-center w-full justify-start text-[16px] font-bold pb-[10px] pt-[20px]">
        Currency:
      </div>
      <div className="flex ">
        {data.currency.map((cur) => (
          <div
            className="shadow-lg bg-white mx-4 flex flex-row h-[45px] rounded-[5px] items-center justify-center w-[130px] gap-[10px] text-[14px] font-medium"
            key={cur.id}
          >
            <img
              className="w-[30px] h-auto max-w-full inline-block"
              src={cur.img}
              alt="img"
            />
            <span>{cur.sign}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Currency;

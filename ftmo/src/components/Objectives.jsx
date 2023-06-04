import Currency from "./Currency";
import ObjTable from "./ObjTable";
import data from "../constants/data";

const Objectives = () => {
  return (
    <div className="flex flex-col bg-[#f4f4f4] px-5 md:px-20 py-10">
      <h3 className="text-[#262729] text-[1.875rem] font-poppins font-medium tracking-wider mb-6 md:mb-10">
        Know your Trading objectives
      </h3>
      <span className="text-[#555B6C] text-sm md:text-base leading-[24px] tracking-wider font-poppins">
        Before we allow you to trade for our Proprietary Trading Firm, we need
        to be sure that you can manage risk. For this reason, we developed
        Trading Objectives. By meeting the Trading Objectives, you prove that
        you are a disciplined and experienced trader. Your trading style is
        entirely up to you; we don&apos;t set any limits on instruments or
        position size you trade.
      </span>
      <Currency />
      <div className="text-base font-bold pb-2 pt-6 md:pt-10">Risk:</div>
      <div className="flex flex-wrap items-center gap-4 md:gap-8">
        <div className="bg-primary mx-2 md:mx-4 shadow-lg flex flex-row h-[45px] rounded-[5px] items-center justify-center w-[130px] text-sm md:text-base font-medium">
          Normal
        </div>
        <div className="bg-white text-[#313234] mx-2 md:mx-4 shadow-lg flex flex-row h-[45px] rounded-[5px] items-center justify-center w-[130px] text-sm md:text-base font-medium">
          Normal
        </div>
      </div>
      <div className="text-base font-bold pb-2 pt-6 md:pt-10">Balance:</div>
      <div className="flex flex-wrap items-center gap-4 md:gap-8">
        {data.amount.map((amt) => (
          <div
            key={amt.id}
            className="bg-white mx-2 md:mx-4 shadow-lg flex flex-row h-[45px] rounded-[5px] items-center justify-center w-[130px] text-sm md:text-base font-medium"
          >
            {amt.size}
          </div>
        ))}
      </div>
      <div className="w-full h-full pt-10">
        <ObjTable />
      </div>
    </div>
  );
};

export default Objectives;

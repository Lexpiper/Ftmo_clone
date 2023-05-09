import Currency from "./Currency";
import styles from "../constants/styles";
import ObjTable from "./ObjTable";
const Objectives = () => {
  return (
    <div className="flex flex-col bg-[#f4f4f4] px-10 pt-20">
      <h3 className="text-[#262729] text-[1.875rem] font-poppins font-medium tracking-wider mb-[30px] pb-[10px] w-full clear-both">
        Know your Trading objectives
      </h3>
      <span className="text-[#555B6C] text-[0.875rem] leading-6 tracking-wider font-poppins">
        Before we allow you to trade for our Proprietary Trading Firm, we need
        to be sure that you can manage risk. For this reason, we developed
        Trading Objectives. By meeting the Trading Objectives, you prove that
        you are a disciplined and experienced trader. Your trading style is
        entirely up to you; we don&apos;t set any limits on instruments or
        position size you trade.
      </span>
      <Currency />
      <div className=" justify-start text-[16px] font-bold pb-[10px] pt-[20px]">
        Risk:
      </div>
      <div className="flex-wrap flex items-cent gap-[20px] flex-start">
        <div className=" bg-primary mx-4 shadow-lg flex flex-row h-[45px] rounded-[5px] items-center justify-center w-[130px] gap-[10px] text-[14px] font-medium">
          Normal
        </div>
        <div className="bg-white text-[#313234] mx-4 shadow-lg flex flex-row h-[45px] rounded-[5px] items-center justify-center w-[130px] gap-[10px] text-[14px] font-medium">
          Normal
        </div>
      </div>
      <div className="justify-start text-[16px] font-bold pb-[10px] pt-[20px]">
        Balance:
      </div>
      <div className="flex-wrap flex items-cent gap-[20px] flex-start">
        {styles.amount.map((amt) => (
          <div
            key={amt.id}
            className=" bg-white mx-4 shadow-lg flex flex-row h-[45px] rounded-[5px] items-center justify-center w-[130px] gap-[10px] text-[14px] font-medium"
          >
            {amt.size}
          </div>
        ))}
      </div>
      <div className="w-full h-full pt-20">
        <ObjTable />
      </div>
    </div>
  );
};

export default Objectives;

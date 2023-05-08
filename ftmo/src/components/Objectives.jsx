import Currency from "./Currency";

const Objectives = () => {
  return (
    <div className="flex flex-col bg-[#f4f4f4] px-10">
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
      <div></div>
      <div></div>
    </div>
  );
};

export default Objectives;

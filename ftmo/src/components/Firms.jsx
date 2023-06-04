import Awards from "./Awards";
import Cards from "./Cards";

const Firms = () => {
  return (
    <div className="w-[90%] h-full mx-auto">
      <div>
        <h3 className="text-[#262729] text-[1.875rem] font-poppins font-semibold tracking-wider mb-[.5rem]">
          FTMO Is the Best Proprietary Trading Firm
        </h3>
        <h3 className="text-[#262729] text-[1.875rem] font-poppins font-semibold tracking-wider mb-[.5rem]">
          You Can Find. <span className="text-[#0781fe]">Here’s why.</span>{" "}
        </h3>
        <Awards />
        <Cards/>
      </div>
    </div>
  );
};

export default Firms;

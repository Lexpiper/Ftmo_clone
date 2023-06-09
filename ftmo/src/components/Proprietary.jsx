import PropTypes from "prop-types";
import { useState } from "react";
import PropSlide from "./PropSlide";
import data from "../constants/data";

const Proprietary = () => {
  const [tab, settab] = useState(1);
  const [selected, setselected] = useState(1);

  const TabHeader = ({ id, no, text }) => {
    return (
      <div
        onClick={() => {
          settab(id);
          setselected(id);
        }}
        className={
          selected == id
            ? "flex h-[80px] cursor-pointer items-center justify-center border-b-2 border-[#0781fe] text-black"
            : "flex hover:text-[#262729] text-[#cbcbcb] transition-all ease-out duration-700 h-[80px] cursor-pointer  items-center justify-center "
        }
      >
        <h1
          className={`${
            selected
              ? "text-[#0781fe]"
              : "text-[#c6c6c6] text-[1.25rem] font-poppins font-semibold leading-[20px]"
          } `}
        >
          {no}
        </h1>
        <div className=" px-3 font-semibold ">
          {text[0].toUpperCase() + text.substring(1)}
        </div>
      </div>
    );
  };
  TabHeader.propTypes = {
    id: PropTypes.number,
    no: PropTypes.string,
    text: PropTypes.string,
  };

  const PropData = [
    {
      id: 1,
      no: "01.",
      text: "Customs Apps",
    },
    {
      id: 2,
      no: "02",
      text: "Account Analysis",
    },
    {
      id: 3,
      no: "03.",
      text: "Customer Support",
    },
    {
      id: 4,
      no: "04.",
      text: "Trading Academy",
    },
    {
      id: 5,
      no: "05",
      text: "Performance Coach",
    },
  ];

  return (
    <div className="pt-20 px-10 w-[90%] mx-auto overflow-hidden rounded-md  h-full bg-[#ffffff]">
      <div>
        <h3 className="text-[#262729] text-[1.875rem] font-poppins font-normal tracking-wider">
          We are more than just a Proprietary Trading Firm
        </h3>
        <span className="text-[1.25rem] text-[#555b6c] font-poppins font-medium text-left">
          Find out how you can benefit with FTMO.
        </span>
      </div>
      <div className="grid grid-cols-5 mb-4">
        {PropData.map(({ id, no, text }, i) => (
          <TabHeader id={id} no={no} text={text} key={i} />
        ))}
      </div>
      <div>
        {tab == 1 && (
          <div>
            <PropSlide slides={data.PropData1} />
          </div>
        )}
        {tab == 2 && (
          <div>
            <PropSlide slides={data.PropData2} />
          </div>
        )}
        {tab == 3 && (
          <div>
            <PropSlide slides={data.PropData3} />
          </div>
        )}
        {tab == 4 && (
          <div>
            <PropSlide slides={data.PropData4} />
          </div>
        )}
        {tab == 5 && (
          <div>
            <PropSlide slides={data.PropData5} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Proprietary;

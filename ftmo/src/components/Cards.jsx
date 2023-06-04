import { AiOutlineSearch } from "react-icons/ai";
import data from "../constants/data";

const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.Cards.map((c) => (
        <div
          key={c.id}
          className="pt-8 md:pt-[50px] bg-transparent gap-4 rounded-[10px] border-2 px-4 py-4"
        >
          <div className="flex items-center text-lg md:text-xl gap-4 md:gap-15 font-semibold pb-4">
            <AiOutlineSearch />

            <div className="text-lg leading-[20px] text-start align-baseline font-poppins">
              {c.title}
            </div>
          </div>
          <div className="text-sm md:text-base leading-[24px] text-[#535456] tracking-wider">
            {c.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;

import PropTypes from "prop-types";
import Button from "./button";

const PropSlide = ({ slides }) => {
  return (
    <div className="w-full h-full py-6">
      {slides.map((i) => (
        <div
          key={i.id}
          className="w-full h-full flex items-center justify-between gap-4  border-2"
        >
          <div className="flex-1 w-[50%] h-full">
            <img
              className="w-full h-full object-cover"
              src={i.img}
              alt=""
            />
          </div>

          <div className="flex flex-1 flex-col w-full h-full justify-between">
            <h3 className="text-[#0781fe] text-[1.875rem] font-poppins font-semibold tracking-wider leading-5 mt-4">
              {i.num}
            </h3>
            <h3 className="text-[1.25rem] text-[#262729] font-semibold tracking-wider font-poppins leading-3 mt-5">
              {i.title}
            </h3>
            <p className="leading-6 text-[0.875rem] text-[#555b6c] font-poppins tracking-wider my-5 ">
              {i.text}
            </p>
            <Button title={i.btnText} />
          </div>
        </div>
      ))}
    </div>
  );
};

PropSlide.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      num: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      btnText: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PropSlide;

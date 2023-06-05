import PropTypes from "prop-types";
const Button = ({ bg, title, hover, border, padding, width }) => {
  return (
    <div
      className={`text-white ${bg ? bg : "bg-primary"} ${
        padding ? padding : "py-4 px-2"
      }  rounded-[10px] ${width ? width : "w-48"}  text-center ${
        hover ? hover : null
      } ${
        border ? border : "border-none"
      } transition-all ease-in-out duration-300 cursor-pointer font-poppins`}
    >
      <a href="">{title}</a>
    </div>
  );
};
Button.propTypes = {
  bg: PropTypes.string, //added validation for the 'bg' prop
  title: PropTypes.string.isRequired,
  hover: PropTypes.string,
  border: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
};
export default Button;

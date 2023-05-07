import PropTypes from "prop-types";
const Button = ({ bg, title, hover, border }) => {
  return (
    <div
      className={`text-white ${
        bg ? bg : "bg-primary"
      } py-4 px-2 rounded-lg w-48 text-center ${
        hover ? hover : "hover:bg-white"
      } ${border ? border : "border-none"} transition-all ease-in-out duration-300 cursor-pointer`}
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
};
export default Button;

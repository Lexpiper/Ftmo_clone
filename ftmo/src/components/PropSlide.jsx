import Button from "./button";

const PropSlide = () => {
  return (
    <div className="w-[90%] h-full flex items-center justify-center gap-4 pt-8">
      <div className="w-full h-full">
        <img src="https://ftmo.com/wp-content/uploads/2022/11/01.jpg" alt="" />
      </div>
      <div className="flex flex-col w-full h-full justify-between px-8 ">
        <h3 className="text-[#0781fe] text-[1.875rem] font-poppins font-semibold tracking-wider leading-5 mb-10">
          01.
        </h3>
        <h3 className="text-[1.25rem] text-[#262729] font-semibold tracking-wider font-poppins leading-5 pb-10">
          Benefit from our custom trading apps
        </h3>
        <p className="leading-6 text-[0.875rem] text-[#555b6c] font-poppins tracking-wider mb-[2rem]">
          We’ve developed several apps for our traders. Some of them will help
          you with discipline, while others can assist with journaling or
          analysing the markets.
        </p>
        <Button title={"Learn More"}/>
      </div>
    </div>
  );
};

export default PropSlide;

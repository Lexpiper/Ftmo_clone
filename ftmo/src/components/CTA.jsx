import Button from "./button";

const CTA = () => {
  return (
    <div className="bg-[#4b77f0] flex flex-col items-center justify-center w-full h-full py-10">
      <div className="flex items-center justify-center">
        <img
          src="https://ftmo.com/wp-content/uploads/2022/01/ftmo_logo.svg"
          alt="FTMO Logo"
        />
      </div>
      <div className="text-2xl md:text-3xl lg:text-4xl text-white font-poppins font-medium text-center mt-4">
        Join the team
      </div>
      <div className="text-2xl md:text-3xl lg:text-4xl text-white font-poppins font-medium text-center mt-1">
        of our experienced traders
      </div>
      <div className="flex items-center justify-center gap-5 mt-5">
        <Button bg="bg-black" title="FTMO Challenge" padding="px-3 py-2" />
        <Button
          title="Free Trial"
          bg="bg-transparent"
          border="border-2"
          padding="px-3 py-2"
        />
      </div>
    </div>
  );
};

export default CTA;

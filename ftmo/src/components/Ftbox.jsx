import Button from "./button";

const Ftbox = () => {
  return (
    <div className="w-full h-full bg-[#F4F4F4] max-w-[1320px] mb-20 ">
      <div className="border-4 border-dashed border-primary max-w-[900px] mx-auto">
        <div className="text-[2.5rem] leading-[50px] my-[20px] text-[#262729] font-poppins text-center font-semibold tracking-wider">
          <h3>Join out team</h3>
          <h3>of experienced traders</h3>
        </div>
        <h2 className="p-[0.80px] mb-[48px] text-[#555B6C] font-poppins text-center text-[0.875rem] font-medium tracking-wider">
          If you are ready, accept our FTMO Challenge and become our FTMO
          Trader. <br />
          You can even try the entire process completely free of charge.
        </h2>
        <div className="flex item-center justify-center gap-x-5">
          <Button />
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Ftbox;

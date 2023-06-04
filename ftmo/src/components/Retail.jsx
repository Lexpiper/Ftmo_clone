const Retail = () => {
  return (
    <div className="w-full h-full pt-10 md:pt-20">
      <div className="w-full flex flex-col items-center justify-center mx-auto gap-4 md:gap-10">
        <div className="text-center">
          <h3 className="font-poppins text-2xl md:text-[1.875rem] mb-6 md:mb-[30px] tracking-wider text-[#000] font-semibold">
            The most popular <br /> retail trading platforms
          </h3>
          <p className="text-sm md:text-base">
            We offer all our clients the best trading solution in the form of
            our MT4, MT5, and cTrader accounts powered by data feed directly from
            our pool of prime liquidity providers. We do our best to simulate
            the real market conditions with super-raw spreads, very low
            commission, and no markup to all demo trading accounts with virtual
            funds.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          <img
            src="https://ftmo.com/wp-content/uploads/2021/03/MT4.png"
            alt="class"
            className="w-14 md:w-24 mx-2 md:mx-4"
          />
          <img
            src="https://ftmo.com/wp-content/uploads/2021/03/MT4.png"
            alt="class"
            className="w-14 md:w-24 mx-2 md:mx-4"
          />
          <img
            src="https://ftmo.com/wp-content/uploads/2021/03/MT4.png"
            alt="class"
            className="w-14 md:w-24 mx-2 md:mx-4"
          />
        </div>
        <img
          src="https://ftmo.com/wp-content/uploads/2021/03/Group-1961.png"
          alt="image"
          className="w-full md:w-auto mt-6 md:mt-0"
        />
      </div>
    </div>
  );
};

export default Retail;

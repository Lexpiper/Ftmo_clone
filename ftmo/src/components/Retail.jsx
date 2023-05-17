const Retail = () => {
  return (
    <div className="w-full h-full pt-20 ">
      <div className="w-full flex items-center justify-center mx-auto gap-10">
        <div>
          <h3 className="font-poppins text-[1.875rem] mb-[30px] tracking-wider text-[#000] font-semibold">
            The most popular <br /> retail trading platforms
          </h3>
          <p>
            We offer all our clients the best trading solution in the form of
            our MT4, MT5 and cTrader accounts powered by data feed directly from
            our pool of prime liquidity providers. We do our best to simulate
            the real market conditions with super-raw spreads, very low
            commission and no markup to all demo trading accounts with virtual
            funds
          </p>
          <div className="flex items-center justify-center">
            <img
              src="https://ftmo.com/wp-content/uploads/2021/03/MT4.png"
              alt="claa"
            />
            <img
              src="https://ftmo.com/wp-content/uploads/2021/03/MT4.png"
              alt="claa"
            />
            <img
              src="https://ftmo.com/wp-content/uploads/2021/03/MT4.png"
              alt="claa"
            />
          </div>
        </div>
        <img
          src="https://ftmo.com/wp-content/uploads/2021/03/Group-1961.png"
          alt="image"
        />
      </div>
    </div>
  );
};

export default Retail;

const Paysystem = () => {
  return (
    <div className="w-full h-full pt-20 ">
      <div className="w-full  flex items-center justify-center mx-auto gap-10">
        <img
          src="https://ftmo.com/wp-content/uploads/2021/11/Frame-968-1.png"
          alt="image"
        />
        <div>
          <h3 className="font-poppins text-[1.875rem] mb-[30px] tracking-wider text-[#000] font-semibold">
            Payout System
          </h3>
          <p>
            The default payout ratio for all FTMO Traders is set to 80:20,
            however, an 80% <br />
            share is not where we draw the line
          </p>
          <p>
            If you meet the conditions of our Scaling Plan, not only do we
            increase the balance of your FTMO Account by 25%, the payout ratio
            will also automatically change to a staggering 90:10!
          </p>
          <p>
            All FTMO Traders can request payout on-demand. The payout can be
            processed just after 14 days, but you also have the ability to
            choose your own Profit Split Day, which can be even changed up to
            three times. In conclusion, we make sure that you will always
            receive your withdrawal on your most convenient day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Paysystem;

const Propinfo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-[#f4f4f4] py-10 px-5 md:px-20">
      <div className="md:w-1/2">
        <img
          src="https://ftmo.com/wp-content/uploads/2022/09/Frame-7844.png"
          alt="img"
          className="w-full"
        />
      </div>
      <div className="md:w-1/2 px-10">
        <h3 className="leading-[1.2] text-[1.875rem] font-semibold font-poppins tracking-wider pb-6 md:pb-10">
          Trade for Proprietary <br /> Trading Firm
        </h3>

        <p className="mb-6 md:mb-10 text-sm md:text-base leading-[24px] text-[#555B6C] tracking-wider font-poppins">
          FTMO developed a unique 2-step Evaluation Course for traders. This
          Evaluation Process consists of an{" "}
          <strong className="text-primary">FTMO Challenge</strong> and
          Verification and is specifically tailored to discover trading talents.
        </p>
        <p className="mb-6 md:mb-10 text-sm md:text-base leading-[24px] text-[#555B6C] tracking-wider font-poppins">
          Upon successful completion of the Evaluation Course, you are offered a
          placement in the FTMO Proprietary Trading firm where you can remotely
          manage an FTMO Account with a balance of up to
          <strong className="text-primary">400,000 USD</strong>. Your journey
          to get there might be challenging, but our educational applications,
          account analysis, and performance coach are here to help you on the
          endeavor to financial independence.
        </p>
      </div>
    </div>
  );
};

export default Propinfo;

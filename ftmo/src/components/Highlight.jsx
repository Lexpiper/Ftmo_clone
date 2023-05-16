import { RiFilePaperLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { BiStopwatch } from "react-icons/bi";

const Highlight = () => {
  return (
    <div className="bg-[#f4f4f4] py-10 px-20">
      <div className="text-[#262729] text-[1.875rem] font-poppins font-medium tracking-wider mb-[30px] pb-[10px] w-full clear-both">
        Key Highlights
      </div>
      <div className="flex items-center justify-center p-4">
        <div className="grid grid-cols-1 items-center justify-center  w-full h-full bg-[#f4f4f4]">
          <div className="flex items-center pb-6">
            <SlCalender className="text-blue-500 text-2xl mr-3" />
            <div className="text-lg tracking-wider font-poppins font-medium text-[#262729]">
              Swing Account
            </div>
          </div>
          <div>
            <p className="font font-poppins tracking-wider leading-6 text-[0.875rem] font-medium w-full text-[#555B6C]">
              Pick the FTMO Account that perfectly suits your trading style and
              needs. FTMO Account Swing has no restrictions on holding positions
              over the weekend or trading during macroeconomic releases.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center justify-center  w-full h-full bg-[#f4f4f4]">
          <div className="flex items-center pb-6">
            <RiFilePaperLine className="text-blue-500 text-2xl mr-3" />
            <div className="text-lg tracking-wider font-poppins font-medium text-[#262729]">
              Scaling Plan
            </div>
          </div>
          <div>
            <p className="font font-poppins tracking-wider leading-6 text-[0.875rem] font-medium w-full text-[#555B6C]">
              We aim for long-term business relationships. If you manage to be
              consistent and profitable, we will increase the balance of your
              FTMO Account by 25% every 4 months according to the Scaling Plan
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center justify-center  w-full h-full bg-[#f4f4f4]">
          <div className="flex items-center pb-6">
            <BiStopwatch className="text-blue-500 text-2xl mr-3" />
            <div className="text-lg tracking-wider font-poppins font-medium text-[#262729]">
              Free Trial
            </div>
          </div>
          <div>
            <p className="font font-poppins tracking-wider leading-6 text-[0.875rem] font-medium w-full text-[#555B6C]">
              If you are still not sure, you have the option to try the process
              completely for free. The Free Trial account is a shortened version
              of our FTMO Challenge with the same trading conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;

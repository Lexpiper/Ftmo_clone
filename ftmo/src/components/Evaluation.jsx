import Button from "./button";
import data from "../constants/data";

const Evaluation = () => {
  return (
    <div className="bg-[#f4f4f4] w-full mt-20">
      <h3 className="text-center mb-10 bg-[#f4f4f4] w-full text-[2.0rem] text-primary font-poppins font-semibold tracking-wider">
        EVALUATION PROCESS
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#f4f4f4]">
        <div className="sm:col-span-2">
          <div className="flex flex-col items-center">
            <span>This is where we evaluate your trading</span>
            <div className="flex flex-col sm:flex-row items-center w-full">
              {data.Eval.map((eva) => (
                <div
                  key={eva.id}
                  className="flex flex-col w-full sm:w-1/2 m-3 sm:m-[6.5%] min-h-[309px] p-[25px] rounded-[20px] text-left align-top bg-white"
                >
                  <div className="text-[#c6c6c6] text-[2.5rem] font-poppins leading-[50px] font-semibold">
                    {eva.No}
                  </div>
                  <div className="text-[#262729] font-poppins text-[1.5rem] leading-[30px] font-semibold tracking-wider mb-[10px]">
                    {eva.title}
                  </div>
                  <div className="text-[#555B6C] font font-poppins text-[0.875rem] tracking-wider leading-6 font-medium mb-5">
                    {eva.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full inline-block relative mb-0 min-h-[309px] p-[25px] rounded-[20px] text-left align-top bg-white">
          <Button
            padding={"px-[20px] py-[10px]"}
            bg={"bg-[#00C7B4]"}
            width={"w-full"}
            title="EARN REAL MONEY"
          />
          <div className="text-alt text-[2.5rem] font-poppins leading-[50px] font-semibold mt-5">
            03.
          </div>
          <div className="text-[#262729] font-poppins text-[1.5rem] leading-[30px] font-semibold tracking-wider mb-[10px]">
            FTMO Trader
          </div>
          <div className="text-[#555B6C] font font-poppins text-[0.875rem] tracking-wider leading-6 font-medium mb-5">
            You are becoming a trader of the FTMO Proprietary Trading firm.
            Trade responsibly and consistently and receive up to 90% of your
            profits. If you consistently generate profits on your FTMO Account,
            we can scale your account according to our Scaling Plan.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evaluation;

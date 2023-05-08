import Button from "../components/button";
const Hero = () => {
  return (
    <div className="h-screen w-full bg-[#212222] ">
      <div className="flex flex-col md:flex-row items-center pt-14 px-16 gap-5">
        <div className="flex-1  font-poppins text-white flex flex-col pt-10">
          <span className="font-[100] text-6xl"> FOREX TRADERS</span>
          <span className="text-6xl tracking-[-2px] block font-semibold leading-[60px]">
            WANTED
          </span>
          <div className="mt-10 ">
            <span className="text-[1.25rem] leading-[32px] font-semibold font-poppins">
              Trade our company&apos;s capital.
              <br /> Receive up to 90% of profits, we cover the losses.
            </span>
          </div>
          <div className="flex items-center gap-7  w-full h-full mt-10 text-lg font-poppins">
            <Button 
              bg={"bg-primary"}
              title={"FTMO Challenge"}
              hover={"hover:bg-[#2c94fe]"}
            />
            <Button
              bg={"bg-secondary"}
              title={"Free Trial"}
              hover={"hover:bg-white hover:text-secondary"}
              border={"border-2"}
            />
          </div>
        </div>

        <div className="relative w-full h-[600px] bg-contain bg-x- bg-no-repeat flex-1 bg-[url('https://ftmo.com/wp-content/themes/ftmo-com/public/images//hero_mobile.png')] bg-center">
          <div className="absolute  inset-0 items-center justify-center flex">
            <a href="">
              <img
                src="https://ftmo.com/wp-content/themes/ftmo-com/public/images/hero_play_btn.png"
                className=""
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
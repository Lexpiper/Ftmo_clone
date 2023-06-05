import Button from "./button";

const Hero = () => {
  return (
    <div className="h-screen w-full bg-[#212222] px-4 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row items-center pt-14 md:pt-20 lg:pt-24 gap-5">
        <div className="flex-1 font-poppins text-white flex flex-col pt-10">
          <span className="font-thin text-4xl md:text-5xl lg:text-6xl">
            FOREX TRADERS
          </span>
          <span className="text-4xl md:text-5xl lg:text-6xl tracking-tighter block font-semibold leading-tight">
            WANTED
          </span>
          <div className="mt-10">
            <span className="text-lg md:text-xl lg:text-2xl leading-relaxed font-semibold font-poppins">
              Trade our company&apos;s capital.
              <br /> Receive up to 90% of profits, we cover the losses.
            </span>
          </div>
          <div className="flex items-center gap-7 mt-10">
            <Button
              bg="bg-primary"
              title="FTMO Challenge"
              hover="hover:bg-[#2c94fe]"
            />
            <Button
              bg="bg-transparent"
              title="Free Trial"
              hover="hover:bg-white hover:text-black"
              border="border-2"
            />
          </div>
        </div>

        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-contain bg-no-repeat bg-center">
          <div className="absolute inset-0 items-center justify-center flex">
            <a href="">
              <img
                src="https://ftmo.com/wp-content/themes/ftmo-com/public/images/hero_play_btn.png"
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

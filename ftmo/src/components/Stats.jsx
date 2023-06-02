import styles from "../constants/data";

const Stats = () => {
  return (
    <div className="flex flex-wrap justify-center py-8 bg-[#262729] ">
      {styles.statlinks.map((stat) => (
        <div
          key={stat.id}
          className="w-full h-fu md:w-1/2 lg:w-1/4 p-4 text-center  font-poppins font-normal"
        >
          <h2 className="tracking-wider text-5xl font-bold text-[#0781fe] pb-4">
            {stat.figure}
          </h2>
          <span className="text-sm  max-w-[70%] font-medium text-center text-white">
            {stat.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Stats;

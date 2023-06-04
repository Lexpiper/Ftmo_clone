import data from "../constants/data";

const Awards = () => {
  return (
    <div className="bg-[#f4f4f4] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 py-16">
      {data.imgLinks.map((lin) => (
        <img key={lin.id} src={lin.link} className="max-w-full h-auto" alt="img" />
      ))}
    </div>
  );
};

export default Awards;

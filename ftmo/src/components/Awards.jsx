import styles from "../constants/styles";
const Awards = () => {
  return (
    <div className="bg-[#f4f4f4] grid grid-cols-6 gap-4 align-baseline pt-[4.6875rem] pb-[4.6875rem]">
      {styles.imgLinks.map((lin) => (
        <img key={lin.id} src={lin.link} className="max-w-full h-auto" alt="img" />
      ))}
    </div>
  );
};

export default Awards;
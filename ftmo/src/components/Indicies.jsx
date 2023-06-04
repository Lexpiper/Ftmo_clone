import Livedata from "./livedata";

const Indicies = () => {
  const indexes = [
    {
      id: 1,
      Pair: "US30.cash",
      p1: "32,953.20",
      p2: "32,951.70",
      p3: "1.50",
      comm: " 0.00",
      cost: "1.50",
    },
    {
      id: 1,
      Pair: "US100.cash",
      p1: "14,257.33",
      p2: "14,247.00",
      p3: " 2.00",
      comm: "0.00",
      cost: " 1.90",
    },
    {
      id: 1,
      Pair: "US500.cash",
      p1: "4,188.90",
      p2: "4,189.00",
      p3: "0.60",
      comm: "0.00",
      cost: "0.60",
    },
    {
      id: 1,
      Pair: "US2000.cash",
      p1: "1,754.60",
      p2: "1,754.90",
      p3: "0.20",
      comm: "0.00",
      cost: "0.20",
    },
    {
      id: 1,
      Pair: "GER40.cash",
      p1: "15,837.50",
      p2: "15,838.80",
      p3: "0.80",
      comm: "0.00",
      cost: "0.80",
    },
  ];

  return (
    <div>
      <Livedata data={indexes} />
    </div>
  );
};

export default Indicies;

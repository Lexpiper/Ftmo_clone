import { Awards, Evaluation, Hero, Navbar, Objectives, Propinfo, Stats } from "./components";

import styles from "./styles";

function App() {
  return (
    <div className={`w-full overflow-hidden ${styles.flexstart} `}>
      <div className={`w-full ${styles.boxWidth} bg-[#1e1e1e] `}>
        <Navbar />
      </div>

      <div className={`${styles.flexStart} w-full`}>
        <div className={`bg-[#212222] pb-6 w-full`}>
          <Hero />
        </div>
      </div>
      <div className={` ${styles.flexStart} bg-[#f4f4f4]`}>
        <div className={` w-full h-full`}>
          <Stats />
          <Awards />
          <Propinfo />
          <Evaluation/>
          <Objectives/>
        </div>
      </div>
    </div>
  );
}

export default App;

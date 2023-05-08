import { Awards, Hero, Navbar, Stats } from "./components";

// import { Awards, Hero, Info, Navbar, Stats } from "./components";

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
        </div>
      </div>
    </div>
  );
}

export default App;

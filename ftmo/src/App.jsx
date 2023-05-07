import { Hero, Navbar, Stats } from "./components";
import styles from "./styles";

function App() {
  return (
    <div className={`w-full overflow-hidden ${styles.flexstart} `}>
      <div className={`w-full ${styles.boxWidth} bg-[#1e1e1e] `}>
        <Navbar />
      </div>

      <div className={`bg-[#212122] ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} `}>
          <Stats />
        </div>
      </div>
    </div>
  );
}

export default App;

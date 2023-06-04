import {
  Awards,
  CTA,
  Evaluation,
  Footer,
  Hero,
  Highlight,
  Navbar,
  Objectives,
  Propinfo,
  Proprietary,
  Stats,
} from "./components";
import Firms from "./components/Firms";
import Livetable from "./components/Livetable";
import Review from "./components/Review";

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
          <Evaluation />
          <Objectives />
          <Highlight />
          <Livetable />
          <Proprietary />
          <Firms />
          <Review />
          <CTA/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;

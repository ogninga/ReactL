import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You can focus on running your business,{" "}
        <br className="sm:block hidden" /> while we focus on payment processing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        There are hundreds of credit cards on the market, with the right one you
        can improve your credit score, earn rewards, and save money.
      </p>

      <Button styles="mt-10" />
    </div>
  </section>
);
export default Business;

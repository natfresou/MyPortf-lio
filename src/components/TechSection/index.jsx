import style from "./style.module.css";
import { Title } from "../Title";
import { technologies } from "../../data/technologies.js";
import { TechCard } from "../TechCard/index";

export const TechSection = () => {
  return (
    <section  id="techSection" className={style.section}>
      <Title text="Hard Skills" />
      <ul className={style.ul}>
        <TechCard name={technologies[0].name} img={technologies[0].img} />
        <TechCard name={technologies[1].name} img={technologies[1].img} />
        <TechCard name={technologies[2].name} img={technologies[2].img} />
        <TechCard name={technologies[3].name} img={technologies[3].img} />
        <TechCard name={technologies[4].name} img={technologies[4].img} />
        <TechCard name={technologies[5].name} img={technologies[5].img} />
        <TechCard name={technologies[6].name} img={technologies[6].img} />
        <TechCard name={technologies[7].name} img={technologies[7].img} />
        <TechCard name={technologies[8].name} img={technologies[8].img} />
        <TechCard name={technologies[9].name} img={technologies[9].img} />
        <TechCard name={technologies[10].name} img={technologies[10].img} />
        <TechCard name={technologies[11].name} img={technologies[11].img} />
      </ul>
    </section>
  );
};

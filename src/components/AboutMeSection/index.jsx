import style from "./style.module.css";
import { Title } from "../Title";
import { Texto } from "../Texto";
import "../Texto";

export const AboutMeSection = () => {
  return (
    <section id="aboutMeSection" className={style.section}>
      <div className={style.tittleContainner}>
        <Title text="Sobre mim" />
      </div>
      <div className={style.textContainner}>
        <Texto text="Após 15 anos de atuação como engenheira em indústrias da área sucroalcooleira e de autopeças, o mundo da programação me conquistou pela curiosidade e vontade de descobrir o novo. Tem sido uma jornada empolgante. As minhas experiências anteriores me deram a bagagem para sempre buscar entregar 110% daquilo que eu me comprometo. São muitos os desafios diários nessa jornada e o foco, a resiliência e planejamento das etapas vem sendo extremante importantes para garantir o avanço degrau por degrau por esse maravilhoso Novo Mundo." />
      </div>
    </section>
  );
};

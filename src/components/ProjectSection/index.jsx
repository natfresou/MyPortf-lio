import style from "./style.module.css";
import { Title } from "../Title";
import { ProjectCard } from "../ProjectCard";
import { projects } from "../../data/projects.js";

export const ProjectsSection = () => {
  return (
    <section id="projectSection" className={style.section}>
      <Title text="Meus Projetos" />
      <ul>
        <ProjectCard
          name={projects[0].name} 
          techs={projects[0].techs}
          descricao={projects[0].descricao}
          pLink={projects[0].pLink}
        />
        <ProjectCard
          name={projects[11].name}
          techs={projects[11].techs}
          descricao={projects[11].descricao}
          pLink={projects[11].pLink}
          vLink={projects[11].vLink}
        />
        <ProjectCard
          name={projects[2].name}
          techs={projects[2].techs}
          descricao={projects[2].descricao}
          pLink={projects[2].pLink}
          vLink={projects[2].vLink}
        />
          <ProjectCard
          name={projects[1].name}
          techs={projects[1].techs}
          descricao={projects[1].descricao}
          pLink={projects[1].pLink}
        />
        <ProjectCard
          name={projects[3].name}
          techs={projects[3].techs}
          descricao={projects[3].descricao}
          pLink={projects[3].pLink}
        />
        <ProjectCard
          name={projects[4].name}
          techs={projects[4].techs}
          descricao={projects[4].descricao}
          pLink={projects[4].pLink}
        />
        <ProjectCard
          name={projects[5].name}
          techs={projects[5].techs}
          descricao={projects[5].descricao}
          pLink={projects[5].pLink}
        />
        <ProjectCard
          name={projects[6].name}
          techs={projects[6].techs}
          descricao={projects[6].descricao}
          pLink={projects[6].pLink}
        />
        <ProjectCard
          name={projects[7].name}
          techs={projects[7].techs}
          descricao={projects[7].descricao}
          pLink={projects[7].pLink}
        />
        <ProjectCard
          name={projects[8].name}
          descricao={projects[8].descricao}
          pLink={projects[8].pLink}
        />
        <ProjectCard
          name={projects[9].name}
          techs={projects[9].techs}
          descricao={projects[9].descricao}
          pLink={projects[9].pLink}
        />
        <ProjectCard
          name={projects[10].name}
          techs={projects[10].techs}
          descricao={projects[10].descricao}
          pLink={projects[10].pLink}
        />
      </ul>
    </section>
  );
};

import style from "./style.module.css";
import { Title } from "../Title";
import { ProjectCard } from "../ProjectCard";
import { projects } from "../../data/projects.js";

export const ProjectsSection = () => {
  return (
    <section id="projectSection" className={style.section}>
      <Title text="Projetos" />
      <ul>
        <ProjectCard
          name={projects[0].name}
          descricao={projects[0].descricao}
          pLink={projects[0].pLink}
        />
        <ProjectCard
          name={projects[1].name}
          descricao={projects[1].descricao}
          pLink={projects[1].pLink}
        />
        <ProjectCard
          name={projects[2].name}
          descricao={projects[2].descricao}
          pLink={projects[2].pLink}
        />
        <ProjectCard
          name={projects[3].name}
          descricao={projects[3].descricao}
          pLink={projects[3].pLink}
        />
        <ProjectCard
          name={projects[4].name}
          descricao={projects[4].descricao}
          pLink={projects[4].pLink}
        />
        <ProjectCard
          name={projects[5].name}
          descricao={projects[5].descricao}
          pLink={projects[5].pLink}
        />
        <ProjectCard
          name={projects[6].name}
          descricao={projects[6].descricao}
          pLink={projects[6].pLink}
        />
        <ProjectCard
          name={projects[7].name}
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
          descricao={projects[9].descricao}
          pLink={projects[9].pLink}
        />
      </ul>
    </section>
  );
};
